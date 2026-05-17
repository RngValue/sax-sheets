import "@/app/styles.css"
import { Roboto_Slab, DM_Sans } from "next/font/google"
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const dmSansHeading = DM_Sans({ subsets: ['latin'], variable: '--font-heading' });

const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-serif' });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cn("font-serif", robotoSlab.variable, dmSansHeading.variable)}>
            <title>lol</title>
            <body>
                <TooltipProvider>
                    { children }
                </TooltipProvider>
            </body>
        </html>
    )
}