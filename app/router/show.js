import React from "react";
import {Router,Route,Link} from "react-router";

class Show extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);

    let {location ,params} = this.props;

    console.log(location.query);
    console.log(params);
  }
  render(){
    return(
      <div>
        <div>
            电视节目列表--{this.props.params.id}
            <Link to="/user">用户列表</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export { Show as default };
