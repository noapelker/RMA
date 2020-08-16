import React, {useEffect, useState} from 'react';
import {editOptions, statusButtons} from "../../../Textblocks";
import CostumeButton from "../../general/CostumeButton";
import "../../../styles/editOrder.scss"
import DropGeneral from "../add/DropGeneral";
import {getData} from "../../../Utils";
import InputBase from "../../dealers/InputBase";

const imgSrcBasePath = "../../../photos/"

const EditOrder = ({data, exitEditor, saveChanges}) => {
    const [state, setState] = useState(JSON.parse(JSON.stringify(data)))
    const [options, setOptions] = useState()
    useEffect(() => {
        getData("units?name=" + data.name).then(data => {
                setOptions(data.data[0]);
                console.log(data.data[0])
            }
        )

    }, [data])
    const setDrop = (type, val) => {
        if (type !== "problems") {
            let temp = state.pref;
            temp[type] = val;
            setState({
                ...state,
                pref: temp
            })

        } else
            setState({
                ...state,
                [type]: val
            })
    }
    return (
        <div className={'addProductContainer'}>
            <div className={"popUp bigPopUp"}>
                <CostumeButton imgSrc={'../../photos/exit.png'} mainClass={"exitPop"}
                               parentClass={'imgIconHalf'}
                               onClickButton={_ => {
                                   exitEditor()
                               }}/>
                <div className={'statusHolder'}>

                    {state && statusButtons.map((item, key) => <CostumeButton key={key}
                                                                              text={item.name}
                                                                              parentClass={item.classVal + " hoverClass" + (state.status === item.name ?
                                                                                  " chosenStatus" : "")}
                                                                              onClickButton={val => {
                                                                                  setState({
                                                                                      ...state,
                                                                                      status: val
                                                                                  })
                                                                              }}/>)}
                </div>
                <div className={'progressContainer'}>
                    <span>Progress</span>
                    <InputBase inputClass={'inputGeneral'} data={state.progerss}
                               type={"text"} parentClasses={'dropGeneral'}
                               setData={val => {
                                   setState({...state, progerss: val})

                               }}/>
                </div>
                <div className={'dropGeneralContainer'}>
                    {options && editOptions.map((item, key) => <DropGeneral key={key}
                                                                            data={state[item] || state.pref[item]}
                                                                            parentClass={'dropGeneral'}
                                                                            title={item}
                                                                            setData={setDrop}
                                                                            options={options[item]}
                                                                            textClass={''}/>)}
                </div>
                <CostumeButton imgSrc={imgSrcBasePath + 'submit.png'}
                               mainClass={'submitButtonContainer'} parentClass={'submitButton'}
                               onClickButton={_ => {
                                   saveChanges(state);
                               }}/>
            </div>
        </div>
    );
};

export default EditOrder;