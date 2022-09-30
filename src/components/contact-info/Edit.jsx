import React from 'react';
import styles from './edit.module.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      phoneType: 'cell',
      phoneList: [],
    };

    this.nameChanged = this.nameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.phoneInputChanged = this.phoneInputChanged.bind(this);
    this.phoneTypeChanged = this.phoneTypeChanged.bind(this);
    this.addPhone = this.addPhone.bind(this);
  }

  nameChanged(e) {
    console.log('name changed');
    this.setState({
      name: e.target.value,
    });
  }

  emailChanged(e) {
    console.log('email changed');
    this.setState({
      email: e.target.value,
    });
  }

  phoneInputChanged(e) {
    console.log('phone input changed');
    this.setState({
      phone: e.target.value,
    });
  }

  phoneTypeChanged(e) {
    console.log('phone type changed');
    this.setState({
      phoneType: e.target.value,
    });
  }

  addPhone() {
    console.log('add phone');
  }

  render() {
    const {
      name, email, phone, phoneType,
    } = this.state;
    return (
      <fieldset className={styles.contactInfo}>
        <legend>Contact Information</legend>
        <label htmlFor="name">
          <span>Name</span>
          <input id="name" type="text" onChange={this.nameChanged} value={name} />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input id="email" type="text" onChange={this.emailChanged} value={email} />
        </label>
        <div className="phone-numbers">
          <label htmlFor="phone">
            <span>Phone</span>
            <input id="phone" type="text" onChange={this.phoneInputChanged} value={phone} />
          </label>
          <select id="phone-type" onChange={this.phoneTypeChanged} value={phoneType}>
            <option value="cell">Cell</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
          <button type="button" onClick={this.addPhone}>Add</button>
        </div>
      </fieldset>
    );
  }
}

export default Edit;
