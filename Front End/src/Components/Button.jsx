import React from 'react'
import { Button } from "@material-ui/core";
import ReactLoading from "react-loading";

function BtnPrimary({
    className,
    title,
    type,
    onClick,
    loader,
    loaderColour,
    border,
    color,
    backgroundColor,
    disabled,
}) {
    return (
        <Button 
            style={{
                backgroundColor: backgroundColor ? backgroundColor : "#1181F2",
                color: color ? color : "#fff",
                border: border,
            }}
            className={className ? className + " Button" : "Button"}
            onClick= {onClick} 
            type = {type}
            disabled = {disabled}
        >
            {
                loader ? (
                    <div 
                        className = "loader-span"
                    >
                        <ReactLoading
                            type="spinningBubbles"
                            color={loaderColour ? loaderColour : "#fff"}
                            width={40}
                            height={40}
                        />
                    </div>
                ) : (
                    <div className="title">
                        {title}
                    </div>
                )
            }
        </Button>
    )
}

export default BtnPrimary
