import React, {useState} from 'react';
import "../../../styles/addProduct.scss"
import CostumeButton from "../../general/CostumeButton";
import DropContainer from "./DropContainer";
import MultipleHandler from "./MultipleHandler";
import Warranty from "./Warranty";
import {PSOptions, titles, touchOptions, unitsOptions, versionOptions} from "../../../Textblocks";

const imgSrcBasePath = "../../../photos/"
const AddProduct = ({cancel, addData}) => {
    const [data, setData] = useState({
        unit: 0,
        version: 0,
        touch: 0,
        ps: 0,
        quantity: 1,
        warranty: 0,
        multiple: 1,
        problem: "Default"
    })
    const submitProduct = () => {
        const temp = {
            unit: unitsOptions[data.unit].name,
            quantity: data.multiple,
            pref: {
                ps: PSOptions[data.ps].name,
                touch: touchOptions[data.touch].name,
                version: versionOptions[data.version].name
            },
            warranty: titles.warrantyText[data.warranty],
            problem: data.problem,
        }
        addData(temp);
    }
    return (
        <div className={'addProductContainer'}>
            <div className={'popContainer'}>
                <CostumeButton mainClass={'exitButtonContainer'} parentClass={"exitButtonPop"}
                               onClickButton={cancel}
                               imgSrc={imgSrcBasePath + 'exit.png'}/>
                <DropContainer data={data} setData={setData}/>
                <MultipleHandler data={data} setData={setData}/>
                <Warranty data={data} setData={setData}/>

                <CostumeButton mainClass={'submitButtonContainer'} parentClass={"submitButtonPop"}
                               onClickButton={submitProduct}
                               imgSrc={imgSrcBasePath + 'submit.png'}/>
            </div>
        </div>
    );
};

export default AddProduct;