import { Environment, commitMutation, graphql } from "react-relay"
import {
  UpdateMyProfileInput,
  UserEmailPreferencesMutation,
  UserEmailPreferencesMutationResponse,
} from "v2/__generated__/UserEmailPreferencesMutation.graphql.ts"

export const UpdateUserEmailPreferencesMutation = (
  environment: Environment,
  input: UpdateMyProfileInput,
  id: string
) => {
  return new Promise<UserEmailPreferencesMutationResponse>(
    async (resolve, reject) => {
      commitMutation<UserEmailPreferencesMutation>(environment, {
        mutation: graphql`
          mutation UserEmailPreferencesMutation($input: UpdateMyProfileInput!)
            @raw_response_type {
            updateMyUserProfile(input: $input) {
              me {
                id
                emailFrequency
              }
            }
          }
        `,
        onCompleted: resolve,
        optimisticResponse: {
          updateMyUserProfile: {
            me: {
              id,
              emailFrequency: input.emailFrequency,
            },
          },
        },
        onError: reject,
        variables: {
          input,
        },
      })
    }
  )
}
