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
                <CardTitle className="mt-4 flex items-center justify-between gap-2">
                    <big>{ props.notes[realNote] }</big>
                    <span className="text-sm text-muted-foreground">
                        tuned for { props.notes[props.transpose % props.notes.length] }
                    </span>
                </CardTitle>
            </CardHeader>
            <img
                src={ `/notes/${props.note}.jpg` }
                alt={ props.notes[realNote] }
                className="relative z-20 w-full"
            />
        </Card>
    </>
}