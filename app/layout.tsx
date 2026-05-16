import "@/app/styles.css"
import { Unkempt } from "next/font/google"

const fontUnkept = Unkempt({ weight: ["400", "700"] })

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html style={ fontUnkept.style }>
            <title>lol</title>
            <body>
                {children}
            </body>
        </html>
    )
}