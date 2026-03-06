import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { i18n, type Locale } from "@/i18n-config";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fabcom | ビジネスモデルを次の次元へ",
    description: "Fabcomは、革新的なビジネスモデル構築と収益化を支援するプロフェッショナルチームです。顧客リストを『資産』に変える次世代システムを提供します。",
};

// Generate static params for existing locales
export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <html lang={lang}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-primary-500/30`}>
                <Header lang={lang} />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer lang={lang} />
            </body>
        </html>
    );
}
