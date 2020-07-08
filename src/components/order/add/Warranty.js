import React from 'react';
import {titles} from "../../../Textblocks";

const Warranty = ({setData, data}) => {
    return (
        <div className={'warrantyContainer'}>
            <span className={'warrantyTitle'}>{titles.warranty}</span>
            <div className={data === "YES" ? "yesWarrantyText" : "noWarrantyText"}
                 onClick={_ => setData(data === "NO" ? "YES" : "NO")}>
                {data}
            </div>
        </div>
    );
};

export default Warranty;