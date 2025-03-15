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
    <div
      className="stories-controls"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1.5rem",
        background: "rgba(248, 247, 245, 0.95)", // --off-white with opacity
        borderRadius: "1rem",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(8px)",
        maxWidth: "800px",
        margin: "0 auto",
        animation: "fadeIn 0.5s ease-out",
      }}
    >
      <input
        type="text"
        id="search-input"
        placeholder="Search stories..."
        aria-label="Search stories"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          flex: "1 1 300px",
          padding: "0.75rem 1rem",
          fontSize: "1rem",
          color: "#2d3a3a", // --dark
          background: "#ffffff", // --white
          border: "1px solid #d2d8d8", // --light-gray
          borderRadius: "0.5rem",
          outline: "none",
          transition: "all 0.3s ease",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.03)",
          "&:focus": {
            borderColor: "#3a8f85", // --primary-color
            boxShadow: "0 0 0 3px rgba(58, 143, 133, 0.2)",
          },
        }}
      />
      <select
        id="category-filter"
        aria-label="Filter by category"
        value={category}
        onChange={handleCategoryChange}
        style={{
          flex: "1 1 200px",
          padding: "0.75rem 1rem",
          fontSize: "1rem",
          color: "#2d3a3a", // --dark
          background: "#ffffff", // --white
          border: "1px solid #d2d8d8", // --light-gray
          borderRadius: "0.5rem",
          outline: "none",
          transition: "all 0.3s ease",
          appearance: "none",
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg fill=\"%234d5c5c\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "1rem",
          "&:focus": {
            borderColor: "#3a8f85", // --primary-color
            boxShadow: "0 0 0 3px rgba(58, 143, 133, 0.2)",
          },
        }}
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

// Inline keyframes for animations
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default SearchFilter;