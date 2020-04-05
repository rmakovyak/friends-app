import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions';
import AddFriend from '../components/AddFriend';

function AddFriendContainer({ addFriend, history }) {
  return (
    <AddFriend
      onSubmit={friend => {
        addFriend(friend).then(() => history.push('/'));
      }}
    />
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addFriend,
    },
    dispatch,
  );

export default connect(() => {}, mapDispatchToProps)(AddFriendContainer);
