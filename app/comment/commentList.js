"use strict";
import React from 'react';

import Comment from './comment.js';

class CommentList extends React.Component{
  render(){
    let commentNodes = this.props.data.map((comment) =>{
      return (
        <Comment author={comment.author} date={comment.date}></Comment>
      );
    });
    return(
      <div>
        {commentNodes}
      </div>
    );
  }
}

export {CommentList as default};
