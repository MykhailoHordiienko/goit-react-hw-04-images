import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className="button" onClick={loadMore}>
      Load More
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
