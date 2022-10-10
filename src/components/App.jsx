import React from 'react';
import ContactInfo from './contact-info/ContactInfo.jsx';
import EducationExperience from './education-experience/EducationExperience.jsx';
import PracticalExperience from './practical-experience/PracticalExperience.jsx';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactInfo />
        <EducationExperience />
        <PracticalExperience />
      </div>

    );
  }
}

export default App;
