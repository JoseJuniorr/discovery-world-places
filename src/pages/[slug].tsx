import { GetPageBySlugQuery, PagesQuery } from 'gql/graphql';
import client from 'graphql/client';
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PageTemplate from 'templates/Pages';

export default function Page({ heading, body }) {
  const router = useRouter();

  if (router.isFallback) return 'carregando...';

  return <PageTemplate heading={heading} body={body} />;
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<PagesQuery>(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  });

  if (!page) return { notFound: true };

  return {
    revalidate: 60,
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
};
