import React, {Fragment, useEffect, useState,} from 'react';
import DropGeneral from "./DropGeneral";
import {titles} from "../../../Textblocks";

const DropContainer = ({allDataUnits, chosenUnit, setUnit}) => {

    //If the function mounted
    const [mounted, setMounted] = useState(false);

    //Set default value for options
    const firstItem = Array.isArray(allDataUnits) ? allDataUnits[0] : {}

    //Unit names-doesnt change
    const unitsOptions = allDataUnits.map(item => item.name);

    //Pref and Problem choosing options
    const [options, setOptions] = useState({
        versions: firstItem.version || [],
        touch: firstItem.touch || [],
        ps: firstItem.ps || [],
        problems: firstItem.problems || [],

    })


    useEffect(() => {
        const temp = allDataUnits.find(item => item.name === chosenUnit.name)
        if (temp) {
            setOptions({
                versions: temp.version || [],
                touch: temp.touch || [],
                ps: temp.ps || [],
                problems: temp.problems
            })
            if (mounted)
                setUnit({
                    ...chosenUnit,
                    version: temp.version[0],
                    ps: temp.ps[0],
                    touch: temp.touch[0],
                    problems: temp.problems[0]
                })
            else setMounted(true)
        }
    }, [chosenUnit.name])

    return (
        <Fragment>

            {/*Handle unit name changes*/}
            <DropGeneral textClass={"textDrop"} options={unitsOptions} data={chosenUnit.name}
                         setData={name => setUnit({...chosenUnit, name})}
                         parentClass={'singleDrop'}
                         title={titles.unit}/>
            <div className={'prefDropContainer'}>

                {/*Handle unit version changes*/}
                <DropGeneral options={options.versions} data={chosenUnit.version}
                             setData={version => setUnit({...chosenUnit, version})}
                             parentClass={'singleDrop'}
                             title={titles.version}/>

                {/*Handle unit touch changes*/}
                <DropGeneral options={options.touch} data={chosenUnit.touch}
                             setData={touch => setUnit({...chosenUnit, touch})}
                             parentClass={'singleDrop'}
                             title={titles.touch}/>

                {/*Handle unit ps changes*/}
                <DropGeneral options={options.ps} data={chosenUnit.ps}
                             setData={ps => setUnit({...chosenUnit, ps})}
                             parentClass={'singleDrop'}
                             title={titles.ps}/>

                {/*Handle unit problems changes*/}
                <DropGeneral options={options.problems}
                             data={chosenUnit.problems}
                             setData={problems => setUnit({
                                 ...chosenUnit,
                                 problems
                             })}
                             parentClass={'singleDrop'}
                             title={titles.problems}/>

            </div>
        </Fragment>
    );
};

export default DropContainer;