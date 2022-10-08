import React from 'react';
import PropTypes from 'prop-types';
import styles from './edit.module.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // set to false initially so errors don't show until necessary
      invalidUniversity: false,
      invalidAreaOfStudy: false,
      invalidDegreeEarned: false,
      invalidDateAcquired: false,
    };

    this.universityInput = React.createRef();
    this.areaOfStudyInput = React.createRef();
    this.degreeEarnedInput = React.createRef();
    this.dateAcquiredInput = React.createRef();

    this.addClicked = this.addClicked.bind(this);
  }

  addClicked() {
    const { addEducationExperience } = this.props;

    if (this.universityInput.current.checkValidity() === false) {
      this.setState({
        invalidUniversity: true,
      });
      return;
    }
    if (this.areaOfStudyInput.current.checkValidity() === false) {
      this.setState({
        invalidAreaOfStudy: true,
      });
      return;
    }
    if (this.degreeEarnedInput.current.checkValidity() === false) {
      this.setState({
        invalidDegreeEarned: true,
      });
      return;
    }
    if (this.dateAcquiredInput.current.checkValidity() === false) {
      this.setState({
        invalidDateAcquired: true,
      });
      return;
    }

    addEducationExperience();
  }

  inputChanged(field, target) {
    const { fieldChanged } = this.props;

    if (field === 'university') {
      if (target.checkValidity() === true) {
        this.setState({
          invalidUniversity: false,
        });
      }
    }

    if (field === 'areaOfStudy') {
      if (target.checkValidity() === true) {
        this.setState({
          invalidAreaOfStudy: false,
        });
      }
    }

    if (field === 'degreeEarned') {
      if (target.checkValidity() === true) {
        this.setState({
          invalidDegreeEarned: false,
        });
      }
    }

    if (field === 'dateAcquired') {
      if (target.checkValidity() === true) {
        this.setState({
          invalidDateAcquired: false,
        });
      }
    }

    fieldChanged(field, target.value);
  }

  render() {
    const {
      university,
      areaOfStudy,
      degreeEarned,
      dateAcquired,
    } = this.props;

    const {
      invalidUniversity,
      invalidAreaOfStudy,
      invalidDegreeEarned,
      invalidDateAcquired,
    } = this.state;

    return (
      <div>
        <form className={styles.educationForm}>
          <label htmlFor="university">School/University:</label>
          <input
            id="university"
            ref={this.universityInput}
            type="text"
            value={university}
            onChange={(e) => this.inputChanged('university', e.target)}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidUniversity === true) ? styles.active : ''}
              `
            }
          >
            University is a required field
          </div>
          <label htmlFor="area-of-study">Area of Study:</label>
          <input
            id="area-of-study"
            ref={this.areaOfStudyInput}
            type="text"
            value={areaOfStudy}
            onChange={(e) => this.inputChanged('areaOfStudy', e.target)}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidAreaOfStudy === true) ? styles.active : ''}
              `
            }
          >
            Area of Study is a required field
          </div>
          <label htmlFor="degree-earned">Degree Earned:</label>
          <input
            id="degree-earned"
            ref={this.degreeEarnedInput}
            type="text"
            value={degreeEarned}
            onChange={(e) => this.inputChanged('degreeEarned', e.target)}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidDegreeEarned === true) ? styles.active : ''}
              `
            }
          >
            Degree Earned is a required field
          </div>
          <label htmlFor="date-acquired">Date Acquired:</label>
          <input
            id="date-acquired"
            ref={this.dateAcquiredInput}
            type="text"
            value={dateAcquired}
            onChange={(e) => this.inputChanged('dateAcquired', e.target)}
            required
          />
          <div
            className={
              `
                ${styles.error}
                ${(invalidDateAcquired === true) ? styles.active : ''}
              `
            }
          >
            Date Acquired is a required field
          </div>
          <button type="button" onClick={this.addClicked}>Add Education Experience</button>
        </form>
      </div>
    );
  }
}

Edit.propTypes = {
  addEducationExperience: PropTypes.func,
  fieldChanged: PropTypes.func,
  university: PropTypes.string,
  areaOfStudy: PropTypes.string,
  degreeEarned: PropTypes.string,
  dateAcquired: PropTypes.string,

};

Edit.defaultProps = {
  addEducationExperience: () => {},
  fieldChanged: () => {},
  university: '',
  areaOfStudy: '',
  degreeEarned: '',
  dateAcquired: '',
};

export default Edit;
