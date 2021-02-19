import React from "react"
import { commitMutation, RelayProp } from "react-relay"
import { mockStripe } from "v2/DevTools/mockStripe"
import { Elements } from "@stripe/react-stripe-js"
import { PaymentModal, PaymentModalProps } from "../PaymentModal"
import { mount } from "enzyme"
import { validAddress } from "v2/Components/__tests__/Utils/addressForm"
import {
  creatingCreditCardFailed,
  creatingCreditCardSuccess,
} from "v2/Apps/Order/Routes/__fixtures__/MutationResults"

// jest.unmock("react-relay")

// jest.mock("react-relay", () => ({
//   commitMutation: jest.fn(),
//   // commitMutation: () => {
//   //   console.log("lalala")
//   // },
//   createFragmentContainer: component => component,
//   createRefetchContainer: component => component,
// }))

jest.mock("@stripe/stripe-js", () => {
  let mock = null
  return {
    loadStripe: () => {
      if (mock === null) {
        mock = mockStripe()
      }
      return mock
    },
    _mockStripe: () => mock,
    _mockReset: () => (mock = mockStripe()),
  }
})

// const mutationMock = jest.fn()

const mutationMock = commitMutation as jest.Mock<any>

const { _mockStripe, _mockReset, loadStripe } = require("@stripe/stripe-js")

const testPaymentModalProps: PaymentModalProps = {
  me: {
    id: "1234",
    internalID: "1234",
    creditCards: {} as any,
    " $refType": "PaymentSection_me",
  },
  relay: { environment: {} } as RelayProp,
  show: true,
  closeModal: () => null,
}

function getWrapper() {
  const stripePromise = loadStripe("")
  return mount(
    <Elements stripe={stripePromise}>
      <PaymentModal {...testPaymentModalProps} />
    </Elements>
  )
}

describe("PaymentModal", () => {
  // TODO: needed ?
  beforeEach(() => {
    mutationMock.mockReset()
    _mockReset()
  })
  it("renders Modal with input fields", () => {
    const wrapper = getWrapper()
    expect(wrapper.find("input").length).toBe(6)
    expect(wrapper.find("select").length).toBe(1)
  })
  it("creates credit card when form is submitted", async () => {
    const wrapper = getWrapper()

    _mockStripe().createToken.mockReturnValue({
      then: func => func({ token: { id: "tokenId" } }),
    })

    mutationMock.mockImplementationOnce((_environment, { onCompleted }) => {
      onCompleted(creatingCreditCardSuccess)
    })

    const formik = wrapper.find("Formik").first()
    formik.props().onSubmit(validAddress as any)

    expect(_mockStripe().createToken).toHaveBeenCalledWith(null, {
      name: "Artsy UK Ltd",
      address_line1: "14 Gower's Walk",
      address_line2: "Suite 2.5, The Loom",
      address_city: "Whitechapel",
      address_state: "London",
      address_zip: "E1 8PY",
      address_country: "UK",
    })

    expect(mutationMock).toHaveBeenCalled()
  })
  it("shows error when credit card creation fails", async () => {
    const wrapper = getWrapper()

    _mockStripe().createToken.mockReturnValue({
      then: func => func({ error: { message: "Invalid credit card number" } }),
    })

    const formik = wrapper.find("Formik").first()
    formik.props().onSubmit(validAddress as any)

    await wrapper.update()
    expect(wrapper.find("form").first().text()).toContain(
      "Invalid credit card number"
    )
  })
  it("shows generic error when mutation fails", async () => {
    let wrapper = getWrapper()

    _mockStripe().createToken.mockReturnValue({
      then: func => func({ token: { id: "tokenId" } }),
    })

    mutationMock.mockImplementationOnce((_, { onError }) =>
      onError(new TypeError("Network request failed"))
    )

    const formik = wrapper.find("Formik").first()
    formik.props().onSubmit(validAddress as any)

    wrapper = await wrapper.update()
    expect(wrapper.find("form").first().text()).toContain("Failed.")
  })
  it("shows generic error when mutation returns error", async () => {
    let wrapper = getWrapper()

    _mockStripe().createToken.mockReturnValue({
      then: func => func({ token: { id: "tokenId" } }),
    })

    mutationMock.mockImplementationOnce((_, { onCompleted }) =>
      onCompleted(creatingCreditCardFailed)
    )

    const formik = wrapper.find("Formik").first()
    formik.props().onSubmit(validAddress as any)

    wrapper = await wrapper.update()
    expect(wrapper.find("form").first().text()).toContain(
      "Failed. Payment error"
    )
  })
})
