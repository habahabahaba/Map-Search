// 3rd party:
// Redux RTK:
// Store:
// React:
import { useState } from 'react';
// Context:
// Components:
// CSS:

// Types, interfaces and enumns:
import type { Place } from '../api/Place.type';
import type { FC } from 'react';
interface LocationSearchProps {
  handlePlaceClick: (place: Place) => void;
}

const LocationSearch: FC<LocationSearchProps> = ({ handleSearch }) => {
  // State:
  const [places, setPlaces] = useState<Place[]>([]);

  // JSX:
  return <div>Location Search!</div>;
};

export default LocationSearch;
