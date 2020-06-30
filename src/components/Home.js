import React from 'react';
import "../styles/home.css"
import Dealers from "./Dealers";
import CostumeButton from "./General/CostumeButton";
import Table from "./Table";
import {fakeData, Orders} from "../Textblocks";

const requestToAddOrder = _ => {

}
const Home = props => {
    return (
        <div className={'homeContainer'}>
            <CostumeButton text={'+'} parentClass={"addOrderButton"} textClass={"addOrderText"}
                           onClickButton={requestToAddOrder}/>
            <Dealers/>
            <Table data={fakeData} headers={Orders.headers}/>
        </div>
    );
};

export default Home;