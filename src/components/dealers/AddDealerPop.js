import React, {useState} from 'react';
import CostumeButton from "../general/CostumeButton";
import InputBase from "./InputBase";
const imgSrcBasePath = "../../../photos/";
const AddDealerPop = ({removePop,addDealer}) => {
    const [data, setData] = useState("");
    return (
        <div className={'dealerPopContainer'}>
            <CostumeButton mainClass={'exitButtonContainer'} parentClass={"exitButton"}
                           onClickButton={removePop}
                           imgSrc={imgSrcBasePath + 'exit.png'}/>
            <div className={'nameContainer'}>
                <InputBase placeholder={'Enter Name'} type={"text"} inputClass={'nameDealer'}
                           data={data} setData={setData}/>
                <CostumeButton imgSrc={imgSrcBasePath + 'submit.png'}
                               mainClass={'submitButtonContainer'} parentClass={'submitButton'}
                               onClickButton={_ => {
                                   addDealer(data);
                               }}/>
            </div>
        </div>
    );
};

export default AddDealerPop;