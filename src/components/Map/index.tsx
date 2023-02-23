import { useRouter } from 'next/router';
import { MapContainer as LeafletMap, Marker, TileLayer } from 'react-leaflet';
import envVars from 'envVars';

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

const CustomTileLayer = () => {
  return envVars.MAPBOX_API_KEY ? (
    <TileLayer
      attribution={
        '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
      }
      url={`https://api.mapbox.com/styles/v1/${envVars.MAPBOX_USER_ID}/${envVars.MAPBOX_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${envVars.MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution="Hello"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
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
      <CustomTileLayer />
    </LeafletMap>
  );
};

export default Map;
