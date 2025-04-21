import React from "react";

//create your first component
export const CountDown = (props) => {

    return (
        <div className="row">
            <div className="mb-3 container text-center col-2">
                <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa para cuenta regresiva</label>
                <input type="text" className="form-control text-center" id="exampleFormControlInput1" placeholder="Tu numero" onChange={props.reverse} />
            </div>
        </div>
    );
};

