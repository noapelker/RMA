import React, {useEffect, useRef, useState} from 'react';
import {getData} from "../../../Utils";
import "../../../styles/addOrder.scss"
import CostumeButton from "../../general/CostumeButton";
import Warranty from "./Warranty";
import MultipleHandler from "./MultipleHandler";
import DropContainer from "./DropContainer";
import DropGeneral from "./DropGeneral";
import {titles} from "../../../Textblocks";

const imgSrcBasePath = "../../../photos/"
const defaultOptionsUnit = unit => Object.entries(unit)
    .filter(([key]) => key !== "name" && key !== "_id")
    .map(([key, value]) => [key, value[0]])

//Add order/Edit Order
const AddProduct = ({cancel, orderVal, addData}) => {
    const unitsNames = useRef();
    const [data, setData] = useState(undefined);
    const [warranty, setWarranty] = useState(orderVal ? orderVal.warranty : "NO");
    const [quantity, setQuantity] = useState(orderVal ? orderVal.quantity : 1);
    const [state, setState] = useState(
        {
            unit: undefined,
            selectedOptions: undefined
        }
    );
    const setTheState = property => value => {
        if (property === "unit") {
            const temp = data.find(item => item.name === value)
            if (temp)
                setState({
                    unit: temp,
                    selectedOptions: defaultOptionsUnit(temp)
                })
        } else {
            setState(prevState => {
                const obj = Object.fromEntries(prevState.selectedOptions)
                obj[property] = value;
                return {
                    unit: prevState.unit,
                    selectedOptions: Object.entries(obj)
                }
            });
        }
    }
    const submitData = () => {
        let pref = Object.fromEntries(state.selectedOptions.map(item => item))
        const problems = pref.problems;
        delete pref.problems;
        const val = {
            name: state.unit.name,
            quantity,
            warranty,
            pref,
            problems
        }
        addData(val)
    }

    useEffect(() => {
        getData("units").then(data => {
            unitsNames.current = data.data.map(item => item.name);
            let temp = data.data;
            setData(temp);
            if (orderVal) {
                setState({
                    unit: temp.find(item => item.name === orderVal.name),
                    selectedOptions: [
                        ["problems", orderVal.problems],
                        ["version", orderVal.pref.version],
                        ["touch", orderVal.pref.touch],
                        ["ps", orderVal.pref.ps]
                    ]
                })
            } else
                setState({
                    unit: temp[0],
                    selectedOptions: defaultOptionsUnit(temp[0])
                })
        })

    }, [orderVal])
    return (
        <div className={'addProductContainer'}>
            <div className={'popContainer'}>
                <CostumeButton mainClass={'exitButtonContainer'} parentClass={"exitButtonPop"}
                               onClickButton={cancel}
                               imgSrc={imgSrcBasePath + 'exit.png'}/>
                {data && state.unit &&
                <DropGeneral textClass={"textDrop"}
                             data={state.unit.name}
                             parentClass={'singleDrop'}
                             setData={setTheState('unit')}
                             title={titles.unit}
                             options={data.map(item => item.name)}/>}
                {state.unit && <DropContainer stateSetter={setTheState} data={state}/>}
                <MultipleHandler quantity={quantity} setData={setQuantity}/>
                <Warranty data={warranty} setData={setWarranty}/>
                <CostumeButton mainClass={'submitButtonContainer'} parentClass={"submitButtonPop"}
                               onClickButton={submitData}
                               imgSrc={imgSrcBasePath + 'submit.png'}/>
            </div>
        </div>
    );
};

export default AddProduct;