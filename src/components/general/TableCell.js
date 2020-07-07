import React, {Fragment, useState} from 'react';
import CostumeButton from "./CostumeButton";
import IdPopup from "../IdPopup";

const findClass = (val) => {
    if (val === "YES")
        return "greenWarranty";
    if (val === "NO")
        return "redWarranty";
    return "";
}
const TableCell = ({data, cellClass}) => {
    const isObject = typeof data === 'object' && !(data instanceof Date)
    ;
    const [showPref, setShowPref] = useState(false)

    return (
        <td className={cellClass}>
            {isObject ?
                <Fragment>
                    <CostumeButton
                        onMouseEnter={_ => setShowPref(true)}
                        onMouseLeave={_ => setShowPref(false)}
                        parentClass={"imgIcon" + (!Array.isArray(data) ? " imgIconPref" : "")}
                        onClickButton={_ => {
                            if (Array.isArray(data)) {
                                console.log("show comments")
                            }
                        }}
                        imgSrc={'../../photos/' + (Array.isArray(data) ? "comments" : "pref") + ".png"}/>
                    {!Array.isArray(data) && <IdPopup data={data} opacity={showPref ? 1 : 0}/>}
                </Fragment> :
                <span
                    className={findClass(data)}>{(data instanceof Date) ? data.toLocaleDateString() : data}</span>}


        </td>
    );
};

export default TableCell;