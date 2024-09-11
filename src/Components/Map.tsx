// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Place } from '../api/Place.type';

interface MapProps {
  place: Place | null;
}

const Map: FC<MapProps> = ({ place }) => {
  // JSX:
  return <div>Map</div>;
};

export default Map;
