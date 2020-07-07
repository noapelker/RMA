import React, {Fragment} from 'react';
import DropGeneral from "./DropGeneral";
import {PSOptions, titles, touchOptions, unitsOptions, versionOptions} from "../../../Textblocks";

const DropContainer = ({data, setData}) => {
    return (
        <Fragment>
            <DropGeneral textClass={"textDrop"} options={unitsOptions} data={data.unit}
                         setData={unit => setData({...data, unit})}
                         parentClass={'singleDrop'}
                         title={titles.unit}/>
            <div className={'prefDropContainer'}>
                <DropGeneral options={versionOptions} data={data.version}
                             setData={version => setData({...data, version})}
                             parentClass={'singleDrop'}

                             title={titles.version}/>
                <DropGeneral options={touchOptions} data={data.touch}
                             setData={touch => setData({...data, touch})}
                             parentClass={'singleDrop'}
                             title={titles.touch}/>
                <DropGeneral options={PSOptions} data={data.ps}
                             setData={ps => setData({...data, ps})}
                             parentClass={'singleDrop'}
                             title={titles.ps}/>
            </div>
        </Fragment>
    );
};

export default DropContainer;