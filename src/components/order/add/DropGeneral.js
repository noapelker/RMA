import React from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const DropGeneral = ({parentClass, textClass, title, options, data, setData}) => {
    return (
        <div className={parentClass}>
            <span className={'choseDealerName ' + textClass}>{title}</span>
            <div className={'dropDownContainer'}>
                {Array.isArray(options) && <Select value={data || 0} fullWidth classes={{
                    icon: `iconColor`, root: `inputClassChose`
                }} onChange={event => {
                    setData(event.target.value)
                }} label={"noa"}>
                    {options.map((item, key) => <MenuItem key={key}
                                                          value={key}>{item.name}</MenuItem>)}
                </Select>}
            </div>
        </div>
    );
};

export default DropGeneral;