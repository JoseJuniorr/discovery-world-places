import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query Pages($first: Int) {
    pages(first: $first) {
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

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`;
