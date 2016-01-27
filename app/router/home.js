import React from "react";
import {Link,IndexLink} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = 2;
    const name = "yagnfei";
    const Active = {color:'red'}
    return (
      <div>
        <IndexLink to="/" activeStyle={Active}>首页1</IndexLink>
        <Link to="/tv">电视</Link>
        <Link to={`/show/${id}/${name}`} query={{name:'tom',age:12}} >电视列表</Link>
      </div>
    );
  }
}

export {Home as default};
