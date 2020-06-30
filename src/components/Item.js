import React from 'react';
import "../styles/item.css"
const Item = ({parentClass,text}) => {
    return (
        <div className={parentClass}>
            <span>{text}</span>
        </div>
    );
};

export default Item;