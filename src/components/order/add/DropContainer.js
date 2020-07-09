import React from 'react';
import "../../../styles/addProduct.scss"
import DropGeneral from "./DropGeneral";

const DropContainer = ({data, stateSetter}) => {
    return (
        <div className={'prefDropContainer'}>
            {data.selectedOptions.map((item, key) =>
                    <DropGeneral
                        setData={stateSetter(item[0])}
                        key={key} parentClass={'singleDrop'} title={item[0]}
                                 data={item[1]} options={data.unit[item[0]]}/>)
            }
        </div>
    );
};

export default DropContainer;