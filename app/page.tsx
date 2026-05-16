import EpicButton from "@/components/epic-button.component"
import Test from "@/components/test.component"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export default function Home() {
    return (
        <>
            <br />
            <h1>WOW</h1>
            <br />
            <Card className="w-full max-w-sm">
                <CardContent>
                    <CardTitle>Skibidi dop dop</CardTitle>
                    <CardDescription>
                        <Test />
                        <Test lol="a" />
                    </CardDescription>
                    <EpicButton />
                </CardContent>
            </Card>
        </>
    )
}
