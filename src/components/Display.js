import React from 'react';

function Display(props) {

    return (
        <div className="calculator-display">
            <div className="calculator-display__values">
                {props.result}
            </div>
        </div> 
    );
}

export default Display;