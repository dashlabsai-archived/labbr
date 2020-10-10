import gql from 'graphql-tag'

export default gql`
  mutation(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
    ) {
    user: create_user(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password
    ) {
      _id
      email
    }
  }
`