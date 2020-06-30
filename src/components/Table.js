import React from 'react';
import TableRow from "./TableRow";
import "../styles/table.css"
import {Orders} from "../Textblocks";

const Table = ({data, headers}) => {
    return (
        <div className={'orderContainer'}>
            <h1 className={'orderTitle'}>{Orders.title}</h1>
        <table>
            <tbody>
            <tr className={"orderRowHeader"}>{headers.map((item, key) => <th key={key}>{item}</th>)}</tr>
            {data.map((item, key) => <TableRow key={key} data={item} rowClass={'orderRow'}/>)}
            </tbody>
        </table>
        </div>
    );
};

export default Table;