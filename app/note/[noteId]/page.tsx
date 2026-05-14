import { notFound } from "next/navigation";

export default async function Note({ params }: { params: Promise<{ noteId: string }>}) {
    let { noteId } = await params
    if (parseInt(noteId) > 10) notFound()
    return (
        <p>{noteId}</p>
    )
}
