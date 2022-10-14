import React from 'react';
import ContactInfo from './contact-info/ContactInfo.jsx';
import EducationExperience from './education-experience/EducationExperience.jsx';
import PracticalExperience from './practical-experience/PracticalExperience.jsx';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: null,
      educationExperience: null,
      practicalExperience: null,
    };

    this.receiveContactInfo = this.receiveContactInfo.bind(this);
    this.receiveEducationExperience = this.receiveEducationExperience.bind(this);
    this.receivePracticalExperience = this.receivePracticalExperience.bind(this);
    this.createCv = this.createCv.bind(this);
  }

  receiveContactInfo(data) {
    console.log('received contact info');
    this.setState({
      contactInfo: data,
    });
  }

  receiveEducationExperience(data) {
    console.log('recieved education experience');
    this.setState({
      educationExperience: data,
    });
  }

  receivePracticalExperience(data) {
    console.log('recieved practical experience');
    this.setState({
      practicalExperience: data,
    });
  }

  createCv() {
    const { contactInfo, educationExperience, practicalExperience } = this.state;
    console.log(contactInfo);
    console.log(educationExperience);
    console.log(practicalExperience);
  }

  render() {
    return (
      <div>
        <ContactInfo sendContactInfo={this.receiveContactInfo} />
        <EducationExperience sendEducationExperience={this.receiveEducationExperience} />
        <PracticalExperience sendPracticalExperience={this.receivePracticalExperience} />
        <button type="button" onClick={this.createCv}>Create CV</button>
      </div>

    );
  }
}

export default App;
