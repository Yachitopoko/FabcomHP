"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";

export default function Header({ lang }: { lang: Locale }) {
    const pathname = usePathname();

    const redirectedPathName = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <nav className="fixed w-full z-50 glass border-b border-white/5 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href={`/${lang}`} className="text-2xl font-bold tracking-tighter text-white">
                    FAB<span className="text-primary-500">COM</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
                    <Link href={`/${lang}/services`} className="hover:text-white transition-colors">Services</Link>
                    <Link href={`/${lang}/about`} className="hover:text-white transition-colors">About</Link>

                    <div className="flex gap-2 text-xs text-zinc-500 border-l border-white/10 pl-6 ml-2">
                        {i18n.locales.map((locale) => (
                            <Link
                                key={locale}
                                href={redirectedPathName(locale)}
                                className={`uppercase hover:text-white transition-colors ${lang === locale ? 'text-white font-bold' : ''}`}
                            >
                                {locale}
                            </Link>
                        ))}
                    </div>

                    <Link href={`/${lang}/contact`} className="bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
