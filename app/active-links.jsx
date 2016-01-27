import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
//import { createHistory, useBasename } from 'history'

const ACTIVE = { color: 'red' }

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

          <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
          <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

          <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          <li><Link      to="/users/12" query={{ foo: 'bar' }} activeStyle={ACTIVE}>/users/12?foo=bar</Link></li>

          <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
          <li><Link      to="/aboutdetail/12"      activeStyle={ACTIVE}>/aboutdetail</Link></li>
        </ul>

        <h1>
          {this.props.children}
        </h1>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index!</h2>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}

class AboutDetail extends React.Component {
  render() {
    return (
      <div>
        <h2>AboutDetail</h2>
      </div>
    )
  }
}


render((
  <Router >
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}>
        <Route path="/aboutdetail/:id" component={AboutDetail} />  
      </Route>

      <Route path="/users" component={Users}>
        <IndexRoute component={UsersIndex}/>
      </Route>
      <Route path="/users/:id" component={User}/>
    </Route>
  </Router>
), document.getElementById('example'))
