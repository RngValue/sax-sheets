import Note from "@/components/note.component";

export default function Home() {
    return (
        <>
            <h1 className="text-center pt-6 pb-6">WOW</h1>
            <Note note={1} transpose={0}></Note>
        </>
    )
}
