import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Main from './components/Main/Main';
import History from './components/History/History';
import Statistics from './components/Statistics/Statistics';
import ForecastContainer from './components/Forecast/ForecastContainer';
import DetailContainer from './components/DayContainer/DetailContainer';
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
