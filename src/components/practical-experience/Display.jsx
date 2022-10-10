import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

Display.propTypes = {
  workExperience: PropTypes.arrayOf(PropTypes.shape({
    companyName: PropTypes.string,
    jobTitle: PropTypes.string,
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
    responsibilities: PropTypes.arrayOf(PropTypes.shape({
      uuid: PropTypes.string,
      responsibility: PropTypes.string,
    })),
  })),
};

Display.defaultProps = {
  workExperience: [],
};

export default Display;