// 3rd party:
// Leaflet:
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// Redux RTK:
// Store:
// React:
import { useEffect, useRef } from 'react';
// Context:
// Components:
// CSS:
import 'leaflet/dist/leaflet.css';

// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type { Place } from '../api/Place.type';

interface MapProps {
  place: Place | null;
}

const tilesUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const Map: FC<MapProps> = ({ place }) => {
  // Map Ref:
  const mapRef = useRef<LeafletMap | null>(null);

  // Automatic map positioning:
  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  // JSX:
  return (
    <MapContainer
      ref={mapRef}
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom={true}
      className='h-full'
    >
      <TileLayer url={tilesUrl} />
      {place ? <Marker position={[place.latitude, place.longitude]} /> : null}
    </MapContainer>
  );
};

export default Map;
