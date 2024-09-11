// 3rd party:
// Redux RTK:
// Store:
// React:
import { useState, useRef } from 'react';
// Context:
// Components:
// CSS:

// Types, interfaces and enumns:
import type { Place } from '../api/Place.type';
import type { FC, FormEvent } from 'react';
interface LocationSearchProps {
  handlePlaceClick: (place: Place) => void;
}

const LocationSearch: FC<LocationSearchProps> = ({ handlePlaceClick }) => {
  // State:
  const [term, setTerm] = useState<string>('');
  const [places, setPlaces] = useState<Place[]>([]);

  // Handlers:
  // Debouncing API calls:
  const submitTimeoutRef = useRef<number | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formattedTerm = term.trim();
    if (!formattedTerm) return;

    // Debouncing API calls:
    if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
    submitTimeoutRef.current = setTimeout(() => {
      console.log(`Calling search API with the search term: ${term}`);
    }, 800);
  }

  // JSX:
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='term' className='font-bold'>
          Search
        </label>
        <input
          value={term}
          onChange={(ev) => setTerm(() => ev.target.value)}
          type='text'
          name='term'
          id='term'
          className='border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default LocationSearch;
