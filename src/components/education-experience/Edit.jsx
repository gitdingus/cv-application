import React from 'react';
import PropTypes from 'prop-types';
import styles from './edit.module.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.addClicked = this.addClicked.bind(this);
  }

  addClicked() {
    const { addEducationExperience } = this.props;

    addEducationExperience();
  }

  render() {
    const {
      university,
      areaOfStudy,
      degreeEarned,
      dateAcquired,
      fieldChanged,
    } = this.props;

    return (
      <div>
        <form className={styles.educationForm}>
          <label htmlFor="university">School/University:</label>
          <input id="university" type="text" value={university} onChange={(e) => fieldChanged('university', e.target.value)} />
          <label htmlFor="area-of-study">Area of Study:</label>
          <input id="area-of-study" type="text" value={areaOfStudy} onChange={(e) => fieldChanged('areaOfStudy', e.target.value)} />
          <label htmlFor="degree-earned">Degree Earned:</label>
          <input id="degree-earned" type="text" value={degreeEarned} onChange={(e) => fieldChanged('degreeEarned', e.target.value)} />
          <label htmlFor="date-acquired">Date Acquired:</label>
          <input id="date-acquired" type="text" value={dateAcquired} onChange={(e) => fieldChanged('dateAcquired', e.target.value)} />
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
