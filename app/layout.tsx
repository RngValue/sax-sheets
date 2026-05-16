import "@/app/styles.css"
import { Unkempt, Roboto_Slab, DM_Sans } from "next/font/google"
import { cn } from "@/lib/utils";

const dmSansHeading = DM_Sans({subsets:['latin'],variable:'--font-heading'});

const robotoSlab = Roboto_Slab({subsets:['latin'],variable:'--font-serif'});

const fontUnkept = Unkempt({ weight: ["400", "700"] })

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cn("font-serif", robotoSlab.variable, dmSansHeading.variable)}>
            <title>lol</title>
            <body>
                { children }
            </body>
        </html>
    )
}