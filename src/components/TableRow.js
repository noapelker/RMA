import React from 'react';
import TableCell from "./TableCell";
import Checkbox from '@material-ui/core/Checkbox';
import CostumeButton from "./General/CostumeButton";
import {VAL_IN_JSON, KEY_IN_JSON} from "../Utils"

const TableRow = ({data, checkable, rowClass}) => {

    return (
        <tr className={rowClass}>
            {checkable && <td>
                <Checkbox checked
                          onChange
                          inputProps={{'aria-label': 'primary checkbox'}}
                /></td>}
            {Object.entries(data).map((value, key) => (value[KEY_IN_JSON] === "status") ?
                <td className={'cellTable'} key={key}>
                    <CostumeButton text={value[VAL_IN_JSON]}
                                   parentClass={"status status" + value[VAL_IN_JSON]}
                                   onClickButton={_ => {
                                   }}/></td>
                : <TableCell cellClass={'cellTable'} key={key}
                             data={value[VAL_IN_JSON]}/>)}
        </tr>
    );
};

export default TableRow;