import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export default function Cta({ lang }: { lang: Locale }) {
    return (
        <section className="py-24 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-primary-900/20"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">ビジネスを次の次元へ</h2>
                <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    現状の課題をオンラインでヒアリングし、最適なソリューションをご提案します。まずは無料相談をご利用ください。
                </p>
                <Link
                    href={`/${lang}/contact`}
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105"
                >
                    今すぐミーティングを予約する <ChevronRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
