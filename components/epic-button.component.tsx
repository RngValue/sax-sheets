"use client"

import React from "react";

export default function EpicButton() {
    let [pressCount, setPressCount] = React.useState(0);

    const handleButtonPress = () => {
        setPressCount(pressCount + 1);
    }

    return (
        <button onClick={ handleButtonPress }>Click me { pressCount }</button>
    )
}