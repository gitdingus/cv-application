import React from 'react';
import ContactInfo from './contact-info/ContactInfo.jsx';
import EducationExperience from './education-experience/EducationExperience.jsx';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactInfo />
        <EducationExperience />
      </div>

    );
  }
}

export default App;
