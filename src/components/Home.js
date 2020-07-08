import React, {useEffect, useState} from 'react';
import "../styles/home.scss"
import Dealers from "./dealers/Dealers";
import CostumeButton from "./general/CostumeButton";
import Table from "./general/Table";
import {Orders} from "../Textblocks";
import {getData} from "../Utils";
import {withRouter} from "react-router-dom"

const Home = ({history}) => {
    const [data, setData] = useState(undefined)
    useEffect(() => {
        getData("orders", "GET").then(data => {
            if (data)
                setData(data.data)
        })
    }, [])

    return (
        <div className={'homeContainer'}>
            <CostumeButton text={'+'} parentClass={"addOrderButton"} textClass={"addOrderText"}
                           onClickButton={_ => history.push('/order/add')}/>
            <CostumeButton imgSrc={"../../photos/settings.png"} parentClass={"settingsButton"} textClass={"addOrderText"}
                           onClickButton={_ => history.push('/settings')}/>
            <Dealers/>
            <div className={'orderContainer'}>

                <h1 className={'orderTitle'}>{Orders.title}</h1>
                {data && <Table data={data} headers={Orders.homeHeaders} clickOrder
                                order={Orders.homeTableSort}
                                endpoint={"orders/"}/>}
            </div>
        </div>
    );
};

export default withRouter(Home);