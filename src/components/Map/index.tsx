import { MapContainer as LeafletMap, Marker, TileLayer } from 'react-leaflet';

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
  const renderMarker = ({ id, name, location }) => {
    const { latitude, longitude } = location;
    return (
      <Marker
        key={`place-${id}`}
        title={name}
        position={[latitude, longitude]}
      />
    );
  };

  return (
    <LeafletMap
      center={[0, 0]}
      zoom={3}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution="Hello"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(renderMarker)}
    </LeafletMap>
  );
};

export default Map;
