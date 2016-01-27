import React from 'react'
import { render } from 'react-dom'
import {Button,ButtonGroup} from "./component/Boqii.js";

//import { createHistory, useBasename } from 'history'
class HelloWorld extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div onClick={this.props.onClick()}>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.sex}</h1>
        <ButtonGroup>
            <Button type="primary"/>
            <Button type="success"/>
        </ButtonGroup>

      </div>
    )
  }
}

render(
  <HelloWorld
    name="yangfei"
    age="12"
    sex="female"
    onClick={() => console.log("hello world") }
  >
  </HelloWorld>,
  document.getElementById("example")
)
