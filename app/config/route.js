import React from "react";
import {Router,Route,IndexRoute,Redirect} from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from "../router/app";
import TV from "../router/tv";
import Show from "../router/show";
import Home from "../router/home";
import NoMatch from "../router/NoMatch";

import User from "../router/user";

// const routeConfig = [
//   { path: '/',
//     component: App,
//     indexRoute: { component: Home },
//     childRoutes: [
//       { path: '/tv',
//         component: TV ,
//         childRoutes: [
//           { path: 'show/:id', component: Show }
//         ]
//       }
//
//     ]
//   },
//   {
//     path:'/user',
//     component:User,
//   }
// ]

var routeConfig = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/tv" component={TV}>
        <Route path="/show/:id/:name" component={Show}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
)

export { routeConfig as default };
