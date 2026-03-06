import Link from "next/link";
import { Locale } from "@/i18n-config";

export default function Footer({ lang }: { lang: Locale }) {
    return (
        <footer className="py-12 border-t border-white/10 bg-black text-zinc-500 text-sm text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-xl font-bold tracking-tighter text-white">
                    FAB<span className="text-primary-500">COM</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <Link href={`/${lang}`} className="hover:text-white transition-colors">Home</Link>
                    <Link href={`/${lang}/services`} className="hover:text-white transition-colors">Services</Link>
                    <Link href={`/${lang}/about`} className="hover:text-white transition-colors">About</Link>
                    <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs">
                    <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">Privacy Policy</Link>
                    <span>&copy; {new Date().getFullYear()} Fabcom Inc.</span>
                </div>
            </div>
        </footer>
    );
}
