import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Edit from './Edit.jsx';
import Display from './Display.jsx';

class EducationExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eduList: [],
      university: '',
      areaOfStudy: '',
      degreeEarned: '',
      dateAcquired: '',
    };

    this.addEducationExperience = this.addEducationExperience.bind(this);
    this.editEducationExperience = this.editEducationExperience.bind(this);
    this.removeEducationExperience = this.removeEducationExperience.bind(this);
    this.fieldChanged = this.fieldChanged.bind(this);
  }

  addEducationExperience() {
    const {
      university,
      areaOfStudy,
      degreeEarned,
      dateAcquired,
    } = this.state;

    const { sendEducationExperience } = this.props;
    const newItem = {
      uuid: uuidv4(),
      university,
      areaOfStudy,
      degreeEarned,
      dateAcquired,
    };

    this.setState((prevState) => (
      {
        eduList: prevState.eduList.concat([newItem]),
        university: '',
        areaOfStudy: '',
        degreeEarned: '',
        dateAcquired: '',
      }
    ), () => {
      const { eduList } = this.state;
      sendEducationExperience(eduList);
    });
  }

  removeEducationExperience(uuid) {
    this.setState((prevState) => ({
      eduList: prevState.eduList.filter((item) => item.uuid !== uuid),
    }));
  }

  editEducationExperience(uuid) {
    const { eduList } = this.state;
    const eduItem = eduList.find((item) => item.uuid === uuid);
    this.setState({
      university: eduItem.university,
      areaOfStudy: eduItem.areaOfStudy,
      degreeEarned: eduItem.degreeEarned,
      dateAcquired: eduItem.dateAcquired,
    });

    this.removeEducationExperience(uuid);
  }

  fieldChanged(field, newValue) {
    this.setState({
      [field]: newValue,
    });
  }

  render() {
    const {
      eduList, university, areaOfStudy, degreeEarned, dateAcquired,
    } = this.state;

    return (
      <div className="cv-section">
        <h1 className="cv-section-header">Education Experience</h1>
        <Edit
          addEducationExperience={this.addEducationExperience}
          fieldChanged={this.fieldChanged}
          university={university}
          areaOfStudy={areaOfStudy}
          degreeEarned={degreeEarned}
          dateAcquired={dateAcquired}
        />
        <Display
          eduList={eduList}
          remove={this.removeEducationExperience}
          edit={this.editEducationExperience}
        />
      </div>
    );
  }
}

EducationExperience.propTypes = {
  sendEducationExperience: PropTypes.func,
};

EducationExperience.defaultProps = {
  sendEducationExperience: () => {},
};

export default EducationExperience;
