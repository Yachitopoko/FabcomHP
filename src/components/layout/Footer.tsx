import Link from "next/link";
import { Locale } from "@/i18n-config";
import Image from "next/image";

export default function Footer({ lang }: { lang: Locale }) {
    return (
        <footer className="py-12 border-t border-zinc-200 bg-zinc-50 text-zinc-500 text-sm text-center mt-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 opacity-80 grayscale">
                    <Image src="/images/Fabcomlogo.png" alt="Fabcom Logo" width={24} height={24} className="object-contain" />
                    <span className="text-lg font-bold tracking-tight text-zinc-800">Fabcom</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 font-medium">
                    <Link href={`/${lang}`} className="hover:text-zinc-900 transition-colors">Home</Link>
                    <Link href={`/${lang}/services`} className="hover:text-zinc-900 transition-colors">Services</Link>
                    <Link href={`/${lang}/about`} className="hover:text-zinc-900 transition-colors">About</Link>
                    <Link href={`/${lang}/contact`} className="hover:text-zinc-900 transition-colors">Contact</Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-400">
                    <Link href={`/${lang}/privacy-policy`} className="hover:text-zinc-600 transition-colors">Privacy Policy</Link>
                    <span>&copy; {new Date().getFullYear()} Fabcom Inc.</span>
                </div>
            </div>
        </footer>
    );
}
