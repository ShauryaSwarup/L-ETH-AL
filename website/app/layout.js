"use client"; // Place "use client" directive at the top

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useRouter } from "next/navigation"; // Import from next/navigation instead of next/router

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const router = useRouter();
    const currentPage = router.pathname;
    console.log(currentPage)
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    <Breadcrumbs currentPage={currentPage} />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
