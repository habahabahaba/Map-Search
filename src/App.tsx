// Components:
import LocationSearch from './Components/LocationSearch';
import Map from './Components/Map';
// CSS:

function App() {
  return (
    <div className='h-screen w-screen grid grid-cols-12'>
      <div className='col-span-3 p-2'>
        <LocationSearch />
      </div>
      <div className='col-span-9'>
        <Map />
      </div>
    </div>
  );
}

export default App;
