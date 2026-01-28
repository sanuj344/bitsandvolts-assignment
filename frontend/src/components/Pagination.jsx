import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalPages, startPage + maxPages - 1);

    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <Box className="pagination-container">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="pagination-btn prev-btn"
      >
        Previous
      </button>

      <div className="pagination-numbers">{renderPageNumbers()}</div>

      <button
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className="pagination-btn next-btn"
      >
        Next
      </button>

      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
    </Box>
  );
};

export default Pagination;
