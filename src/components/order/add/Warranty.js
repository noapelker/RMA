import React from 'react';
import {titles} from "../../../Textblocks";

const Warranty = ({setData, data}) => {
    return (
        <div className={'warrantyContainer'}>
            <span className={'warrantyTitle'}>{titles.warranty}</span>
            <div className={data.warranty === 1 ? "yesWarrantyText" : "noWarrantyText"}
                 onClick={_ => setData({...data, warranty: data.warranty === 1 ? 0 : 1})}>
                {titles.warrantyText[data.warranty]}
            </div>
        </div>
    );
};

export default Warranty;