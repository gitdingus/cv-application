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
      mode: 'edit',
    };

    this.receiveContactInfo = this.receiveContactInfo.bind(this);
    this.receiveEducationExperience = this.receiveEducationExperience.bind(this);
    this.receivePracticalExperience = this.receivePracticalExperience.bind(this);
    this.createCv = this.createCv.bind(this);
  }

  receiveContactInfo(data) {
    this.setState({
      contactInfo: data,
    });
  }

  receiveEducationExperience(data) {
    this.setState({
      educationExperience: data,
    });
  }

  receivePracticalExperience(data) {
    this.setState({
      practicalExperience: data,
    });
  }

  createCv() {
    const { contactInfo, educationExperience, practicalExperience } = this.state;
    if (
      contactInfo === null
      || educationExperience === null
      || practicalExperience === null
    ) {
      return;
    }

    this.setState({
      mode: 'display',
    });
  }

  render() {
    const {
      contactInfo, educationExperience, practicalExperience, mode,
    } = this.state;

    if (mode === 'edit') {
      return (
        <div>
          <ContactInfo sendContactInfo={this.receiveContactInfo} />
          <EducationExperience sendEducationExperience={this.receiveEducationExperience} />
          <PracticalExperience sendPracticalExperience={this.receivePracticalExperience} />
          <button type="button" onClick={this.createCv}>Create CV</button>
        </div>
      );
    }

    return (
      <div>
        <div className="contact-info">
          <p>{contactInfo.name}</p>
          <p>{contactInfo.email}</p>
          {
            contactInfo.phoneList.map((phone) => (
              <p key={phone.uuid}>
                <span>{phone.type}</span>
                <span>{phone.number}</span>
              </p>
            ))
          }
        </div>
        <div className="education-experience">
          <h1>Education</h1>
          {
            educationExperience.map((exp) => {
              const {
                uuid,
                university,
                areaOfStudy,
                degreeEarned,
                dateAcquired,
              } = exp;
              return (
                <div key={uuid}>
                  <h2>{university}</h2>
                  <p>{`${dateAcquired} - ${degreeEarned} in ${areaOfStudy}`}</p>
                </div>
              );
            })
          }
        </div>
        <div className="practical-experience">
          <h1>Practical Experience</h1>
          {
            practicalExperience.map((exp) => {
              const {
                beginDate, endDate, companyName, jobTitle, responsibilities,
              } = exp;
              return (
                <div key={exp.uuid}>
                  <h2>{companyName}</h2>
                  <p>
                    <span className="dates">{`${beginDate} - ${endDate}`}</span>
                    <span className="job-title">{jobTitle}</span>
                  </p>
                  <h3>Primary Duties</h3>
                  <ul className="responsibilities">
                    {
                      responsibilities.map((resp) => {
                        const { uuid, responsibility } = resp;
                        return (
                          <li key={uuid}>
                            {responsibility}
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
