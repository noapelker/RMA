import React, {useEffect, useState} from 'react';
import "../../styles/dealers.scss"
import {dealers} from "../../Textblocks";
import Item from "../Item";
import CostumeButton from "../general/CostumeButton";
import AddDealerPop from "./AddDealerPop";
import {getData} from "../../Utils";


const Dealers = () => {
    const [addDealer, setAddDealer] = useState(false)
    const [data, setData] = useState([]);
    useEffect(() => {
        getData("dealers").then(data => {
            setData(data.data)
        }).catch(err => console.log(err));

    }, [])
    const addDealerFunc = (name) => {
        getData("dealers", "POST", {name: name}).then(val => {
            let temp=data;
            temp.push(val);
            setData(temp)
            setAddDealer(false);
        })
    }
    return (
        <div className={'dealersContainer'}>
            <div className={'dealersTitleContainer'}>
                <span className={'dealersTitle'}>{dealers.title}</span>
                <CostumeButton parentClass={"addButton"} text={'+'} mainClass={"buttonPlus"}
                               onClickButton={_ => setAddDealer(true)}/>
            </div>
            {addDealer && <AddDealerPop removePop={_ => setAddDealer(false)}
                                        addDealer={name => addDealerFunc(name)}/>}
            <div className={'dealersItemsContainer'}>
                {Array.isArray(data) && data.map((item, key) => <Item key={key}
                                                                      parentClass={"itemWithUnderline"}
                                                                      text={item}/>)}
            </div>
        </div>
    );
};

export default Dealers;