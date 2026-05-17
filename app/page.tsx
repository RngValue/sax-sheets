import EpicButton from "@/components/epic-button.component"
import Test from "@/components/test.component"
import WomenButton from "@/components/women-button.component"

export default function Home() {
    return (
        <>
            <h1 className="text-center pt-6 pb-6">WOW</h1>
            <Test />
            <Test lol="a" />
            <div className="grid ms-4 me-4 gap-4">
                <EpicButton />
                <WomenButton />
            </div>
        </>
    )
}
