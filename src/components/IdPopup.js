import React from 'react';
import "../styles/order.css"
import {Orders} from "../Textblocks";

const IdPopup = ({data, opacity}) => {
    return (
        <div className={'prefContainer'}
             style={{opacity: opacity, fontWeight: "bolder", zIndex: (opacity === 1 ? 2 : -1)}}>
            <span>{Orders.idPopupTitles.ps} <span
                style={{fontWeight: "normal"}}>{data.ps}</span></span>
            <span>{Orders.idPopupTitles.touch} <span
                style={{fontWeight: "normal"}}>{data.touch}</span></span>
            <span>{Orders.idPopupTitles.version}<span
                style={{fontWeight: "normal"}}> {data.version}</span></span>
        </div>
    );
};

export default IdPopup;