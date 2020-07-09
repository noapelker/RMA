import React, {useEffect, useState} from 'react';
import "../../../styles/addOrder.scss"
import CostumeButton from "../../general/CostumeButton";
import Table from "../../general/Table";
import {addOrderData, Orders} from "../../../Textblocks";
import {getData} from "../../../Utils";
import DropGeneral from "./DropGeneral";
import AddProduct from "./AddProduct";
const AddOrder = _ => {

    //Add product pop
    const [addProduct, setAddProduct] = useState(false);

    //dealers options
    const [options, setOptions] = useState()

    //Order all data
    const [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")) || []);

    //On edit - row values
    const [openPop, setOpenPop] = useState(undefined);
    useEffect(() => {
        getData("dealers").then(data => {
            setOptions(data.data.map(item => item.name));
        })
    }, [])

    //Add order row
    const addToOrder = val => {
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

    //Delete row from order
    const deleteFromOrder = val => {
        // let index = data.indexOf(val)
    }

    //Edit single row
    const editProduct = val => {
        let index = data.indexOf(openPop)
        let temp = data;
        if (temp) {
            temp[index] = val;
            setData(temp);
        }
        setOpenPop(undefined);
        setAddProduct(false)
    }
    return (
        <div className={'addContainer'}>
            <CostumeButton onClickButton={() => {
                setAddProduct(true)
            }} parentClass={'addProductButton'} text={"+"} textClass={'addClass'}/>

            {/*Dealer dropdown on order page*/}
            {options && <DropGeneral options={options} data={data.name || options[0]}
                                     setData={name => setData({...data, name})}
                                     parentClass={'dropContainer'}
                                     title={addOrderData.dealerTitle}/>}

            <div className={'tableParentOrder'}>
                <Table cellClass={'cellOrder'} rowClass={"rowOrder"} order={Orders.addOrderSort}
                       data={data} edit headers={Orders.addOrderHeaders}
                       onDeleteOrder={val => deleteFromOrder(val)} onEditFunc={(data) => {
                    setOpenPop(data)
                    setAddProduct(true);
                }}/>
            </div>
            {addProduct &&
            <AddProduct cancel={() => {
                setAddProduct(false);
                setOpenPop(undefined);
            }} orderVal={openPop} addData={data => {
                if (openPop) {
                    //Submit changes on exist row
                    editProduct(data)
                } else addToOrder(data)
            }}/>}
        </div>
    );
};

export default AddOrder;