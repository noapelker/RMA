import React from 'react';
import "../styles/item.scss"
const Item = ({parentClass,text}) => {
    return (
        <div className={parentClass}>
            <span>{text.name}</span>
        </div>
    );
};

export default Item;