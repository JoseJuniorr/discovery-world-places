import HomeTemplate from 'templates';

const places = [
  {
    id: '2',
    name: 'Campo Mourão',
    slug: 'campo-mourao',
    location: {
      latitude: -24.042706,
      longitude: -52.4262779
    }
  }
];

const HomePage = () => {
  return <HomeTemplate places={places} />;
};

export default HomePage;
