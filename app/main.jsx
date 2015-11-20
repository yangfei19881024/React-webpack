import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './comment/commentBox.js';

require("../scss/index.scss");

ReactDOM.render(
  <CommentBox url="app/comments.json"/>,
  document.getElementById("box")
);
