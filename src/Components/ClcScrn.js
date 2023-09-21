import React from 'react';
/* eslint-disable react/prop-types */

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

export default ClcScrn;
