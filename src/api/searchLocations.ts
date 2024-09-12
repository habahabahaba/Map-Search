// Types, interfaces and enumns:
import { Place } from './Place.type';
interface SearchOptionsObj {
  limit?: number;
}
interface SearchLocationsResponse {
  features: {
    geometry: { coordinates: number[] };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}

const BASE_URL: string = 'https://nominatim.openstreetmap.org/search?';
const searchOptions = (searchOptions: SearchOptionsObj) =>
  `format=geojson&addressdetails=1&layer=address&limit=${
    searchOptions.limit || 5
  }`;

// Query function:
export default async function searchLocations(
  term: string,
  SearchOptionsObj: SearchOptionsObj = {}
): Promise<Place[]> {
  const res = await fetch(
    `${BASE_URL}q=${term}&${searchOptions(SearchOptionsObj)}`
  );
  const data: SearchLocationsResponse = await res.json();
  //   console.log(data);

  const places: Place[] = data.features.map(({ geometry, properties }) => ({
    id: properties.place_id,
    name: properties.display_name,
    longitude: geometry.coordinates[0],
    latitude: geometry.coordinates[1],
  }));

  return places;
}
