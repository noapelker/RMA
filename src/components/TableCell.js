import React from 'react';

const TableCell = ({data, cellClass}) => {
    return (
        <td className={cellClass}>
            <span>{data}</span>
        </td>
    );
};

export default TableCell;