import React from 'react';
import { v4 as uuid } from 'uuid';
import styles from './edit.module.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    const { name, email, phoneList } = this.props;
    this.state = {
      name,
      email,
      phone: '',
      phoneType: 'cell',
      /* holds array of objects of the form:
        {
          uuid: uuid,
          number: Number,
          type: (cell|home|work|other),
        }
      */
      phoneList,
    };

    this.nameChanged = this.nameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.phoneInputChanged = this.phoneInputChanged.bind(this);
    this.phoneTypeChanged = this.phoneTypeChanged.bind(this);
    this.addPhone = this.addPhone.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
    this.submit = this.submit.bind(this);
  }

  getPhoneListElements() {
    const { phoneList } = this.state;
    return phoneList.map((number) => (
      <li key={number.uuid}>
        <span>{number.number}</span>
        <span>{number.type}</span>
        <button type="button" onClick={() => this.removeNumber(number.uuid)}>Remove</button>
      </li>
    ));
  }

  nameChanged(e) {
    this.setState({
      name: e.target.value,
    });
  }

  emailChanged(e) {
    this.setState({
      email: e.target.value,
    });
  }

  phoneInputChanged(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  phoneTypeChanged(e) {
    this.setState({
      phoneType: e.target.value,
    });
  }

  addPhone() {
    const { phone, phoneType } = this.state;
    const newPhone = {
      uuid: uuid(),
      number: phone,
      type: phoneType,
    };

    this.setState((prevState) => (
      { phoneList: prevState.phoneList.concat(newPhone) }
    ));
  }

  removeNumber(numberUuid) {
    this.setState((prevState) => (
      {
        phoneList: prevState.phoneList.filter((number) => number.uuid !== numberUuid),
      }
    ));
  }

  submit() {
    const { updateContactInfo } = this.props;
    updateContactInfo(this.state);
  }

  render() {
    const {
      name, email, phone, phoneType,
    } = this.state;

    return (
      <fieldset>
        <legend>Contact Information</legend>
        <div className={styles.contactInfo}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={this.nameChanged} value={name} />
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" onChange={this.emailChanged} value={email} />
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="text" onChange={this.phoneInputChanged} value={phone} />
          <select id="phone-type" onChange={this.phoneTypeChanged} value={phoneType}>
            <option value="cell">Cell</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
          <button type="button" onClick={this.addPhone}>Add</button>
          <div className={styles.phoneNumbersList}>
            <ul>
              { this.getPhoneListElements() }
            </ul>
          </div>
        </div>
        <button type="button" onClick={this.submit}>Done</button>
      </fieldset>
    );
  }
}

export default Edit;
