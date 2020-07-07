import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import {titles} from "../../../Textblocks";
import InputGeneral from "../../general/InputGeneral";
import ProblemHandler from "./ProblemHandler";

const MultipleHandler = ({data, setData}) => {
    return (
        <div className={'multipleContainer'}>
            <div className={"checkContainer"}>
                <Checkbox checked={data.multiple > 1} style={{width: "fit-content"}}
                          onChange={_ => {
                              setData({...data, multiple: data.multiple > 1 ? 1 : 2})
                          }}
                          inputProps={{'aria-label': 'checkbox with default color'}}/>
                <span>{titles.multiple}</span>
            </div>
            <InputGeneral value={data.multiple}
                          onChangeVal={multiple => setData({...data, multiple})} type={"number"}
                          inputClasses={{root: "animateInputText"}} label={"Quantity"}
                          labelClasses={{root: "animateInput"}}
                          parentClasses={{root: "rootText"}}/>
            <ProblemHandler setData={setData} data={data}/>


        </div>
    );
};

export default MultipleHandler;