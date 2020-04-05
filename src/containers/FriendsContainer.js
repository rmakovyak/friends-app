import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pick from 'lodash/pick';

import FriendsComponents from '../components/FriendsComponents';
import { getFriends, updateFriend } from '../actions';
import { DEFAULT_SORT_ORDER, DEFAULT_SORT_COLUMN } from '../const';

const { shape, arrayOf } = PropTypes;

class FriendsContainer extends Component {
  state = {
    search: {
      _page: 1,
      _sort: DEFAULT_SORT_COLUMN,
      _order: DEFAULT_SORT_ORDER,
    },
  };

  componentDidMount() {
    const { getFriends } = this.props;
    const { search } = this.state;

    getFriends(search);
  }

  onSearchChange = searchPatch => {
    const { getFriends } = this.props;
    const { search: prevSearch } = this.state;

    this.setState({ search: { ...prevSearch, ...searchPatch } }, () => {
      const { search } = this.state;
      getFriends(search);
    });
  };

  updateFriend = (id, patch) => {
    const { updateFriend } = this.props;

    updateFriend(id, patch);
  };

  render() {
    const { friends, total, history } = this.props;
    const { search } = this.state;

    const sort = pick(search, '_sort', '_order');

    return (
      <FriendsComponents
        friends={friends}
        total={total}
        sort={sort}
        handleAddFriend={() => history.push('/friends/add')}
        handleFriendChange={this.updateFriend}
        handleSearchChange={this.onSearchChange}
      />
    );
  }
}

FriendsContainer.propTypes = {
  friends: arrayOf(shape({})),
};

FriendsContainer.defaultProps = {
  friends: [],
};

const mapStateToProps = ({ friends, total }) => ({
  friends,
  total,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFriends,
      updateFriend,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
