import React, {useEffect, useState} from 'react';
import "../../../styles/addOrder.scss"
import CostumeButton from "../../general/CostumeButton";
import Table from "../../general/Table";
import {addOrderData, Orders} from "../../../Textblocks";
import {getData} from "../../../Utils";
import DropGeneral from "./DropGeneral";
import AddProduct from "./AddProduct";
import {withRouter} from "react-router-dom"

const imgSrcBasePath = "../../../photos/"

const AddOrder = ({history}) => {

    //Add product pop
    const [addProduct, setAddProduct] = useState(false);
    const [dealerName, setDealerName] = useState();

    //dealers options
    const [options, setOptions] = useState()

    //Order all data
    const [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")) || []);

    //On edit - row values
    const [openPop, setOpenPop] = useState(undefined);
    useEffect(() => {
        getData("dealers").then(data => {
            setOptions(data.data.map(item => item.name));
            setDealerName(data.data[0].name)
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
        sessionStorage.setItem("data", JSON.stringify(data));
        setData(temp);
        setAddProduct(false)
    }

    const submitOrder = () => {
        const temp = {
            name: dealerName,
            products: data
        }
        sessionStorage.clear();
        getData("orders", "POST", temp).then(_ => history.push("/"))
    }
    //Delete row from order
    const deleteFromOrder = val => {
        let obj = data.filter(item => item !== val);
        setData(obj);
        sessionStorage.setItem("data", JSON.stringify(obj));

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
            {options && dealerName && <DropGeneral options={options} data={dealerName}
                                                   setData={name => setDealerName(name)}
                                                   parentClass={'dropContainer'}
                                                   title={addOrderData.dealerTitle}/>}

            <div className={'tableParentOrder'}>
                <Table cellClass={'cellOrder'} showPref rowClass={"rowOrder"} order={Orders.addOrderSort}
                       data={data} edit headers={Orders.addOrderHeaders}
                       onDeleteOrder={val => deleteFromOrder(val)} onEditFunc={(data) => {
                    setOpenPop(data)
                    setAddProduct(true);
                }}/>
            </div>
            <CostumeButton mainClass={'submitButtonContainer'} parentClass={"submitButtonPop"}
                           onClickButton={submitOrder}
                           imgSrc={imgSrcBasePath + 'submit.png'}/>

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

export default withRouter(AddOrder);