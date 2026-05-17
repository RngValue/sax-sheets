import EpicButton from "@/components/epic-button.component"
import Test from "@/components/test.component"

export default function Home() {
    return (
        <>
            <h1 className="text-center pt-6 pb-6">WOW</h1>
            <Test />
            <Test lol="a" />
            <EpicButton />
        </>
    )
}
