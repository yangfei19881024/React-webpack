'use strict';
import React from 'react';

import CommentList from "./commentList.js";
import CommentForm from "./commentForm.js";

class CommentBox extends React.Component{
  render(){
    return (
      <div>
        <h1>yangfei</h1>
        <div className="title">Hello first Component!!</div>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export {CommentBox as default};
