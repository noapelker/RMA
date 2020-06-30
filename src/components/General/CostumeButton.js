import React, {Fragment} from 'react';

const CostumeButton = ({parentClass, imgSrc, text, onClickButton, textClass}) => {
    return (
        <Fragment>
            {imgSrc ?
                <img alt={"src"} src={imgSrc}/> :
                <div className={parentClass} onClick={e => onClickButton(e.target)}>
                    <span className={textClass || ""}>{text}</span>
                </div>
            }
        </Fragment>
    );
};

export default CostumeButton;