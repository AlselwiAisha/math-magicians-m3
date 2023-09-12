import React from 'react';
/* eslint-disable react/prop-types */
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

export default ClcScrn;
