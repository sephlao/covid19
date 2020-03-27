import React from "react";
import { useFetch } from "../utils/customHooks";

const Search = ({ selectCountry }) => {
  const [data, error, loading] = useFetch("https://covid19.mathdro.id/api/countries");

  if(error) return <p className="status">Something went wrong...</p>
  if(loading || !data) return <p className="status">Fetching countries...</p>
  
  return (
    <div className="searchbar">
      <select
        className="input search"
        name="country"
        onChange={e => selectCountry(e.target.value)}
      >
        <option key="default" value="">Select a country</option>
        {Object.values(data.countries).map(({iso2, name}, i) => {
            return <option key={i} value={JSON.stringify({iso: iso2, name})}>{name}</option>
        })}
      </select>
    </div>
  );
};

export default Search;
