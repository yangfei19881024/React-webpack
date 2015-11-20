"use strict";
import React from 'react';
class Comment extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.author}</h2>
        <h3>{this.props.date}</h3>
      </div>
    );
  }
}

export {Comment as default};
