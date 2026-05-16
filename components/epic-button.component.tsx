"use client"

import Link from "next/link"
import React from "react";
import { Button } from "./ui/button";

export default function EpicButton() {
    let [pressCount, setPressCount] = React.useState(0);

    const handleButtonPress = () => {
        setPressCount(pressCount + 1);
    }

    return (
        <div className="grid gap-2">
            <Button className="w-full" onClick={ handleButtonPress }>Click me { pressCount }</Button>
            <Link href={ `/note/${pressCount}` }><Button variant={ "outline" } className="w-full">yes yes</Button></Link>
        </div>
    )
}