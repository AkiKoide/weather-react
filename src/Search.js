import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form" clasName="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city name"
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="SEARCH"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
