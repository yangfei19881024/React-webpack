"use strict";
import React from 'react';

class CommentForm extends React.Component{
  render(){
    return(
      <form>
        <div>
          姓名:<input name="username" placeholder="请输入姓名"/>
        </div>
        <div>
          <textarea cols="10" rows="5" placeholder="请输入评论内容"></textarea>
        </div>
        <div>
          <input type="submit" value="提交"/>
        </div>
      </form>
    );
  }
}

export {CommentForm as default};
