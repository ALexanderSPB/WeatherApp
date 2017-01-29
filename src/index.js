import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Main from './containers/Main';
import History from './containers/History';
import Statistics from './containers/Statistics';
import ForecastContainer from './containers/ForecastContainer';
import DetailContainer from './containers/DetailContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={App} />
        <Route path='forecast/:city' component={ForecastContainer} />
        <Route path='detail/:city' component={DetailContainer} />
        <Route path='History' component={History} />
        <Route path='Statistics' component={Statistics} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
