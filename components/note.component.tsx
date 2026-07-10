import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type whatIExpect = {
    notes: string[],
    note: number,
    transpose: number
}

export default function Note(props: whatIExpect) {
    let realNote = (props.note + props.transpose - 2) % props.notes.length

    return <>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <CardHeader>
                <CardTitle className="mt-4">{ props.notes[realNote] }</CardTitle>
                <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription>
            </CardHeader>
            <img
                src={ `/notes/${props.note}.jpg` }
                alt={ props.notes[realNote] }
                className="relative z-20 aspect-video w-full"
            />
        </Card>
    </>
}