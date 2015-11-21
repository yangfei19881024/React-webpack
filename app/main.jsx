import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './comment/commentBox.js';

// require("../scss/index.scss");
//
// ReactDOM.render(
//   <CommentBox url="app/comments.json"/>,
//   document.getElementById("box")
// );
import { Router ,Route ,Link } from 'react-router';

class App extends Component{
  render(){
    return(
      <div>
        <div>
          <Link to="/">首页</Link>
          <Link to="/tv">电视</Link>
          <Link to="/show/1">电视列表</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

class TV extends Component{
  render(){
    return(
      <div>
        <div>
            电视节目
        </div>
        {this.props.children}
      </div>
    );
  }
}

class Show extends Component{
  constructor(props){
    super(props);
    console.log(this.props.params);
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

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/tv" component={TV}>
        <Route path="/show/:id" component={Show} />
      </Route>
    </Route>
  </Router>
), document.getElementById('box'));
