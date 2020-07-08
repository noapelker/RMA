import React, {useState} from 'react';
import "../../styles/settings.scss"
import DropGeneral from "../order/add/DropGeneral";
import {titles, unitsOptions} from "../../Textblocks";
const Settings = _ => {
    const [data,setData]=useState(
        {
            unit: 0
        }   );
    return (
        <div className={'settingsContainer'}>
            <div className={'unitsHeaderContainer'}>
                <DropGeneral textClass={"textDrop"} options={unitsOptions.map(item => item.name)} data={data.unit}
                             setData={unit => setData({...data, unit})}
                             parentClass={'unitDrop'}
                             title={titles.unit}/>
            </div>
        </div>
    );
};

export default Settings;