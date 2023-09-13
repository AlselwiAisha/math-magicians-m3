import React from 'react';
import PropTypes from 'prop-types';

const ClcScrn = ({ total, next, operation }) => {
  const tot = `${total}`;
  const nxt = `${next}`;
  const oprtion = `${operation}`;
  return (
    <>
      <div className="clcScrn">
        {tot}
        {oprtion}
        {nxt}
      </div>
    </>
  );
};

ClcScrn.propTypes = {
  total: PropTypes.number.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
export default ClcScrn;
