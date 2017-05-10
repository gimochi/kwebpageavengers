import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(routes, document.getElementById("main"));