import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query Pages {
    pages {
      createdAt
      heading
      id
      publishedAt
      slug
      updatedAt
      body {
        html
      }
    }
  }
`;
