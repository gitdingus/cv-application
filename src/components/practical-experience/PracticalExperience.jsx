import React from 'react';
import Edit from './Edit.jsx';
import styles from './practical-experience.module.css';
import '../app.css';

class PracticalExperience extends React.Component {
  render() {
    return (
      <div className="cv-section">
        <h1 className="cv-section-header">Practical Experience</h1>
        <Edit />
      </div>
    );
  }
}

export default PracticalExperience;
