import React from 'react';
import styles from './display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
  }

  edit() {
    const { edit } = this.props;
    edit();
  }

  render() {
    const { name, email, phoneList } = this.props;
    return (
      <div>
        <p>
          Name:
          {name}
        </p>
        <p>
          Email:
          {email}
        </p>
        <p>Phone:</p>
        <ul>
          {
            phoneList.map((number) => (
              <li key={number.uuid}>
                <span>{number.number}</span>
                <span>{number.type}</span>
              </li>
            ))
          }
        </ul>
        <button type="button" onClick={this.edit}>Edit</button>
      </div>
    );
  }
}

export default Display;
