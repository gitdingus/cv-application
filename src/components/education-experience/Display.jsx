import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    const { eduList } = this.props;
    return (
      <div>
        <ul>
          {
            eduList.map((eduItem) => {
              const {
                university,
                areaOfStudy,
                degreeEarned,
                dateAcquired,
              } = eduItem;

              return (
                <li>
                  <p>{dateAcquired}</p>
                  <p>{university}</p>
                  <p>{areaOfStudy}</p>
                  <p>{degreeEarned}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Display.propTypes = {
  eduList: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      university: PropTypes.string,
      areaOfStudy: PropTypes.string,
      degreeEarned: PropTypes.string,
      dateAcquired: PropTypes.instanceOf(Date),
    }),
  ),
};

Display.defaultProps = {
  eduList: [],
};

export default Display;
