import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routes from './Routes';
import friendsReducer from './reducers/friendsReducer';

const middlewares = [thunk];
const initialState = {
  friends: [],
};

const store = createStore(
  friendsReducer,
  initialState,
  applyMiddleware(...middlewares),
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
  );
}

export default App;
