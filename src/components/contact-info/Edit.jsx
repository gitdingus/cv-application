import React from 'react';
import { v4 as uuid } from 'uuid';
import styles from './edit.module.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      phoneType: 'cell',
      /* holds array of objects of the form:
        {
          uuid: uuid,
          number: Number,
          type: (cell|home|work|other),
        }
      */
      phoneList: [],
    };

    this.nameChanged = this.nameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.phoneInputChanged = this.phoneInputChanged.bind(this);
    this.phoneTypeChanged = this.phoneTypeChanged.bind(this);
    this.addPhone = this.addPhone.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
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
    const { phone, phoneType } = this.state;
    const newPhone = {
      uuid: uuid(),
      number: phone,
      type: phoneType,
    };

    this.setState((prevState) => (
      { phoneList: prevState.phoneList.concat(newPhone) }
    ), () => {
      const { phoneList } = this.state;
      console.log('phone list');
      console.log(phoneList);
    });
  }

  removeNumber(numberUuid) {
    console.log('remove number');
    this.setState((prevState) => (
      {
        phoneList: prevState.phoneList.filter((number) => number.uuid !== numberUuid),
      }
    ));
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
          <div className="added-numbers">
            <ul className="numbers-list">
              { this.getPhoneListElements() }
            </ul>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Edit;
