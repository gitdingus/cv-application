import React from 'react';
import Edit from './Edit.jsx';
import Display from './Display.jsx';
import styles from './practical-experience.module.css';
import '../app.css';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workExperience: [],
    };
  }

  addWorkExperience(data) {
    this.setState((prevState) => ({
      workExperience: prevState.workExperience.concat([data]),
    }));
  }

  render() {
    return (
      <div className="cv-section">
        <h1 className="cv-section-header">Practical Experience</h1>
        <Edit addWorkExperience={this.addWorkExperience} />
        <Display />
      </div>
    );
  }
}

export default PracticalExperience;
