import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label className="">Search for a Youtube video</label>
          <input
            type="text"
            name=""
            value={term}
            placeholder="Search something !"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
