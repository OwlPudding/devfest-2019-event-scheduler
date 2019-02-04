import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
ReactDOM.render(<App />, document.getElementById('root'));


if(module.hot) {
  module.hot.accept("./components/App", () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  })
}


/*

ReactDOM.render(...);

if (module.hot) {
  module.hot.accept('./App', () => {
    // --- Copy-paste your usual ReactDOM.render(...) call here: --- //
    ReactDOM.render(...);
  });
}

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();