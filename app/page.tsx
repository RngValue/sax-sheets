'use client'

import Note from "@/components/note.component";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Home() {
    const DEFAULT_NOTE = 12
    const notesArray = ['C', 'C♯ D♭', 'D', 'D♯ E♭', 'E', 'F', 'F♯ G♭', 'G', 'G♯ A♭', 'A', 'A♯ B♭/H♭', 'B/H']
    let [transposeValue, setTransposeValue] = useState(DEFAULT_NOTE);
    return (
        <>
            <h1 className="text-center pt-6 pb-6">WOW</h1>
            <div className="mx-auto grid w-full max-w-xs gap-3">
                <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="slider-demo-temperature">Transpose</Label>
                    <span className="text-sm text-muted-foreground">
                        {notesArray[transposeValue % notesArray.length]}
                    </span>
                </div>
                <Slider
                    defaultValue={[DEFAULT_NOTE]}
                    max={notesArray.length * 2}
                    step={1}
                    onValueChange={(value) => setTransposeValue(value as unknown as number)}
                    className="mx-auto w-full max-w-xs"
                />
            </div>
            <br />

            <Note notes={notesArray} note={0} transpose={transposeValue}></Note>
        </>
    )
}
