import React from "react";

//create your first component
export const Buttons = (props) => {

    return (
        <div className="d-flex justify-content-center" style={{background: 'black'}}>
            <button type="button" className="btn btn-secondary m-2" onClick={props.restart}>Restart</button>
            <button type="button" className="btn btn-secondary m-2" onClick={props.stop}>Stop</button>
            <button type="button" className="btn btn-secondary m-2" onClick={props.resume}>Resume</button>
        </div>
    );
};