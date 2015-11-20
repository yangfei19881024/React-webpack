'use strict';
import React from 'react';

import CommentList from "./commentList.js";
import CommentForm from "./commentForm.js";
import $ from 'jquery';

class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[]};

    $.ajax({
      url:this.props.url,
      dataType:"json",
      success:(comments) =>{
        this.setState({data:comments});
      },
      error:(xhr,status,err)=>{
        console.log(err);
      }
    });
  }
  render(){
    return (
      <div>
        <h1>yangfei</h1>
        <div className="title">Hello first Component!!</div>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
}

export {CommentBox as default};
