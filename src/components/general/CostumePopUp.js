import React from 'react';
import '../../styles/pop.scss'
import CostumeButton from "./CostumeButton";

const CostumePopUp = ({title, subText, onSubmitAnswer, }) => {
    return (
        <div className={'addProductContainer'}>
            <div className={"popUp mediumPopUp"}>
                <div className={'textContainerPop'}>
                    <span className={'titlePop'}>{title}</span>
                    <span className={'textPop'}>{subText}</span>
                </div>
                <div className={'popButtonContainer'}>
                    <CostumeButton mainClass={'popUpButtonContainer'} parentClass={"popUpNoButton"}
                                   onClickButton={_ => onSubmitAnswer(0)} text={"No"}/>
                    <CostumeButton mainClass={'popUpButtonContainer'}
                                   parentClass={"popUpYesButton"}
                                   onClickButton={_ => onSubmitAnswer(1)} text={"Yes"}/>
                </div>
            </div>
        </div>
    );
};

export default CostumePopUp;