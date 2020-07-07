import React, {useState} from 'react';
import TableCell from "./TableCell";
import Checkbox from '@material-ui/core/Checkbox';
import CostumeButton from "./CostumeButton";
import {withRouter} from "react-router-dom"


const TableRow = ({onEditFunc, edit, data, checkable, rowClass, clickOrder, order, index}) => {
    data.creationDate = new Date(data.creationDate);
    const [check, setCheck] = useState(false);

    return (
        <tr className={rowClass} onClick={_ => clickOrder(data.orderNum)}>
            {checkable && <td>
                <Checkbox checked={check}
                          onChange={_ => setCheck(!check)}
                          color="#fffff"
                          inputProps={{'aria-label': 'checkbox with default color'}}/>
            </td>}
            <td className={'cellTable'}>{index + 1}</td>
            {order.map((item, key) => ((item === "status") ?
                <td className={'cellTable'} key={key}>
                    <CostumeButton text={data[item]}
                                   parentClass={"status status" + data[item]}
                                   onClickButton={_ => {
                                   }}/></td>
                : ((item === "pref" && data.warranty) ? (Object.values(data[item]).map((value, key) =>
                    <TableCell
                        cellClass={'cellTable'} key={key} data={value}/>)) : (
                    <TableCell cellClass={'cellTable'} key={key} data={data[item]}/>))))
            }
            {edit &&
            <td style={{width: "10%"}}>
                <div style={{display: "flex"}}>
                    <CostumeButton imgSrc={'../../photos/edit.png'} parentClass={'imgIconHalf'}
                                   onClickButton={_ => onEditFunc(data)}/>
                    <CostumeButton imgSrc={'../../photos/exit.png'} parentClass={'imgIconHalf'}
                                   onClickButton={_ => {
                                   }}/>
                </div>
            </td>}
        </tr>
    );
};

export default withRouter(TableRow);