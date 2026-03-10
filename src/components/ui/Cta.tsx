import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export default function Cta({ lang }: { lang: Locale }) {
    return (
        <section className="py-24 relative overflow-hidden bg-primary-50 border-t border-primary-100">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">ビジネスを次の次元へ</h2>
                <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    現状の課題をオンラインでヒアリングし、最適なソリューションをご提案します。まずは無料相談をご利用ください。
                </p>
                <Link
                    href={`/${lang}/contact`}
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary-600 text-white rounded-md font-bold text-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                >
                    今すぐミーティングを予約する <ChevronRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
