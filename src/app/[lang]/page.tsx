import { ArrowRight, Bot, Cpu, MonitorSmartphone, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
                {/* Abstract Background Animation */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-50/50 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/30 blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
                    
                    {/* SVG Geometric shapes */}
                    <svg className="absolute top-[20%] right-[10%] w-64 h-64 text-primary-100/50 animate-[spin_30s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18.1,97.7,-2.8C97.4,12.5,90.2,27.7,80,40.1C69.8,52.5,56.6,62.1,42.4,68.9C28.2,75.7,13,79.7,-2.1,83C-17.2,86.3,-32.1,88.9,-44.8,82.4C-57.5,75.9,-68.1,60.3,-75.4,44.1C-82.7,27.9,-86.8,11.1,-86.3,-5.4C-85.8,-21.9,-80.7,-38.1,-71.3,-51.2C-61.9,-64.3,-48.2,-74.3,-33.6,-80.8C-19,-87.3,-3.5,-90.3,11.1,-87.3C25.7,-84.3,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="absolute bottom-[20%] right-[30%] w-48 h-48 text-primary-200/40 animate-[spin_40s_linear_infinite_reverse]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M39.9,-65.7C54.1,-58.5,69.5,-52.1,79.5,-40.5C89.5,-28.9,94.1,-12.1,91.7,3.9C89.3,19.9,79.9,35.1,68.1,47.2C56.3,59.3,42.1,68.3,26.9,73.5C11.7,78.7,-4.5,80.1,-20.1,76.5C-35.7,72.9,-50.7,64.3,-62.7,52.3C-74.7,40.3,-83.7,24.9,-85.5,9.1C-87.3,-6.7,-81.9,-22.9,-72.5,-35.5C-63.1,-48.1,-49.7,-57.1,-35.6,-64.4C-21.5,-71.7,-6.7,-77.3,7,-81.2C20.7,-85.1,33.5,-87.3,39.9,-65.7Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start lg:items-center text-left lg:text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-bold mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        地域企業のためのAI実装パートナー
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-zinc-900 font-sans">
                        AIとデジタルの力で、<br className="hidden md:block" />
                        地域のビジネスに「<span className="text-primary-600">次の一手</span>」を。
                    </h1>

                    <p className="text-base md:text-lg text-zinc-600 mb-10 max-w-3xl leading-relaxed font-sans font-medium">
                        最新のAIテクノロジーとデジタルマーケティングで、企業が抱える「集客」と「業務効率化」の課題を解決します。技術をただ導入するだけでなく、ビジネスの成長に伴走するパートナーとして、最適な次の一手をご提案します。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                        <Link href={`/${lang}/contact`} className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-lg">
                            無料相談する <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="#services" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary-600 hover:bg-primary-50 text-primary-600 rounded-md font-bold transition-all shadow-sm w-full sm:w-auto text-lg">
                            サービスを見る
                        </a>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-20 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-zinc-900 font-sans">こんなお悩みはありませんか？</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex-1 flex items-center justify-center min-h-[100px]">
                            <p className="text-zinc-700 font-bold leading-relaxed">「Webサイトが古く、<br/>会社の魅力が伝わらない…」</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex-1 flex items-center justify-center min-h-[100px]">
                            <p className="text-zinc-700 font-bold leading-relaxed">「集客や採用に<br/>デジタルを活用しきれていない…」</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex-1 flex items-center justify-center min-h-[100px]">
                            <p className="text-zinc-700 font-bold leading-relaxed">「AIやITツールを導入したいが、<br/>詳しい人材がいない…」</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {/* Features (Why Choose Us) Section */}
            <section id="features" className="py-24 bg-white border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">なぜ、Fabcomが選ばれるのか</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Infographic Layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative">
                        
                        {/* Center Graphic for Desktop (visible on Lg layout, or stacked on mobile) */}
                        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full bg-white shadow-xl border-4 border-primary-50 flex flex-col items-center justify-center z-10 shrink-0 relative">
                            <div className="absolute -inset-4 border-2 border-primary-100 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
                            <div className="text-primary-600 mb-2">
                                <Bot className="w-12 h-12 md:w-16 md:h-16" />
                            </div>
                            <div className="text-center font-bold text-zinc-900 text-lg md:text-xl">
                                AI <span className="text-primary-400">×</span> 伴走
                            </div>
                            <div className="text-xs text-zinc-500 mt-1 font-medium">Fabcomの強み</div>
                        </div>

                        {/* Connecting Lines for Desktop (hidden on mobile) */}
                        <div className="hidden lg:block absolute top-[40%] left-[20%] right-[20%] h-px bg-primary-200 -z-0"></div>
                        <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 h-[300px] w-px bg-primary-200 -z-0"></div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 w-full z-10 relative mt-8 lg:mt-0">
                            {/* Strength 1 */}
                            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm border border-zinc-100 relative group lg:-translate-y-16">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans leading-tight">AI活用による<br/>スピードとコスト削減</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                    最新AI技術を制作プロセスに組み込み、限られたご予算でも高品質かつスピーディな提供を実現します。
                                </p>
                            </div>

                            {/* Strength 2 */}
                            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm border border-zinc-100 relative group lg:translate-y-48">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans leading-tight">少数精鋭の<br/>「完全伴走型」サポート</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                    専門家が直接ヒアリングから実行までを一貫して担当し、認識のズレを防ぎ想いを形にします。
                                </p>
                            </div>

                            {/* Strength 3 */}
                            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm border border-zinc-100 relative group lg:-translate-y-16">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans leading-tight">集客と効率化の<br/>ワンストップ支援</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                    作るだけで終わらず、Web集客からIT化・DX推進による業務効率化まで包括的に支援します。
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-20 text-center">
                        <Link href={`/${lang}/about`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-800 transition-colors gap-1">
                            Fabcomについて見る <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">提供サービス</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <MonitorSmartphone className="w-12 h-12 text-primary-600 mb-6" />
                            <h3 className="text-xl font-bold text-zinc-900 font-sans mb-4">Webサイト制作・<br/>リニューアル</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed font-sans mb-8 flex-grow">
                                企業の「顔」となり、信用を向上させる高品質なWebサイトを構築します。
                            </p>
                            <Link href={`/${lang}/services`} className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white border border-primary-200 text-primary-600 rounded-md font-bold hover:bg-primary-50 transition-colors">
                                詳細を見る <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <TrendingUp className="w-12 h-12 text-primary-600 mb-6" />
                            <h3 className="text-xl font-bold text-zinc-900 font-sans mb-4">デジタル集客・<br/>マーケティング支援</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed font-sans mb-8 flex-grow">
                                SNS運用や広告など、貴社に最適なマーケティング戦略を立案・実行します。
                            </p>
                            <Link href={`/${lang}/services`} className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white border border-primary-200 text-primary-600 rounded-md font-bold hover:bg-primary-50 transition-colors">
                                詳細を見る <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <Cpu className="w-12 h-12 text-primary-600 mb-6" />
                            <h3 className="text-xl font-bold text-zinc-900 font-sans mb-4">AI・DX<br/>導入サポート</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed font-sans mb-8 flex-grow">
                                生成AIの活用や業務効率化ツールの導入をサポートし、生産性を向上させます。
                            </p>
                            <Link href={`/${lang}/services`} className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white border border-primary-200 text-primary-600 rounded-md font-bold hover:bg-primary-50 transition-colors">
                                詳細を見る <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Link href={`/${lang}/services`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-800 transition-colors gap-1">
                            サービス一覧を見る <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-24 bg-white border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">ご相談から導入までの流れ</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="flex flex-col gap-8 relative z-10">
                            {[
                                { title: "無料ヒアリング・課題抽出", desc: "まずは貴社の現状や目標、抱えているお悩みをお聞かせください。" },
                                { title: "戦略・プランのご提案", desc: "お伺いした内容をもとに、最短で成果を出すための最適なプランをご提示します。" },
                                { title: "ご契約", desc: "提案内容にご納得いただけましたら、正式にご契約となります。" },
                                { title: "制作・施策の実行", desc: "少数精鋭のチームが、責任を持ってスピーディにプロジェクトを進行します。" },
                                { title: "運用サポート・改善", desc: "データに基づいた効果測定と改善を繰り返し、持続的な成長をサポートします。" }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-row items-center gap-6 relative group bg-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:-translate-y-1">
                                    <div className="w-16 h-16 shrink-0 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold shadow-sm z-10">
                                        0{index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold mb-2 text-zinc-900 font-sans">{step.title}</h3>
                                        <p className="text-sm text-zinc-600 leading-relaxed font-sans">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-lg">
                            まずは相談する <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-100 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 font-sans">会社概要</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>
                    
                    <div className="bg-white border border-zinc-100 rounded-3xl p-10 md:p-16 shadow-sm relative overflow-hidden text-center">
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                         <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 font-sans leading-relaxed">
                             テクノロジーの力で、<br/>地域企業をエンパワーメントする
                         </h3>
                         <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12 font-sans font-medium">
                             私たちは、最新のデジタル技術を誰もが活用できる形に翻訳し、地域経済を支える企業様のビジネスを加速させるパートナーです。
                         </p>

                         <Link href={`/${lang}/about`} className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-full font-bold transition-all shadow-sm">
                             会社情報を見る <ArrowRight className="w-4 h-4" />
                         </Link>
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
