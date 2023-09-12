import React from 'react';
import PropTypes from 'prop-types';

class ClcScrn extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <div className="clcScrn">
        {value}
      </div>
    );
  }
}

ClcScrn.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ClcScrn;
