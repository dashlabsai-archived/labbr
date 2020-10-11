import gql from 'graphql-tag'

export default gql`
  mutation(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!,
    ) {
    eventRegistration: create_event_registration(
      email: $email,
      firstName: $firstName,
      lastName: $lastName
    ) {
      _id
      email
    }
  }
`