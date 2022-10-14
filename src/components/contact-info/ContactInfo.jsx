import React from 'react';
import PropTypes from 'prop-types';
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
    const { sendContactInfo } = this.props;

    this.setState({
      name: recievedState.name,
      email: recievedState.email,
      phoneList: recievedState.phoneList,
      mode: 'display',
    }, () => {
      const { name, email, phoneList } = recievedState;
      sendContactInfo({
        name, email, phoneList,
      });
    });
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

ContactInfo.propTypes = {
  sendContactInfo: PropTypes.func,
};

ContactInfo.defaultProps = {
  sendContactInfo: () => {},
};

export default ContactInfo;
