import React from "react";

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
        </div>
        {this.props.children}
      </div>
    );
  }
}

export { Show as default };
