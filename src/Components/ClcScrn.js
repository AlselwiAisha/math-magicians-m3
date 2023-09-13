import React from 'react';
import PropTypes from 'prop-types';

const ClcScrn = ({ value }) => {
  const val = `${value}`;
  return (
    <>
      <div className="clcScrn">
        {val}
      </div>
    </>
  );
};

ClcScrn.propTypes = {
  value: PropTypes.string.isRequired,
};
export default ClcScrn;
