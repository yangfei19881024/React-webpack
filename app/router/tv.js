import React from "react";

class TV extends React.Component{
  render(){
    return(
      <div>
        <div>
            电视节目11
        </div>
        {this.props.children}
      </div>
    );
  }
}

export { TV as default };
