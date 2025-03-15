import React from "react";

const Pagination = ({ storiesPerPage, totalStories, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className="pagination"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem 1rem",
        background: "rgba(248, 247, 245, 0.95)", // --off-white with opacity
        borderRadius: "1rem",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(8px)",
        maxWidth: "500px",
        margin: "0 auto",
        animation: "fadeIn 0.5s ease-out",
      }}
    >
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1.25rem",
          fontSize: "1rem",
          color: currentPage === 1 ? "#7e8c8c" : "#3a8f85", // --medium-gray when disabled, --primary-color when active
          background: "#ffffff", // --white
          border: "1px solid #d2d8d8", // --light-gray
          borderRadius: "0.5rem",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          outline: "none",
          "&:hover": {
            background: currentPage === 1 ? "#ffffff" : "#3a8f85", // --primary-color on hover
            color: currentPage === 1 ? "#7e8c8c" : "#ffffff",
            borderColor: currentPage === 1 ? "#d2d8d8" : "#3a8f85",
          },
          "&:focus": {
            boxShadow: "0 0 0 3px rgba(58, 143, 133, 0.2)",
          },
        }}
      >
        <i
          className="fas fa-chevron-left"
          style={{ fontSize: "0.9rem" }}
        ></i>
        Previous
      </button>
      <span
        id="page-info"
        style={{
          fontSize: "1rem",
          color: "#2d3a3a", // --dark
          padding: "0.5rem 1rem",
          background: "rgba(255, 255, 255, 0.8)", // --white with opacity
          borderRadius: "0.5rem",
          border: "1px solid #8cc5bf", // --primary-light
        }}
      >
        Page {currentPage} of {pageNumbers.length}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        aria-label="Next page"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1.25rem",
          fontSize: "1rem",
          color: currentPage === pageNumbers.length ? "#7e8c8c" : "#3a8f85", // --medium-gray when disabled, --primary-color when active
          background: "#ffffff", // --white
          border: "1px solid #d2d8d8", // --light-gray
          borderRadius: "0.5rem",
          cursor: currentPage === pageNumbers.length ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          outline: "none",
          "&:hover": {
            background: currentPage === pageNumbers.length ? "#ffffff" : "#3a8f85", // --primary-color on hover
            color: currentPage === pageNumbers.length ? "#7e8c8c" : "#ffffff",
            borderColor: currentPage === pageNumbers.length ? "#d2d8d8" : "#3a8f85",
          },
          "&:focus": {
            boxShadow: "0 0 0 3px rgba(58, 143, 133, 0.2)",
          },
        }}
      >
        Next
        <i
          className="fas fa-chevron-right"
          style={{ fontSize: "0.9rem" }}
        ></i>
      </button>
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

export default Pagination;