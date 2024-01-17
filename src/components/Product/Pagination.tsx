import React from "react";

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <button onClick={() => handlePageChange(2)}>Load More Products</button>
  );
};

export default Pagination;
