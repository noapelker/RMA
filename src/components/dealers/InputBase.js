import React from 'react';

const InputBase = ({type, inputClass,data,setData, placeholder}) => {
    return (
            <input type={type} className={inputClass} value={data||""}
                   placeholder={placeholder} onChange={e=>setData(e.target.value)} />

    );
};

export default InputBase;