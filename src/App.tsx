// React:
import { useState } from 'react';
// Components:
import LocationSearch from './Components/LocationSearch';
import Map from './Components/Map';
// CSS:

// Types, interfaces and enumns:
import type { Place } from './api/Place.type';

function App() {
  // State:
  const [place, setPlace] = useState<Place | null>(null);

  // Handlers:
  function handleSearch() {}

  // JSX:
  return (
    <div className='h-screen w-screen grid grid-cols-12'>
      <div className='col-span-3 p-2'>
        <LocationSearch handleSearch={handleSearch} />
      </div>
      <div className='col-span-9'>
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
