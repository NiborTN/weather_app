import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const search = ({ search, setSearch, currentweatherHandler }) => {
  const searchChangeHandler = (e) => {
    setSearch(e);
    currentweatherHandler(e);
  };

  const loadOptions = async (options) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?minPopulation
        =1000000&namePrefix=${options}`,
        geoApiOptions
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={search}
      onChange={searchChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default search;
