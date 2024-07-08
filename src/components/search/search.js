import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${inputValue}&appid=${API_KEY}`
      );
      const responseData = await response.json();

      if (responseData.cod !== 200) {
        throw new Error(responseData.message);
      }

      return {
        options: [
          {
            value: `${responseData.coord.lat} ${responseData.coord.lon}`,
            label: `${responseData.name}, ${responseData.sys.country}`,
          },
        ],
      };
    } catch (err) {
      console.error(err);
      return {
        options: [],
      };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
