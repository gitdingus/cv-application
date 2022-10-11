import React from 'react';
import PropTypes from 'prop-types';
import styles from './display.module.css';
import editButton from '../edit.svg';
import deleteButton from '../trash-can-outline.svg';

class Display extends React.Component {
  render() {
    const { workExperience, removeWorkExperience, editWorkExperience } = this.props;
    return (
      <div className={styles.practicalExperience}>
        <ul>
          {
            workExperience.map((item) => (
              <li key={item.uuid} className={styles.job}>
                <div className={styles.jobHeadline}>
                  <span>{item.beginDate}</span>
                  <span>-</span>
                  <span>{item.endDate}</span>
                  <span className={styles.companyName}>{item.companyName}</span>
                  <span className={styles.jobTitle}>{item.jobTitle}</span>
                  <button className="svg-button" type="button" onClick={() => editWorkExperience(item.uuid)}><img src={editButton} alt="Edit Work Experience" /></button>
                  <button className="svg-button" type="button" onClick={() => removeWorkExperience(item.uuid)}><img src={deleteButton} alt="Delete Work Experience" /></button>
                </div>
                <ul className={styles.responsibility}>
                  {
                    item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility.uuid}
                      >
                        {responsibility.responsibility}
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
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
  removeWorkExperience: PropTypes.func,
  editWorkExperience: PropTypes.func,
};

Display.defaultProps = {
  workExperience: [],
  removeWorkExperience: () => {},
  editWorkExperience: () => {},
};

export default Display;
