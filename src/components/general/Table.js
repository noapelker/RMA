import React from 'react';
import TableRow from "./TableRow";
import "../../styles/table.scss"
import {withRouter} from "react-router-dom"

const Table = ({showPref, onDeleteOrder, onEditFunc, cellClass, edit, data, headers, history, endpoint, order, rowClass, checkAble, clickOrder}) => {
    return (
        <table>
            <tbody>
            <tr className={"orderRowHeader"}>{headers.map((item, key) => <th
                key={key}>{item}</th>)}</tr>
            {Array.isArray(data) && data.map((item, key) => <TableRow showPref={showPref} onEditFunc={onEditFunc}
                                                                      onDeleteOrder={onDeleteOrder}
                                                                      cellClass={cellClass}
                                                                      edit={edit} order={order}
                                                                      key={key} index={key}
                                                                      data={item}
                                                                      checkable={checkAble}
                                                                      rowClass={rowClass || 'orderRow'}
                                                                      endPoint={endpoint}
                                                                      clickOrder={data => clickOrder && history.push(endpoint + data)}/>)}
            </tbody>
        </table>
    );
};

export default withRouter(Table);