var classNames = require('classnames');
import React from 'react'
import styles from "../styles/main.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    classNames({ 'primary-button': this.props.type === 'primary',
                 'success-button': this.props.type === 'success',
               });
  }
  render(){
    return(
      <button className={styles.button}>按钮</button>
    )
  }
}

export default Button;
