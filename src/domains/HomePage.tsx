import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

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
  return <Map places={places} />;
};

export default HomePage;
