import React, {useEffect, useState} from 'react';
import "../../../styles/addOrder.scss"
import CostumeButton from "../../general/CostumeButton";
import Table from "../../general/Table";
import {addOrderData, Orders} from "../../../Textblocks";
import AddProduct from "./AddProduct";
import {getData} from "../../../Utils";
import DropGeneral from "./DropGeneral";

const AddOrder = _ => {
    const [addProduct, setAddProduct] = useState(false);
    const [options, setOptions] = useState()
    const [data, setData] = useState(
        {
            name: 0,
        }
    );
    useEffect(() => {
        getData("dealers").then(data => {
            setOptions(data.data);
        })
    }, [])
    return (
        <div className={'addContainer'}>
            <CostumeButton onClickButton={_ => {
                setAddProduct(true)
            }} parentClass={'addProductButton'} text={"+"} textClass={'addClass'}/>
            {options && <DropGeneral options={options} data={data.name}
                                     setData={name => setData({...data, name})}
                                     parentClass={'dropContainer'}
                                     title={addOrderData.dealerTitle}/>}
            <div className={'tableParentOrder'}>
                <Table order={Orders.addOrderSort} data={data} headers={Orders.addOrderHeaders}/>
            </div>
            {addProduct &&
            <AddProduct cancel={_ => setAddProduct(false)} addData={data => console.log(data)}/>}
        </div>
    );
};

export default AddOrder;