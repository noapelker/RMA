import React from 'react';
import InputGeneral from "../../general/InputGeneral";

const ProblemHandler = ({data, setData}) => {
    return (
        <div className={'problemContainer'}>
            <InputGeneral value={data.problem}
                          onChangeVal={problem => setData({...data, problem})} type={"text"}
                          inputClasses={{root: "animateInputText"}} label={"Problem"}
                          labelClasses={{root: "animateInput"}}
                          parentClasses={{root: "rootText"}}/>
        </div>
    );
};

export default ProblemHandler;