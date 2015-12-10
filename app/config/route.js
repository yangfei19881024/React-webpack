import App from "../router/app";
import TV from "../router/tv";
import Show from "../router/show";
import Home from "../router/home";

const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/tv', component: TV },
      { path: '/show/:id', component: Show }
    ]
  }
]

export { routeConfig as default };
