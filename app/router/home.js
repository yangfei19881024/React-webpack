import React from "react";
import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">首页</Link>
        <Link to="/tv">电视</Link>
        <Link to="/show/1" query={{name:'tom',age:12}} >电视列表</Link>
      </div>
    );
  }
}

export {Home as default};
