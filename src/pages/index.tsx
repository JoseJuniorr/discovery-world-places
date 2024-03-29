import HomeTemplate from 'templates/Home';
import { MapProps } from 'components/Map';
import client from 'graphql/client';
import { GET_PLACES } from 'graphql/queries';
import { GetPlacesQuery } from 'gql/graphql';

const HomePage = ({ places }: MapProps) => {
  return <HomeTemplate places={places} />;
};

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    props: {
      places
    }
  };
};

export default HomePage;
