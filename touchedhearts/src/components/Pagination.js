import React from "react";

const Pagination = ({ storiesPerPage, totalStories, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <i className="fas fa-chevron-left"></i> Previous
      </button>
      <span id="page-info">
        Page {currentPage} of {pageNumbers.length}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        aria-label="Next page"
      >
        Next <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
