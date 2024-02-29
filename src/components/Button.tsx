import React from "react"
type ButtonProps = {
    buttonText: string;
    reqType: string;
    setReqType: (type: string) => void 
}

export const Button: React.FC<ButtonProps> = ({buttonText, reqType, setReqType}) => {
    return (
        <button 
            className={buttonText === reqType ? "selected" : "null"}
            type="button"
            onClick={() => setReqType(buttonText)}
        >
            {buttonText}
        </button>
            
    )
}