"use strict";
import React from 'react';

class CommentForm extends React.Component{
  handleSubmit(event){
    event.preventDefault();
    let author = this.refs.name.value,
        content = this.refs.text.value;

    console.log(author);
    console.log(content);

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          姓名:<input name="username" ref="name" placeholder="请输入姓名"/>
        </div>
        <div>
          <textarea cols="10" rows="5" ref="text" placeholder="请输入评论内容"></textarea>
        </div>
        <div>
          <input type="submit" value="提交"/>
        </div>
      </form>
    );
  }
}

export {CommentForm as default};
