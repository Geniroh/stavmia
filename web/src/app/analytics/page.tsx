import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Analytics() {
    return (
        <>
            <Navbar />
            <div>
                <div className="h-[120px] flex items-center justify-center w-full text-xl">
                    <div>
                        <Link href="/"><span className="text-mygray">Back to Home</span></Link>
                        <span className="mx-1">/</span>
                        <span>Analytics</span>
                    </div>
                </div>
            </div>
        </>
    )
}