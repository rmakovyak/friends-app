import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Search from './Search';

import { PAGE_LIMIT } from '../const';

const { shape, arrayOf } = PropTypes;

const FriendsComponent = ({
  friends,
  total,
  sort,
  handleAddFriend,
  handleFriendChange,
  handleSearchChange,
}) => {
  const pageCount = Math.ceil(total / PAGE_LIMIT);

  return (
    <Fragment>
      <p className="font-weight-bold ml-4 mt-4 h3 text-uppercase">Friends</p>
      <Button variant="contained" onClick={handleAddFriend} className="m-4">
        Add a friend
      </Button>
      <Search onChange={handleSearchChange} />
      <Paper className="m-4 mt-0">
        <Table className="p-2">
          <TableHeader sort={sort} onChange={handleSearchChange} />
          <TableBody friends={friends} onChange={handleFriendChange} />
        </Table>
      </Paper>
      <Pagination
        count={pageCount}
        onChange={(e, v) => handleSearchChange({ _page: v })}
      />
    </Fragment>
  );
};

FriendsComponent.propTypes = {
  friends: arrayOf(shape({})),
  total: PropTypes.number,
  page: PropTypes.number,
  handleAddFriend: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

FriendsComponent.defaultProps = {
  friends: [],
  total: 0,
  page: 1,
};

export default FriendsComponent;
