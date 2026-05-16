import EpicButton from "@/components/epic-button.component"
import Test from "@/components/test.component"

import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>Skibidi dop dop</h1>
            <p><Link href="/note/67">yes yes</Link></p>
            <Test />
            <Test lol="a" />
            <EpicButton />
        </>
    )
}
