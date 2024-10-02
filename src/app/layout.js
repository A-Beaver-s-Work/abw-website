import "./globals.css";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased min-h-screen flex flex-col max-w-screen`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export function Layout({ children }) {
    return (
        <div className={`antialiased min-h-screen flex flex-col max-w-screen`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}