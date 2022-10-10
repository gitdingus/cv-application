import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './edit.module.css';
import addButton from '../plus.svg';
import editButton from '../edit.svg';
import trashButton from '../trash-can-outline.svg';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.companyNameInput = React.createRef();
    this.jobTitleInput = React.createRef();
    this.beginDateInput = React.createRef();
    this.endDateInput = React.createRef();
    this.responsibilitesTextArea = React.createRef();
    this.state = {
      companyName: '',
      jobTitle: '',
      beginDate: '',
      endDate: '',
      responsibility: '',
      responsibilities: [],
      invalidCompanyName: false,
      invalidJobTitle: false,
      invalidBeginDate: false,
      invalidEndDate: false,
      responsibilitiesEmpty: false,
    };

    this.addResponsibility = this.addResponsibility.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  inputChanged(field, target) {
    this.setState({
      [field]: target.value,
    });

    switch (field) {
      case 'companyName':
        this.setState({
          invalidCompanyName: !target.checkValidity(),
        });
        break;
      case 'jobTitle':
        this.setState({
          invalidJobTitle: !target.checkValidity(),
        });
        break;
      case 'beginDate':
        this.setState({
          invalidBeginDate: !target.checkValidity(),
        });
        break;
      case 'endDate':
        this.setState({
          invalidEndDate: !target.checkValidity(),
        });
        break;
      default: break;
    }
  }

  addResponsibility() {
    const { responsibility } = this.state;
    const newResponsibility = {
      uuid: uuidv4(),
      responsibility,
    };
    this.setState((prevState) => ({
      responsibilities: prevState.responsibilities.concat([newResponsibility]),
      responsibility: '',
      responsibilitiesEmpty: false,
    }));

    this.responsibilitesTextArea.current.focus();
  }

  addExperience() {
    const {
      responsibilities,
    } = this.state;

    let problems = false;
    if (this.companyNameInput.current.checkValidity() !== true) {
      this.setState({
        invalidCompanyName: true,
      });
      problems = true;
    }
    if (this.jobTitleInput.current.checkValidity() !== true) {
      this.setState({
        invalidJobTitle: true,
      });
      problems = true;
    }
    if (this.beginDateInput.current.checkValidity() !== true) {
      this.setState({
        invalidBeginDate: true,
      });
      problems = true;
    }
    if (this.endDateInput.current.checkValidity() !== true) {
      this.setState({
        invalidEndDate: true,
      });
      problems = true;
    }
    if (responsibilities.length <= 0) {
      this.setState({
        responsibilitiesEmpty: true,
      });
      problems = true;
    }

    if (problems === true) {
      return;
    }

    console.log('valid bingbong');
  }

  render() {
    const {
      companyName,
      jobTitle,
      beginDate,
      endDate,
      responsibility,
      responsibilities,
      invalidCompanyName,
      invalidJobTitle,
      invalidBeginDate,
      invalidEndDate,
      responsibilitiesEmpty,
    } = this.state;
    return (
      <div>
        <form className={styles.practicalExperienceForm}>
          <label htmlFor="company-name">Company Name:</label>
          <input
            id="company-name"
            ref={this.companyNameInput}
            type="text"
            value={companyName}
            onChange={(e) => { this.inputChanged('companyName', e.target); }}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidCompanyName === true) ? styles.active : ''} // change when adding validation
              `
            }
          >
            Company Name is a required field
          </div>
          <label htmlFor="job-title">Job Title:</label>
          <input
            id="job-title"
            ref={this.jobTitleInput}
            type="text"
            value={jobTitle}
            onChange={(e) => { this.inputChanged('jobTitle', e.target); }}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidJobTitle === true) ? styles.active : ''} // change when adding validation
              `
            }
          >
            Job Title is a required field
          </div>
          <label htmlFor="date-begin">Dates Employed:</label>
          <input
            id="date-begin"
            ref={this.beginDateInput}
            type="text"
            value={beginDate}
            onChange={(e) => { this.inputChanged('beginDate', e.target); }}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidBeginDate === true) ? styles.active : ''}  // change when adding validation
              `
            }
          >
            Date Employed is a required field
          </div>
          <label htmlFor="date-end ">Through:</label>
          <input
            id="date-end"
            ref={this.endDateInput}
            type="text"
            value={endDate}
            onChange={(e) => { this.inputChanged('endDate', e.target); }}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidEndDate === true) ? styles.active : ''}  // change when adding validation
              `
            }
          >
            Must supply an end date.
          </div>
          <label className={styles.responsibilitiesLabel} htmlFor="responsibilities">Responsibilities:</label>
          <textarea
            id="responsibilities"
            ref={this.responsibilitesTextArea}
            value={responsibility}
            onChange={(e) => { this.inputChanged('responsibility', e.target); }}
          />
          <button
            className={`svg-button ${styles.addResponsibilitiesButton}`}
            type="button"
            onClick={this.addResponsibility}
          >
            <img src={addButton} alt="Add Experience" />
          </button>
          <ul className={styles.responsibilities}>
            {
              responsibilities.map((x) => (
                <li key={x.uuid} className={styles.responsibility}>
                  {x.responsibility}
                  <button className="svg-button" type="button"><img src={editButton} alt="Edit Responsibility" /></button>
                  <button className="svg-button" type="button"><img src={trashButton} alt="Remove Responsibility" /></button>
                </li>
              ))
            }
          </ul>
          <div
            className={
              `
                ${styles.error}
                ${(responsibilitiesEmpty === true) ? styles.active : ''}  // change when adding validation
              `
            }
          >
            Must enter at least one responsibility
          </div>
          <button
            className={styles.addExperienceButton}
            type="button"
            onClick={this.addExperience}
          >
            Add Practical Experience
          </button>
        </form>

      </div>
    );
  }
}

export default Edit;
