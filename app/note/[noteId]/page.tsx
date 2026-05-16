import { notFound } from "next/navigation"

type RouteParam = {
    params: Promise<{ noteId: string }>
}

export default async function Note({ params }: RouteParam) {
    let { noteId } = await params
    if (parseInt(noteId) > 10 && parseInt(noteId) != 67) notFound()
    return (
        <p className="text-center">{ noteId }</p>
    )
}
