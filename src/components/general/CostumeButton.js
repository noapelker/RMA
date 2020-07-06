import React from 'react';

const CostumeButton = ({mainClass, parentClass, imgSrc, text, onClickButton, textClass, onMouseEnter, onMouseLeave}) => {
    return (
        <div className={mainClass || 'buttonMainClass'} onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            {imgSrc ?
                <img alt={"src"} src={imgSrc} className={parentClass} onClick={onClickButton||{}}/> :
                <div className={parentClass} onClick={e => {
                    if (onClickButton)
                        onClickButton(e.target)
                }}>
                    <span className={textClass || ""}>{text}</span>
                </div>
            }
        </div>
    );
};

export default CostumeButton;