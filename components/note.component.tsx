import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type whatIExpect = {
    note: number,
    transpose: number
}

export default function Note(props: whatIExpect) {
    const TOTAL_NOTES = 12
    const notesArray = ['C', 'C♯ D♭', 'D', 'D♯ E♭', 'E', 'F', 'F♯ G♭', 'G', 'G♯ A♭', 'A', 'A♯ B♭/H♭', 'B/H']

    let realNote = (props.note + props.transpose) % TOTAL_NOTES

    return <>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <CardHeader>
                <CardTitle className="mt-4">{ notesArray[realNote] }</CardTitle>
                <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription>
            </CardHeader>
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
        </Card>
    </>
}