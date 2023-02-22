import { GetPlaceBySlugQuery, GetPlacesQuery } from 'gql/graphql';
import client from 'graphql/client';
import { GET_PAGE_BY_SLUG, GET_PLACES } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places';

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return 'carregando...';

  return <PlacesTemplate place={place} />;
}

export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PAGE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  console.log({ place });

  if (!place) return { notFound: true };

  return {
    revalidate: 60,
    props: {
      place
    }
  };
};
