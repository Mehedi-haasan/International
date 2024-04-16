import { useEffect } from 'react';
import Header from "@/Shared/Header/Header";
import Footer from "@/Shared/Footer/Footer";

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {


    return (
        <html lang={locale}>
            <head>
                {/* Place any head elements here */}
            </head>
            <body>
                <div>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
