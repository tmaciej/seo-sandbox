import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UniversalRouter from 'universal-router';
import history from './core/history';
import './index.css';

const container = document.getElementById('root');

let currentLocation = history.location;
let routes = require('./routes').default;

async function onLocationChange(location) {
  currentLocation = location;

  try {
    const route = await UniversalRouter.resolve(routes, {
      path: location.pathname
    });

    if (currentLocation.key !== location.key) {
      return;
    }

    if (route.redirect) {
      history.replace(route.redirect);
      return;
    }

    ReactDOM.render(
      <App>{route.component}</App>,
      container
    );
  } catch (error) {
    console.error(error);

    if (currentLocation.key !== location.key) {
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      ReactDOM.render(
        <span>{error.message}</span>,
        container
      );
      return;
    }

    window.location.reload();
  }
}

history.listen(onLocationChange);
onLocationChange(currentLocation);

if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require('./routes').default;

    onLocationChange(currentLocation);
  });
}
