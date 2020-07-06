import React, {useState} from 'react';
import "../../../styles/addProduct.scss"
import CostumeButton from "../../general/CostumeButton";
import DropGeneral from "./DropGeneral";
import {
    PSOptions,
    titles,
    touchOptions,
    unitsOptions,
    versionOptions
} from "../../../Textblocks";

const imgSrcBasePath = "../../../photos/"
const AddProduct = ({cancel}) => {
    const [data, setData] = useState({
        unit: 0,
        version: "",
        touch: "",
        ps: "",
        quantity: 1,
        warranty: false
    })
    return (
        <div className={'addProductContainer'}>
            <div className={'popContainer'}>
                <CostumeButton mainClass={'exitButtonContainer'} parentClass={"exitButtonPop"}
                               onClickButton={cancel}
                               imgSrc={imgSrcBasePath + 'exit.png'}/>
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


            </div>
        </div>
    );
};

export default AddProduct;