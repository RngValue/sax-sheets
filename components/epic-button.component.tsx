"use client"

import Link from "next/link"
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function EpicButton() {
    let [pressCount, setPressCount] = React.useState(0);

    const handleButtonPress = () => {
        setPressCount(pressCount + 1);
    }

    return (
        <Card className="w-full max-w-sm justify-center ms-auto me-auto">
            <CardContent>
                <CardTitle>Skibidi dop dop</CardTitle>
                <CardDescription>epic button yo</CardDescription>
            </CardContent>
            <CardFooter className="grid gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="w-full" onClick={ handleButtonPress }>Click me { pressCount }</Button>
                    </TooltipTrigger>
                    <TooltipContent className="grid">
                        <p>67</p>
                    </TooltipContent>
                </Tooltip>
                <Link href={ `/note/${pressCount}` }><Button variant="outline" className="w-full">yes yes</Button></Link>
            </CardFooter>
        </Card>
    )
}