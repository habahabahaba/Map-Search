// 3rd party:
// Query function:
import searchLocations from '../api/searchLocations';
// Redux RTK:
// Store:
// React:
import { useState, useRef, Fragment } from 'react';
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
    submitTimeoutRef.current = setTimeout(async () => {
      // console.log(`Calling search API with the search term: ${term}`);
      const results = await searchLocations(term);
      // console.log(response);
      setPlaces(() => results);
    }, 800);
  }

  // JSX:
  const renderedPlaces = places.map((place) => (
    <Fragment key={place.id}>
      <p className='text-sm'>{place.name}</p>
      <button
        onClick={() => handlePlaceClick(place)}
        className='bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded'
      >
        Go
      </button>
      <div className='border-b w-full col-span-2' />
    </Fragment>
  ));

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
        <button
          type='submit'
          className='bg-blue-500 text-s text-white font-bold py-1 px-1 mt-1 rounded'
        >
          Search
        </button>
      </form>
      <h1 className='font-bold mt-6'>Found Locations:</h1>
      <div className='grid grid-cols-[1fr_40px] gap-2 mt-2 items-center '>
        {renderedPlaces}
      </div>
    </div>
  );
};

export default LocationSearch;
