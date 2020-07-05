import React from 'react';
import "../styles/dealers.css"
import {dealers, FakeDealers} from "../Textblocks";
import Item from "./Item";
import CostumeButton from "./General/CostumeButton";

const RequestToAddDealer = _ => {

}
const Dealers = _ => {
    return (
        <div className={'dealersContainer'}>
            <div className={'dealersTitleContainer'}>
                <span className={'dealersTitle'}>{dealers.title}</span>
                <CostumeButton parentClass={"addButton"} text={'+'} mainClass={"buttonPlus"}
                               onClickButton={RequestToAddDealer}/>
            </div>
            <div className={'dealersItemsContainer'}>
                {FakeDealers.map((item, key) => <Item key={key} parentClass={"itemWithUnderline"}
                                                      text={item}/>)}
            </div>
        </div>
    );
};

export default Dealers;