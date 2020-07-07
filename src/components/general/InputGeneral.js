import React from 'react';
import TextField from "@material-ui/core/TextField";

const InputGeneral = ({onChangeVal, value, parentClasses, label, inputClasses, labelClasses, type}) => {
    return (
        <TextField classes={parentClasses || {}} id="standard-basic" label={label}
                   InputProps={{classes: inputClasses || {}}}
                   InputLabelProps={{
                       classes: labelClasses || {}
                   }} type={type}
                   value={value}
                   onChange={e => {
                       onChangeVal(e.target.value)
                   }}/>
    );
};

export default InputGeneral;