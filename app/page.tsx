import EpicButton from "@/components/epic-button.component"
import Test from "@/components/test.component"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export default function Home() {
    return (
        <>
            <h1 className="text-center pt-6 pb-6">WOW</h1>
            <Card className="w-full max-w-sm justify-center ms-auto me-auto">
                <CardContent>
                    <CardTitle>Skibidi dop dop</CardTitle>
                    <CardDescription>
                        <Test />
                        <Test lol="a" />
                    </CardDescription>
                    <br />
                    <EpicButton />
                </CardContent>
            </Card>
        </>
    )
}
