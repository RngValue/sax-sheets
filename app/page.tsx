'use client'

import Note from "@/components/note.component";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Home() {
    const DEFAULT_NOTE = 12
    const DEFAULT_ROOT_NOTE = "all"
    const notesArray = ['C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B']
    const scales: { [id: string]: number[] } = {
        "major": [0, 2, 4, 5, 7, 9, 11],
        "minor": [0, 2, 3, 5, 7, 8, 10],
        "harmonic minor": [0, 2, 3, 5, 7, 8, 11]
    }

    let [transposeValue, setTransposeValue] = useState<number>(DEFAULT_NOTE);
    let [rootNote, setRootNote] = useState<number>(0);
    let [currentScale, setCurrentScale] = useState<string>(DEFAULT_ROOT_NOTE);

    if (currentScale != "all") {
        scales[currentScale].map((num: number, index: number) => {
            scales[currentScale][index] = (num + rootNote) % notesArray.length
        })
    }
    return (
        <>
            <h1 className="text-center pt-6 pb-6">WOW ({ currentScale })</h1>
            <div className="mx-auto grid w-full max-w-xs gap-3">
                <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="slider-demo-temperature">Transpose</Label>
                    <span className="text-sm text-muted-foreground">
                        {notesArray[transposeValue % notesArray.length]}
                    </span>
                </div>
                <Slider
                    defaultValue={[DEFAULT_NOTE]}
                    min={2}
                    max={notesArray.length * 2}
                    step={1}
                    onValueChange={(value) => setTransposeValue(value[0])}
                    className="mx-auto w-full max-w-xs"
                />
            </div>
            <br />
            <div className="mx-auto grid w-full max-w-xs gap-3">
                <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="slider-demo-temperature">Root Note</Label>
                    <span className="text-sm text-muted-foreground">
                        {notesArray[rootNote % notesArray.length]}
                    </span>
                </div>
                <Slider
                    defaultValue={[0]}
                    min={0}
                    max={12}
                    step={1}
                    onValueChange={(value) => setRootNote(value[0])}
                    className="mx-auto w-full max-w-xs"
                />
                <p className="mx-auto flex w-full max-w-xs gap-3">
                    <Button onClick={() => setCurrentScale("all")}>all</Button>
                    <Button onClick={() => setCurrentScale("major")}>major</Button>
                    <Button onClick={() => setCurrentScale("minor")}>minor</Button>
                    <Button onClick={() => setCurrentScale("harmonic minor")}>harmonic minor</Button>
                </p>
            </div>
            <br />
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                {[...Array(32).keys()].map((num, index) => {
                    if (currentScale == "all" || scales[currentScale].indexOf((num + transposeValue - 2) % notesArray.length) > -1) {
                        return <Note key={index} notes={notesArray} note={num} transpose={transposeValue}></Note>
                    }
                })}
            </div>
            <br />
        </>
    )
}
