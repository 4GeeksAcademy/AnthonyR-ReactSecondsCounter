import React from "react";

//create your first component
export const Alarm = (props) => {

    return (
        <div className="row text-white" style={{background: 'black'}}>
            <div className="mb-3 container text-center col-2">
                <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa para crear tu alarma</label>
                <input type="text" className="form-control text-center" id="exampleFormControlInput1" placeholder="Tu alarma" onChange={props.alarm} />
            </div>
        </div>
    );
};