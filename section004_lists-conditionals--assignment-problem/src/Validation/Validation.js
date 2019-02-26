import React from "react";

const validation = props => {
    let validationMessage = "Text Long Enough";

    if (props.inputLength <= 5) {
        validationMessage = "Text Too Short";
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;
