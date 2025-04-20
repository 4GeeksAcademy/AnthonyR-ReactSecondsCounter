import React from "react";

//create your first component
const SecondsCounter = (props) => {

    return (
        <div className="container-fluid p-3 px-5" style={{ background: 'black' }}>
            <div className="row row-cols-xxl-7 mx-5">
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '80px' }}><i className="fa-solid fa-clock"></i></span>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '90px' }}>{props.digSix}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '90px' }}>{props.digFive}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '90px' }}>{props.digFour}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '90px' }}>{props.digThree}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '90px' }}>{props.digTwo}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center bg-dark text-light " style={{ height: '200px', borderLeft: '4px solid rgb(65, 64, 64)', borderRight: '4px solid rgb(65, 64, 64)' }}>
                        <span className="h-100 d-flex justify-content-center align-items-center" style={{ fontSize: '90px' }}>{props.digOne}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SecondsCounter;