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
      containsNumber: true, // set true to hide error until trying to submit
      invalidName: false,
      invalidEmail: false,
      invalidPhone: false,
    };

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneNumberInput = React.createRef();

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
    if (e.target.checkValidity() === true) {
      this.setState({
        invalidName: false,
      });
    }

    this.setState({
      name: e.target.value,
    });
  }

  emailChanged(e) {
    if (e.target.checkValidity() === true) {
      this.setState({
        invalidEmail: false,
      });
    }

    this.setState({
      email: e.target.value,
    });
  }

  phoneInputChanged(e) {
    if (e.target.checkValidity() === true) {
      this.setState({
        invalidPhone: false,
      });
    }

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

    if (this.phoneNumberInput.current.checkValidity() !== true) {
      this.setState({
        invalidPhone: true,
      });

      return;
    }

    const newPhone = {
      uuid: uuid(),
      number: phone,
      type: phoneType,
    };

    this.setState((prevState) => (
      {
        phone: '',
        phoneType: 'cell',
        phoneList: prevState.phoneList.concat(newPhone),
        containsNumber: true,
        invalidPhone: false,
      }
    ));

    this.phoneNumberInput.current.focus();
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
    const { phoneList } = this.state;
    if (this.nameInput.current.checkValidity() !== true) {
      this.setState({
        invalidName: true,
      });
      return;
    }

    if (this.emailInput.current.checkValidity() !== true) {
      this.setState({
        invalidEmail: true,
      });
      return;
    }

    if (phoneList.length <= 0) {
      this.setState({
        containsNumber: false,
      });
      return;
    }

    updateContactInfo(this.state);
  }

  render() {
    const {
      name,
      email,
      phone,
      phoneType,
      containsNumber,
      invalidName,
      invalidEmail,
      invalidPhone,
    } = this.state;

    return (
      <div>
        <form className={styles.editContactInfo}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            ref={this.nameInput}
            onChange={this.nameChanged}
            onBlur={this.inputBlur}
            value={name}
            required
          />
          <div
            className={
              `
                ${styles.name}
                ${styles.error}
                ${(invalidName === true) ? styles.active : ''}
              `
            }
          >
            Name is a required field
          </div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            ref={this.emailInput}
            onChange={this.emailChanged}
            onBlur={this.inputBlur}
            value={email}
            required
          />
          <div
            className={
              `
                ${styles.email} 
                ${styles.error}
                ${(invalidEmail === true) ? styles.active : ''}
              `
            }
          >
            A valid email address is required
          </div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="tel"
            ref={this.phoneNumberInput}
            onChange={this.phoneInputChanged}
            onBlur={this.inputBlur}
            value={phone}
            pattern="^[(]*\d{3}[)]*\d{3}-*\d{4}$"
            required
          />
          <select id="phone-type" onChange={this.phoneTypeChanged} value={phoneType}>
            <option value="cell">Cell</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
          <button type="button" onClick={this.addPhone}><img src={plusImage} alt="Add Number" /></button>
          <div
            className={
              `
                ${styles.phoneInput}
                ${styles.error}
                ${(invalidPhone === true) ? styles.active : ''}
              `
            }
          >
            Must provide valid 10-digit phone number. (xxx)xxx-xxxx
            <br />
            *Parenthesis and hyphens not required
          </div>
          <div className={styles.phoneNumbersList}>
            <ul>
              { this.getPhoneListElements() }
            </ul>
          </div>
          <div
            className={
              `
                ${styles.phoneNumbers} 
                ${styles.error}
                ${(containsNumber === false) ? styles.active : ''}
              `
            }
          >
            Must provide at least one phone number
          </div>

        </form>
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
