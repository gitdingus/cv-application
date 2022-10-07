import React from 'react';
import PropTypes from 'prop-types';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      university: '',
      areaOfStudy: '',
      degreeEarned: '',
      dateAcquired: '',
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.addClicked = this.addClicked.bind(this);
  }

  inputChanged(stateField, target) {
    this.setState({
      [stateField]: target.value,
    });
  }

  addClicked() {
    const { addEducationExperience } = this.props;
    addEducationExperience(this.state);

    this.setState({
      university: '',
      areaOfStudy: '',
      degreeEarned: '',
      dateAcquired: '',
    });
  }

  render() {
    const {
      university,
      areaOfStudy,
      degreeEarned,
      dateAcquired,
    } = this.state;
    return (
      <div>
        <form className={styles.educationForm}>
          <label htmlFor="university">School/University:</label>
          <input id="university" type="text" value={university} onChange={(e) => this.inputChanged('university', e.target)} />
          <label htmlFor="area-of-study">Area of Study:</label>
          <input id="area-of-study" type="text" value={areaOfStudy} onChange={(e) => this.inputChanged('areaOfStudy', e.target)} />
          <label htmlFor="degree-earned">Degree Earned:</label>
          <input id="degree-earned" type="text" value={degreeEarned} onChange={(e) => this.inputChanged('degreeEarned', e.target)} />
          <label htmlFor="date-acquired">Date Acquired:</label>
          <input id="date-acquired" type="text" value={dateAcquired} onChange={(e) => this.inputChanged('dateAcquired', e.target)} />
          <button type="button" onClick={this.addClicked}>Add Education Experience</button>
        </form>
      </div>
    );
  }
}

Edit.propTypes = {
  addEducationExperience: PropTypes.func,
};

Edit.defaultProps = {
  addEducationExperience: () => {},
};

export default Edit;
