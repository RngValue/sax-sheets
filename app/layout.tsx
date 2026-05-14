import "./styles.css"
import { Unkempt } from "next/font/google";

const roboto = Unkempt({ weight: ["400", "700"] })

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html style={ roboto.style }>
            <title>lol</title>
            <body>
                {children}
            </body>
        </html>
    )
}