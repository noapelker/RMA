import React from 'react';
import {Orders} from "../../../Textblocks";
import CostumeButton from "../../general/CostumeButton";

const titles = Orders.orderPageHeaderTitles;
const OrderHeader = ({data, header}) => {
    return (
        <div className={'orderHeader'}>
            <div className={'order orderHeaderLeft'}>
                <span>{titles.name} {data.name}</span>
                <span>{titles.phone} {data.phone}</span>
                <span>{titles.startDate} {header.startDate}</span>
            </div>
            <div className={'order'}>
                {titles.orderNum}{header.orderNum}
            </div>
            <div className={'order orderHeaderRight'}>
                <CostumeButton text={header.status}
                               parentClass={"status status" + header.status}/>
                <span>{titles.endDate} {header.endDate}</span>

            </div>
        </div>
    );
};

export default OrderHeader;