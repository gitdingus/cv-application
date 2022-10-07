import React from 'react';
import Edit from './Edit.jsx';
import Display from './Display.jsx';
import styles from './contact-info.module.css';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'edit',
      name: '',
      email: '',
      phoneList: [],
    };

    this.enterEditMode = this.enterEditMode.bind(this);
    this.updateContactInfo = this.updateContactInfo.bind(this);
  }

  updateContactInfo(recievedState) {
    this.setState({ name: recievedState.name });
    this.setState({ email: recievedState.email });
    this.setState({ phoneList: recievedState.phoneList });
    this.setState({ mode: 'display' });
  }

  enterEditMode() {
    this.setState({ mode: 'edit' });
  }

  render() {
    const {
      name,
      email,
      phoneList,
      mode,
    } = this.state;

    if (mode === 'display') {
      return (
        <div className="cv-section">
          <h1 className="cv-section-header">Contact Information</h1>
          <Display name={name} email={email} phoneList={phoneList} edit={this.enterEditMode} />
        </div>
      );
    }

    return (
      <div className={`cv-section ${styles.contactInfo}`}>
        <h1 className="cv-section-header">Contact Information</h1>
        <Edit
          name={name}
          email={email}
          phoneList={phoneList}
          updateContactInfo={this.updateContactInfo}
        />
      </div>
    );
  }
}
export default ContactInfo;
