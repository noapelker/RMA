import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import {titles} from "../../../Textblocks";
import InputGeneral from "../../general/InputGeneral";


const MultipleHandler = ({quantity, setData}) => {
    return (
        <div className={'multipleContainer'}>
            <div className={"checkContainer"}>
                <Checkbox checked={quantity > 1} style={{width: "fit-content"}}
                          onChange={_ => {
                              setData(quantity > 1 ? 1 : 2)
                          }}
                          inputProps={{'aria-label': 'checkbox with default color'}}/>
                <span>{titles.multiple}</span>
            </div>
            <InputGeneral value={quantity}
                          onChangeVal={quantity => setData(quantity)} type={"number"}
                          inputClasses={{root: "animateInputText"}} label={"Quantity"}
                          labelClasses={{root: "animateInput"}}
                          parentClasses={{root: "rootText"}}/>

        </div>
    );
};

export default MultipleHandler;