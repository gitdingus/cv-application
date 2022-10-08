import React from 'react';
import PropTypes from 'prop-types';
import editButton from '../edit.svg';
import deleteButton from '../trash-can-outline.svg';
import styles from './display.module.css';

class Display extends React.Component {
  render() {
    const { eduList } = this.props;
    return (
      <div>
        <ul>
          {
            eduList.map((eduItem) => {
              const {
                edit,
                remove,
              } = this.props;
              const {
                uuid,
                university,
                areaOfStudy,
                degreeEarned,
                dateAcquired,
              } = eduItem;

              return (
                <li className={styles.educationItem} key={uuid}>
                  <p>{dateAcquired}</p>
                  <p>{university}</p>
                  <p>{areaOfStudy}</p>
                  <p>{degreeEarned}</p>
                  <button className="svg-button" type="button" onClick={() => edit(uuid)}><img src={editButton} alt="Edit Item" /></button>
                  <button className="svg-button" type="button" onClick={() => remove(uuid)}><img src={deleteButton} alt="Remove Item" /></button>
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
      dateAcquired: PropTypes.string, // change to date later
    }),
  ),
  remove: PropTypes.func,
  edit: PropTypes.func,
};

Display.defaultProps = {
  eduList: [],
  remove: () => {},
  edit: () => {},
};

export default Display;
