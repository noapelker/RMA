import React, {useEffect, useState, Fragment} from 'react';
import {getData} from "../../../Utils";
import Table from "../../general/Table";
import {Orders, popUp} from "../../../Textblocks";
import "../../../styles/order.scss"
import OrderHeader from "./OrderHeader";
import CostumeButton from "../../general/CostumeButton";
import CostumePopUp from "../../general/CostumePopUp";
import {withRouter} from "react-router-dom"
import EditOrder from "./EditOrder";

const Order = ({history}) => {
    const [data, setData] = useState(undefined);
    const [header, setHeader] = useState({});
    const [clickDelete, setClickDelete] = useState(false);
    const [editOrder, setEditOrder] = useState({
        edit: false,
        data: undefined
    });
    const deleteOrder = () => {
        getData("orders/" + data._id, "DELETE", undefined).then(_ => history.push("/"))
    }
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

    const onEditOrder = (val) => {
        setEditOrder({edit: true, data: val})
    }
    const saveChanges = (val) => {
        let index = data.products.findIndex(item => item === editOrder.data)
        if (index !== -1) {
            let temp=data.products;
            temp[index]=val;
            setData({...data,products:temp})
            //.NEED TO DO FETCH
        }
        console.log(data.products)
        console.log("data", editOrder.data)
        console.log("after", val)


    }
    return (
        <div className={'orderPage'}>
            {header && data &&
            <Fragment>
                {editOrder.edit && <EditOrder saveChanges={saveChanges} data={editOrder.data}
                                              exitEditor={_ => setEditOrder({
                                                  edit: false,
                                                  data: undefined
                                              })}/>}

                <OrderHeader data={data} header={header}/>}
                {clickDelete &&
                <CostumePopUp title={popUp.deletePop.title + data.orderNum}
                              subText={popUp.deletePop.text}
                              classParent={'deletePop'}
                              onSubmitAnswer={(val) => val === 1 ? deleteOrder() : setClickDelete(false)}/>}
                <div className={'orderPageTable'}>
                    <CostumeButton parentClass={'status delete'} mainClass={'mainClassDelete'}
                                   text={Orders.deleteTitle}
                                   onClickButton={_ => setClickDelete(true)}/>
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
                           onEditFunc={onEditOrder}
                           order={Orders.orderTableSort}/>
                </div>
            </Fragment>}
        </div>

    );

};

export default withRouter(Order);