import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { I18nextProvider } from 'react-i18next';
import { createStores } from './stores/index';
import { Root } from './containers/Root';
import { App } from './containers/App';

import i18n from './i18n';

const Container = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Root>
));

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <I18nextProvider i18n={ i18n }>
      <Container history={history} />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
