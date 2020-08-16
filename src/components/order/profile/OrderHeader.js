import React from 'react';
import {Orders} from "../../../Textblocks";
import CostumeButton from "../../general/CostumeButton";

const titles = Orders.orderPageHeaderTitles;
const OrderHeader = ({data}) => {
    return (
        <div className={'orderHeader'}>
            {console.log(data)}
            {data && <div className={'order orderHeaderLeft'}>
                <span>{titles.name} {data.name}</span>
                <span>{titles.phone} {data.phone}</span>
                <span>{titles.startDate} {new Date(data.creationDate).toLocaleDateString()}</span>
            </div>}
            <div className={'order'}>
                {titles.orderNum}{data.orderNum}
            </div>
            <div className={'order orderHeaderRight'}>
                <CostumeButton text={data.status}
                               parentClass={"status status" + data.status}/>
                <span>{titles.endDate} {data.endDate||"In Process"}</span>

            </div>
        </div>
    );
};

export default OrderHeader;