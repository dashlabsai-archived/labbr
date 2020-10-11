import gql from 'graphql-tag'

export default gql`
  mutation(
    $email: String!
    ) {
    eventRegistration: book_appointment(
      email: $email
    ) {
      _id
      email
    }
  }
`