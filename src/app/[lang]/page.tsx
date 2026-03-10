import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import Cta from "@/components/ui/Cta";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    // The Top page acts as the entrypoint highlighting services and features.
    // Animations and components from the original request are kept here.
    const features = [
        {
            icon: <Users className="w-6 h-6 text-primary-600" />,
            title: "4層リテンションシステム",
            description: "顧客の離脱を防ぎ、LTV（生涯顧客価値）を最大化する独自の4層アプローチを提供。"
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-accent" />,
            title: "データドリブンな意思決定",
            description: "直感に頼らない、データを基盤にした確実なビジネスグロースを実現します。"
        },
        {
            icon: <Zap className="w-6 h-6 text-primary-600" />,
            title: "マーケティング自動化",
            description: "最新のテクノロジーを活用し、リード獲得から育成までのプロセスを自動化。"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-accent" />,
            title: "持続可能な事業構造",
            description: "広告費に依存しない、顧客リストを『資産』に変える堅牢なビジネスモデルの構築。"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-50)_0%,transparent_40%)]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        次世代のビジネスモデル構築
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-zinc-900">
                        顧客リストを「資産」に変え、<br className="hidden md:block" />
                        <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">圧倒的な収益基盤</span>を創る。
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        広告費を浪費する時代は終わりました。Fabcomは、独自の「4層リテンションシステム」で、あなたのビジネスを持続可能な高収益モデルへと進化させます。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                        <Link href={`/${lang}/contact`} className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
                            無料の戦略セッションを予約 <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href={`/${lang}/services`} className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-700 rounded-md font-medium border border-zinc-200 transition-colors w-full sm:w-auto">
                            サービス詳細を見る
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-zinc-50 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Fabcomが選ばれる理由</h2>
                        <p className="text-zinc-600">最新のアプローチと確かな実績で、あなたのビジネスの潜在能力を最大限に引き出します。</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-md border border-zinc-200 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-900">{feature.title}</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cta component is unified for all pages */}
            <Cta lang={lang} />
        </>
    );
}
