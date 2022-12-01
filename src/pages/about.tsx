import About from 'domains/about';
import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);

  console.log(pages);

  return {
    props: {
      pagesData: pages
    }
  };
};

export default About;
