import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './comment/commentBox.js';
import { Router ,Route ,Link ,IndexRoute ,Redirect } from 'react-router';
import routeConfig from "./config/route";

ReactDOM.render((
  <Router routes={routeConfig} />
), document.getElementById('box'));
