import { useState } from "react";
import "../SearchBar/SearchBar.css";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query) {
      alert("Please enter search value");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <div className="Container">
        <h1> What are you looking for? </h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
          />
          <button type="submit"> Search </button>
        </form>
      </div>
    </>
  );
};
