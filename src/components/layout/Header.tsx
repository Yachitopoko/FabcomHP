"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { i18n, type Locale } from "@/i18n-config";
import Image from "next/image";

export default function Header({ lang }: { lang: Locale }) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const redirectedPathName = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <header
            className={`fixed z-50 left-0 right-0 transition-all duration-300 ease-in-out ${scrolled
                ? "top-0 mx-0 px-0"
                : "top-4 mx-4 md:mx-8 lg:mx-12"
                }`}
        >
            <nav
                className={`mx-auto transition-all duration-300 ease-in-out ${scrolled
                    ? "max-w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-zinc-100 rounded-none"
                    : "max-w-6xl bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                    }`}
            >
                <div
                    className={`flex items-center justify-between transition-all duration-300 ${scrolled
                        ? "max-w-7xl mx-auto px-6 lg:px-8 h-16"
                        : "px-6 lg:px-8 h-16"
                        }`}
                >
                    {/* Logo */}
                    <Link href={`/${lang}`} className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
                        <Image
                            src="/images/Fabcomlogofull.png"
                            alt="Fabcom"
                            width={240}
                            height={40}
                            className="object-contain w-28 md:w-36 h-auto"
                            priority
                        />
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {/* Nav Links */}
                        <div className="flex items-center gap-1 text-[13px] font-medium text-zinc-600">
                            <Link
                                href={`/${lang}/services`}
                                className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                            >
                                Services
                            </Link>
                            <Link
                                href={`/${lang}/about`}
                                className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                            >
                                About
                            </Link>
                            <Link
                                href={`/${lang}/features`}
                                className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                            >
                                Features
                            </Link>
                            <Link
                                href={`/${lang}/workflow`}
                                className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                            >
                                Workflow
                            </Link>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-5 bg-zinc-200 mx-2" />

                        {/* Language Switcher */}
                        <div className="flex items-center gap-0.5 text-xs text-zinc-400">
                            {i18n.locales.map((locale) => (
                                <Link
                                    key={locale}
                                    href={redirectedPathName(locale)}
                                    className={`px-2 py-1.5 rounded-md uppercase transition-all ${lang === locale
                                        ? "text-zinc-900 font-semibold bg-zinc-50"
                                        : "hover:text-zinc-700 hover:bg-zinc-50"
                                        }`}
                                >
                                    {locale}
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-px h-5 bg-zinc-200 mx-2" />

                        {/* Contact CTA */}
                        <Link
                            href={`/${lang}/contact`}
                            className="bg-primary-600 text-white text-[13px] px-5 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-sm"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
