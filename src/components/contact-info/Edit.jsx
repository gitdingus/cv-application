import React from 'react';
import styles from './edit.module.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`styles ${styles}`);
    return (
      <fieldset className={styles.contactInfo}>
        <legend>Contact Information</legend>
        <label htmlFor="name">
          <span>Name</span>
          <input id="name" type="text" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input id="email" type="text" />
        </label>
        <div className="phone-numbers">
          <label htmlFor="phone">
            <span>Phone</span>
            <input id="phone" type="text" />
          </label>
          <select id="phone-type">
            <option value="cell">Cell</option>
            <option value="home" selected>Home</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
          <button type="button">Add</button>
        </div>
      </fieldset>
    );
  }
}

export default Edit;
