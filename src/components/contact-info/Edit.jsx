import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import plusImage from '../plus.svg';
import trashImage from '../trash-can-outline.svg';
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
        <span className={styles.type}>{number.type}</span>
        <span className={styles.number}>{number.number}</span>
        <button className={styles.button} type="button" onClick={() => this.removeNumber(number.uuid)}><img src={trashImage} alt="Remove Number" /></button>
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
      <div>
        <div className={styles.editContactInfo}>
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
          <button type="button" onClick={this.addPhone}><img src={plusImage} alt="Add Number" /></button>
          <div className={styles.phoneNumbersList}>
            <ul>
              { this.getPhoneListElements() }
            </ul>
          </div>
        </div>
        <button type="button" onClick={this.submit}>Done</button>
      </div>
    );
  }
}

Edit.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      number: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  updateContactInfo: PropTypes.func,
};

Edit.defaultProps = {
  name: '',
  email: '',
  phoneList: [],
  updateContactInfo: () => {},
};

export default Edit;
