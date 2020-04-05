import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { DEFAULT_SORT_ORDER, TABLE_COLUMNS } from '../const';

function getToggledOrder(columnId, activeColumnId, order) {
  if (columnId === activeColumnId) {
    return order === 'asc' ? 'desc' : 'asc';
  }

  return DEFAULT_SORT_ORDER;
}

function TableHeader({ sort, onChange }) {
  const { _order: activeOrder, _sort: activeColumnId } = sort;

  return (
    <TableHead>
      <TableRow>
        {TABLE_COLUMNS.map(({ id, disableSort, disabledHeader }) => {
          if (disabledHeader) {
            return <TableCell key={id} />;
          }

          if (disableSort) {
            return (
              <TableCell key={id} className="text-uppercase">
                {id}
              </TableCell>
            );
          }

          return (
            <TableCell className="text-uppercase" key={id}>
              <TableSortLabel
                active={activeColumnId === id}
                direction={activeOrder}
                onClick={() =>
                  onChange({
                    _sort: id,
                    _order: getToggledOrder(
                      'name',
                      activeColumnId,
                      activeOrder,
                    ),
                  })
                }
              >
                {id}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  sort: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
};

export default TableHeader;
