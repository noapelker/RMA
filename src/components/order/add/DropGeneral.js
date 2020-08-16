import React from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const DropGeneral = ({parentClass, textClass, title, options, data, setData}) => {
    return (
        <div className={parentClass}>
            <span className={'choseDealerName ' + textClass}>{title}</span>
            <div className={'dropDownContainer'}>
                {Array.isArray(options) && <Select value={data} fullWidth classes={{
                    icon: `iconColor`, root: `inputClassChose`
                }} onChange={event => {
                    setData(title,event.target.value)
                }} label={"noa"}>
                    {options.map((item, key) =>  <MenuItem key={key} value={item}>{item}</MenuItem>)}
                </Select>}
            </div>
        </div>
    );
};

export default DropGeneral;