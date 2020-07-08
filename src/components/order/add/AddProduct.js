import React, {useEffect, useState} from 'react';
import "../../../styles/addProduct.scss"
import CostumeButton from "../../general/CostumeButton";
import DropContainer from "./DropContainer";
import MultipleHandler from "./MultipleHandler";
import Warranty from "./Warranty";
import {getData} from "../../../Utils";
const imgSrcBasePath = "../../../photos/"

const AddProduct = ({orderVal, cancel, addData}) => {
    const [data, setData] = useState(undefined)
    const [unit, setUnit] = useState({})
    useEffect(() => {
            getData("units", "GET").then(data => {
                let temp;
                temp = orderVal || data.data[0]
                setUnit({
                    name: temp.name,
                    version: orderVal ? temp.pref.version : (temp.version[0] || ''),
                    ps: orderVal ? temp.pref.ps : (temp.ps[0] || ''),
                    touch: orderVal ? temp.pref.touch : (temp.touch[0] || ''),
                    problems: orderVal ? temp.problems : (temp.problems[0] || ''),
                    quantity: temp.quantity || 1,
                    warranty: temp.warranty || "NO"
                })
                setData(data.data);
            })
        },
        [])
    const submitProduct = () => {
        const temp = {
            name: unit.name,
            quantity: unit.quantity,
            pref: {
                ps: unit.ps,
                touch: unit.touch,
                version: unit.version
            },
            warranty: unit.warranty,
            problems: unit.problems,
        }
        addData(temp);
    }
    return (
        <div className={'addProductContainer'}>
            {data && unit &&
            <div className={'popContainer'}>
                <CostumeButton mainClass={'exitButtonContainer'} parentClass={"exitButtonPop"}
                               onClickButton={cancel}
                               imgSrc={imgSrcBasePath + 'exit.png'}/>
                <DropContainer allDataUnits={data} chosenUnit={unit} setUnit={setUnit}/>
                <MultipleHandler quantity={unit.quantity}
                                 setData={quantity => setUnit({...unit, quantity})}/>
                <Warranty data={unit.warranty} setData={warranty => setUnit({...unit, warranty})}/>
                <CostumeButton mainClass={'submitButtonContainer'} parentClass={"submitButtonPop"}
                               onClickButton={submitProduct}
                               imgSrc={imgSrcBasePath + 'submit.png'}/>
            </div>}
        </div>
    );
};

export default AddProduct;