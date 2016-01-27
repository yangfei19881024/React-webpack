import React from 'react'
import styles from "../styles/main.css"

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className={styles.buttongroup}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
