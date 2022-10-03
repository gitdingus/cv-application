import React from 'react';
import Edit from './Edit.jsx';
import styles from './contact-info.css';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'edit',
      name: '',
      email: '',
      phoneList: [],
    };

    this.updateContactInfo = this.updateContactInfo.bind(this);
  }

  updateContactInfo(recievedState) {
    this.setState({ name: recievedState.name });
    this.setState({ email: recievedState.email });
    this.setState({ phoneList: recievedState.phoneList });
    this.setState({ mode: 'display' });
  }

  }

  render() {
    const {
      name,
      email,
      phoneList,
      mode,
    } = this.state;


    return (
      <Edit
        name={name}
        email={email}
        phoneList={phoneList}
        updateContactInfo={this.updateContactInfo}
      />
    );
  }
}
export default ContactInfo;
