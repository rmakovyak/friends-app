import React, { useState } from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Input from '@material-ui/core/Input';

const { shape, arrayOf } = PropTypes;

const FriendTableRow = ({ id, name, sex, isStared, onChange }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <TableRow key={id}>
      <TableCell className="text-secondary">{id}</TableCell>
      <TableCell className="text-secondary">
        {!isEditable && name}
        {isEditable && (
          <Input
            onChange={e => onChange(id, { name: e.target.value.trim() })}
            value={name}
            placeholder="Name"
            name="name"
          />
        )}
        <button
          type="button"
          className="btn btn-light text-primary ml-2"
          onClick={() => setIsEditable(prev => !prev)}
        >
          <i
            className={classnames('fa', {
              'fa-edit': !isEditable,
              'fa-check': isEditable,
            })}
          />
        </button>
      </TableCell>
      <TableCell>
        <i
          className={classnames(`fa`, 'text-primary', {
            'fa-female': sex === 'female',
            'fa-male': sex === 'male',
          })}
        />
      </TableCell>
      <TableCell>
        <button
          type="button"
          className="btn btn-light text-primary"
          onClick={() => onChange(id, { isStared: !isStared })}
        >
          <i
            className={classnames('fa', {
              'fa-star': isStared,
              'fa-star-o': !isStared,
            })}
          />
        </button>
      </TableCell>
    </TableRow>
  );
};

const FriendsTableBody = ({ friends, onChange }) => (
  <TableBody>
    {friends.map(friend => (
      <FriendTableRow {...friend} onChange={onChange} key={friend.id} />
    ))}
  </TableBody>
);

FriendsTableBody.propTypes = {
  friends: arrayOf(shape({})),
};

FriendsTableBody.defaultProps = {
  friends: [],
};

export default FriendsTableBody;
