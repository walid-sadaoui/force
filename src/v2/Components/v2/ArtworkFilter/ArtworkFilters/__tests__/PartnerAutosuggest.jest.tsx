import { PartnerAutosuggest } from "../PartnerAutosuggest"
import { ReactWrapper, mount } from "enzyme"
import React from "react"
import { ArtworkFilterContextProvider } from "../../ArtworkFilterContext"

const searchResults = [
  {
    value: "doggy-gallery",
    count: 12,
    name: "Doggy Gallery",
  },
  {
    value: "catty-gallery",
    count: 12,
    name: "Catty Gallery",
  },
]

const simulateTyping = (wrapper: ReactWrapper, text: string) => {
  const textArea = wrapper.find("input")
  textArea.simulate("focus")
  // @ts-ignore
  textArea.getDOMNode().value = text
  textArea.simulate("change")
}

const getWrapper = suggestions => {
  return mount(
    <ArtworkFilterContextProvider>
      <PartnerAutosuggest partners={suggestions} />
    </ArtworkFilterContextProvider>
  )
}

describe("SearchBar", () => {
  it("displays search results", () => {
    const component = getWrapper(searchResults)

    simulateTyping(component, "cat")

    expect(component.text()).toContain("Catty Gallery")
    expect(component.text()).not.toContain("Doggy Gallery")
  })

  it("displays empty state", () => {
    const component = getWrapper(searchResults)

    simulateTyping(component, "magic")

    expect(component.text()).toContain("No results found.")
  })
})
