import React from "react";
import { Router ,Route ,Link ,IndexRoute ,Redirect } from 'react-router';

class App extends React.Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export { App as default };
