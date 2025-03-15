import React, { useState } from "react";

const SearchFilter = ({ onSearchFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearchFilter(e.target.value, category);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onSearchFilter(searchTerm, e.target.value);
  };

  return (
    <div className="stories-controls">
      <input
        type="text"
        id="search-input"
        placeholder="Search stories..."
        aria-label="Search stories"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select
        id="category-filter"
        aria-label="Filter by category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="all">All Categories</option>
        <option value="healthcare">Healthcare</option>
        <option value="education">Education</option>
        <option value="disability">Disability Support</option>
        <option value="community">Community Development</option>
      </select>
    </div>
  );
};

export default SearchFilter;
