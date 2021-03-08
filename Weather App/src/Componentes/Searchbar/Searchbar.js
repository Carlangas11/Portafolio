import React, { useState } from 'react'


const Searchbar = ({onSearch}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
    }
    return (
        <form class="d-flex" onSubmit={(e) => onSubmit(e)} >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value = {city}
            onChange={e => setCity(e.target.value)}
          />
          <button type="submit" class="btn btn-warning">
            Search
          </button>
        </form>
    )
}

export default Searchbar;