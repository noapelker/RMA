import React, {useEffect, useState, Fragment} from 'react';
import {getData} from "../Utils";
import Table from "./Table";
import {Orders} from "../Textblocks";
import "../styles/order.css"
import OrderHeader from "./OrderHeader";
import CostumeButton from "./General/CostumeButton";

const Order = ({history}) => {
    const [data, setData] = useState(undefined);
    const [header, setHeader] = useState({});

    useEffect(() => {
        let url = history.location.pathname;
        const endPoint = url.substring(url.indexOf('/') + 1)
        getData(endPoint).then(data => {
            setData(data)
            setHeader({
                orderNum: data.orderNum,
                startDate: new Date(data.creationDate).toLocaleDateString(),
                status: data.status,
                endDate: data.endDate ? new Date(data.creationDate).toLocaleDateString() : "In Progress"
            });

        })
    }, [history])

    return (
        <div className={'orderPage'}>
            {header && data &&
            <Fragment>
                <OrderHeader data={data.products} header={header}/>}
                <div className={'orderPageTable'}>
                    <div className={'subHeaderRow'}>
                        <div className={'quantity'}>
                            <span style={{
                                marginBottom: 10,
                                fontWeight: "bolder"
                            }}>{Orders.quantity}</span>
                            <span>{data.quantity}</span>
                        </div>
                        <CostumeButton parentClass={'status statusReturn'}
                                       text={Orders.returnTitle}
                                       onClickButton={_ => {
                                           console.log(data)
                                       }}/>
                    </div>
                    <Table data={data.products} checkAble={true} rowClass={'orderRowOrder'}
                           headers={Orders.orderHeaders} edit
                           endpoint={"/order"}
                           order={Orders.orderTableSort}/>
                </div>
            </Fragment>}
        </div>

    );

};

export default Order;