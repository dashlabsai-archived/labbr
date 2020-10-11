import gql from 'graphql-tag'

export default gql`
  query($email: String!) {
    eventRegistration: event_registration(email: $email) {
      firstName
      lastName
      name
    }
  }
`
