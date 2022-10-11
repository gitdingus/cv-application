import React from 'react';
import Edit from './Edit.jsx';
import Display from './Display.jsx';
import '../app.css';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workExperience: [],
      companyName: '',
      jobTitle: '',
      beginDate: '',
      endDate: '',
      responsibility: '',
      responsibilities: [],
    };

    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.addResponsibility = this.addResponsibility.bind(this);
    this.editResponsibility = this.editResponsibility.bind(this);
    this.removeResponsibility = this.removeResponsibility.bind(this);
    this.editWorkExperience = this.editWorkExperience.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  addWorkExperience(data) {
    this.setState((prevState) => ({
      workExperience: prevState.workExperience.concat([data]),
      companyName: '',
      jobTitle: '',
      beginDate: '',
      endDate: '',
      responsibility: '',
      responsibilities: [],
    }));
  }

  addResponsibility(data) {
    this.setState((prevState) => ({
      responsibility: '',
      responsibilities: prevState.responsibilities.concat([data]),
    }));
  }

  removeWorkExperience(uuid) {
    this.setState((prevState) => ({
      workExperience: prevState.workExperience.filter((exp) => exp.uuid !== uuid),
    }));
  }

  removeResponsibility(uuid) {
    this.setState((prevState) => ({
      responsibilities: prevState.responsibilities.filter((item) => item.uuid !== uuid),
    }));
  }

  editWorkExperience(uuid) {
    const { workExperience } = this.state;
    const currentJob = workExperience.find((job) => job.uuid === uuid);
    const {
      companyName, jobTitle, beginDate, endDate, responsibilities,
    } = currentJob;

    this.setState({
      companyName,
      jobTitle,
      beginDate,
      endDate,
      responsibilities,
    });

    this.removeWorkExperience(currentJob.uuid);
  }

  editResponsibility(uuid) {
    const { responsibilities } = this.state;
    const { responsibility } = responsibilities.find((x) => x.uuid === uuid);

    this.setState({
      responsibility,
    });

    this.removeResponsibility(uuid);
  }

  inputChanged(field, value) {
    this.setState({
      [field]: value,
    });
  }

  render() {
    const {
      workExperience,
      companyName,
      jobTitle,
      beginDate,
      endDate,
      responsibilities,
      responsibility,
    } = this.state;

    return (
      <div className="cv-section">
        <h1 className="cv-section-header">Practical Experience</h1>
        <Edit
          addWorkExperience={this.addWorkExperience}
          addResponsibility={this.addResponsibility}
          editResponsibility={this.editResponsibility}
          removeResponsibility={this.removeResponsibility}
          inputChanged={this.inputChanged}
          companyName={companyName}
          jobTitle={jobTitle}
          beginDate={beginDate}
          endDate={endDate}
          responsibilities={responsibilities}
          responsibility={responsibility}
        />
        <Display
          workExperience={workExperience}
          editWorkExperience={this.editWorkExperience}
          removeWorkExperience={this.removeWorkExperience}
        />
      </div>
    );
  }
}

export default PracticalExperience;
