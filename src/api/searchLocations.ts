// Types, interfaces and enumns:
import { Place } from './Place.type';
interface SearchOptionsObj {
  limit?: number;
}

const BASE_URL: string = 'https://nominatim.openstreetmap.org/search?';
const searchOptions = (searchOptions: SearchOptionsObj) =>
  `format=geojson&addressdetails=1&layer=address&limit=${
    searchOptions.limit || 5
  }`;

// Query function:
export default async function searchLocations(term: string) {
  const res = await fetch(`${BASE_URL}q=${term}&${searchOptions({})}`);
  const data = await res.json();

  console.log(data);
}
