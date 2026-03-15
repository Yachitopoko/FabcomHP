import { Locale } from "@/i18n-config";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default async function CreativeServicePage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-primary-900">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-[float_10s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white font-sans">
                        Creative
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-sans font-medium">
                        ブランド価値を最大化し、成果を生み出すWeb・LP制作
                    </p>
                </div>
            </section>

            {/* Service Detail Block 1: Web Production */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 font-sans">
                                    Webサイト制作・リニューアル
                                </h2>
                                <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                                    企業の「顔」となり、信用を向上させる高品質なコーポレートサイトを構築します。
                                    単なるデザインの美しさだけでなく、ビジネス成長を支援する戦略的なWebサイトを提供します。
                                </p>
                            </div>
                            
                            <ul className="space-y-4">
                                {[
                                    "戦略的UI/UX設計",
                                    "レスポンシブ完全対応",
                                    "CMS（更新システム）導入"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-zinc-100 rounded-2xl shadow-xl border border-zinc-200 overflow-hidden flex items-center justify-center text-zinc-400 font-medium">
                                Web Production Image Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Detail Block 2: LP Production */}
            <section className="py-24 bg-gray-50 border-y border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="aspect-video bg-zinc-100 rounded-2xl shadow-xl border border-zinc-200 overflow-hidden flex items-center justify-center text-zinc-400 font-medium">
                                LP Production Image Placeholder
                            </div>
                        </div>
                        <div className="space-y-8 order-1 md:order-2">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 font-sans">
                                    LP制作・運用（LPO含む）
                                </h2>
                                <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                                    ターゲットの心理に寄り添い、コンバージョン（CV）を最大化するランディングページを制作します。
                                    徹底した分析と改善サイクルにより、広告効果を最大化します。
                                </p>
                            </div>
                            
                            <ul className="space-y-4">
                                {[
                                    "徹底した競合・ターゲット分析",
                                    "CVRを高めるデザイン設計",
                                    "公開後のLPO（ABテスト・改善）"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section id="contact" className="py-24 bg-primary-900 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-[float_10s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white font-sans leading-tight">
                        ビジネスの可能性を、<br className="md:hidden"/>一緒に広げませんか？
                    </h2>
                    <p className="text-primary-100 text-lg md:text-xl mb-12 leading-relaxed font-sans max-w-2xl mx-auto">
                        「何から始めればいいかわからない」といったご相談でも構いません。<br className="hidden md:block"/>
                        まずは無料オンライン相談にて、お気軽にお話ししましょう。
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-900 hover:bg-zinc-50 rounded-full font-bold text-lg transition-all shadow-lg border-2 border-transparent">
                            無料相談する <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={`/${lang}/services`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full font-bold text-lg transition-all shadow-lg">
                            サービス一覧を見る <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
