import { useRouter } from 'next/router';
import { MapContainer as LeafletMap, Marker } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

const Map = ({ places }: MapProps) => {
  const router = useRouter();

  const renderMarker = ({ id, name, location, slug }) => {
    const { latitude, longitude } = location;
    return (
      <Marker
        key={`place-${id}`}
        title={name}
        position={[latitude, longitude]}
        eventHandlers={{
          click: () => {
            router.push(`/place/${slug}`);
          }
        }}
      />
    );
  };

  return (
    <LeafletMap
      center={[0, 0]}
      zoom={3}
      style={{ height: '100vh', width: '100%' }}
    >
      {places?.map(renderMarker)}
    </LeafletMap>
  );
};

export default Map;
