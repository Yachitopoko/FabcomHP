"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import Image from "next/image";

export default function Header({ lang }: { lang: Locale }) {
    const pathname = usePathname();

    const redirectedPathName = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href={`/${lang}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image src="/images/Fabcomlogo.png" alt="Fabcom Logo" width={32} height={32} className="object-contain" priority />
                    <span className="text-2xl font-bold tracking-tight text-zinc-900">
                        Fabcom
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
                    <Link href={`/${lang}/services`} className="hover:text-primary-600 transition-colors">Services</Link>
                    <Link href={`/${lang}/about`} className="hover:text-primary-600 transition-colors">About</Link>

                    <div className="flex gap-2 text-xs text-zinc-400 border-l border-zinc-200 pl-6 ml-2">
                        {i18n.locales.map((locale) => (
                            <Link
                                key={locale}
                                href={redirectedPathName(locale)}
                                className={`uppercase hover:text-zinc-900 transition-colors ${lang === locale ? 'text-zinc-900 font-bold' : ''}`}
                            >
                                {locale}
                            </Link>
                        ))}
                    </div>

                    <Link href={`/${lang}/contact`} className="bg-primary-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-sm">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
