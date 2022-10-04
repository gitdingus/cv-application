import React from 'react';
import PropTypes from 'prop-types';
import styles from './display.module.css';

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
      <div className={styles.displayPane}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <p>Name:</p>
            <p className={styles.name}>{name}</p>
          </div>
          <div className={styles.infoItem}>
            <p>Email:</p>
            <p className={styles.email}>{email}</p>
          </div>
          <div>
            {
              phoneList.map((number) => (
                <div className={styles.infoItem} key={number.uuid}>
                  <p>
                    {`${number.type} `}
                    Phone:
                  </p>
                  <p>{number.number}</p>
                </div>
              ))
            }
          </div>
        </div>
        <button type="button" onClick={this.edit}>Edit</button>
      </div>
    );
  }
}

Display.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      number: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  edit: PropTypes.func,
};

Display.defaultProps = {
  name: '',
  email: '',
  phoneList: [],
  edit: () => {},
};

export default Display;
