import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql `
query {
    allAuthors {
        name
        born
        bookCount
        id
    }
}
`

export const ALL_BOOKS = gql `
query {
    allBooks {
      title
      published
      author {
        name
        born
        bookCount
        id
      }
      genres
    } 
  }
`

export const ADD_BOOK = gql `
mutation createBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
    addBook(
        title: $title
        published: $published
        author: $author
        genres: $genres
    ) {
        title
        published
        author {
            name
        }
        genres
    }
}
`


export const EDIT_YEAR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
      id
    }
  }
`
