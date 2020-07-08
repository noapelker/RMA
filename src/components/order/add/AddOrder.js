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
    const [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")) || []);
    const [openPop, setOpenPop] = useState(undefined);
    useEffect(() => {
        getData("dealers").then(data => {
            setOptions(data.data.map(item => item.name));
        })
    }, [])
    const addOrder = val => {
        let temp;
        if (data === [])
            temp = []
        else
            temp = data;
        temp.push(val);
        setData(temp);
        sessionStorage.setItem("data", JSON.stringify(temp));
        setAddProduct(false)
    }
    const deleteOrder = val => {
        // let index = data.indexOf(val)
    }
    const editOrder = val => {
        let index = data.indexOf(openPop)
        let temp = data;
        if (temp) {
            console.log(val)
            temp[index] = val;
            setData(temp);
        }
        setOpenPop(undefined);
        setAddProduct(false)
    }
    return (
        <div className={'addContainer'}>
            <CostumeButton onClickButton={_ => {
                setAddProduct(true)
            }} parentClass={'addProductButton'} text={"+"} textClass={'addClass'}/>
            {options && <DropGeneral options={options} data={data.name || options[0]}
                                     setData={name => setData({...data, name})}
                                     parentClass={'dropContainer'}
                                     title={addOrderData.dealerTitle}/>}
            <div className={'tableParentOrder'}>
                <Table cellClass={'cellOrder'} rowClass={"rowOrder"} order={Orders.addOrderSort}
                       data={data} edit headers={Orders.addOrderHeaders}
                       onDeleteOrder={val => deleteOrder(val)} onEditFunc={(data) => {
                    setOpenPop(data)
                    setAddProduct(true);
                }}/>
            </div>
            {addProduct &&
            <AddProduct cancel={_ => {
                setAddProduct(false);
                setOpenPop(undefined);
            }} orderVal={openPop}
                        addData={data => {
                            if (openPop) {
                                editOrder(data)
                            } else addOrder(data)
                        }}/>}
        </div>
    );
};

export default AddOrder;