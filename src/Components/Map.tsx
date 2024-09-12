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

const Map: FC<MapProps> = ({ place }) => {
  // JSX:
  return <div>Map</div>;
};

export default Map;
