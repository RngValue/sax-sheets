"use client"

import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

export default function WomenButton() {
    const women = ["Alice", "Christie", "Franz Kafka", "Miloš Zeman", "Krteček", "Vepřo knedlo zelo", "Řízek"]
    const womanImageLink = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0273%2F8080%2F9781%2Fproducts%2FScreenShot2022-01-20at6.11.10PM.png%3Fv%3D1642720307&f=1&nofb=1&ipt=46b91802783d2cf78690c12c853253440b23830882f9846f098c2b9aaa3ea7f0"

    const handleWomen = () => {
        const woman = women[Math.floor(Math.random() * women.length)]
        const distance = Math.floor(Math.random() * 4) + 1
        toast.message(
            <div className="flex gap-4">
                <img className="object-cover aspect-square h-10 w-auto" src={ womanImageLink } alt="woman" />
                <p>{`${woman} is waiting ${distance} meters away from you`}</p>
            </div>,
            {
                position: "top-center",
                action: {
                    label: "OK",
                    onClick: handleWomen,
                },
            }
        )
    }

    return (
        <Card className="w-full max-w-sm justify-center ms-auto me-auto">
            <CardContent>
                <CardTitle>Women button</CardTitle>
                <CardDescription>so cool</CardDescription>
            </CardContent>
            <CardFooter className="grid gap-2">
                <Button className="w-full" onClick={ handleWomen }>Click me</Button>
            </CardFooter>
        </Card>
    )
}