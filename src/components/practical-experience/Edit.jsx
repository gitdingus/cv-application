import React from 'react';
import styles from './edit.module.css';
import addButton from '../plus.svg';

class Edit extends React.Component {
  render() {
    return (
      <div>
        <form className={styles.practicalExperienceForm}>
          <label htmlFor="company-name">Company Name:</label>
          <input id="company-name" type="text" />
          <div
            className={
              `
                ${styles.error}
                ${(true === true) ? styles.active : ''} // change when adding validation
              `
            }
          >
            Company Name is a required field
          </div>
          <label htmlFor="job-title">Job Title:</label>
          <input id="job-title" type="text" />
          <div
            className={
              `
                ${styles.error}
                ${(true === true) ? styles.active : ''} // change when adding validation
              `
            }
          >
            Job Title is a required field
          </div>
          <label htmlFor="date-begin">Dates Employed:</label>
          <input id="date-begin" type="text" />
          <div
            className={
              `
                ${styles.error}
                ${(true === true) ? styles.active : ''}  // change when adding validation
              `
            }
          >
            Date Employed is a required field
          </div>
          <label htmlFor="date-end ">Through:</label>
          <input id="date-end" type="text" />
          <div
            className={
              `
                ${styles.error}
                ${(true === true) ? styles.active : ''}  // change when adding validation
              `
            }
          >
            Must supply an end date.
          </div>
          <label className={styles.responsibilitiesLabel} htmlFor="responsibilities">Responsibilities:</label>
          <textarea id="responsibilities" />
          <button className={`svg-button ${styles.addResponsibilitiesButton}`} type="button"><img src={addButton} alt="Add Experience" /></button>
        </form>
      </div>
    )
  }
}

export default Edit;