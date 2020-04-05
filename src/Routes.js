import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Friends from './containers/FriendsContainer';
import AddFriend from './containers/AddFriendContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: Friends,
  },
  {
    path: '/friends/add',
    exact: true,
    component: AddFriend,
  },
];

function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
}

export default Routes;
