// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
// CSS:

// Types, interfaces and enumns:
import type { Place } from '../api/Place.type';
import type { FC } from 'react';
interface LocationSearchProps {
  handleSearch: () => void;
}

const LocationSearch: FC<LocationSearchProps> = ({ handleSearch }) => {
  // JSX:
  return <div>Location Search</div>;
};

export default LocationSearch;
