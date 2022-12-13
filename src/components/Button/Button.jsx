import React from 'react';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className="button" onClick={loadMore}>
      Load More
    </button>
  );
};
