import { ArrowRight, Bot, Cpu, MonitorSmartphone, Repeat, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="relative pt-28 pb-24 md:pt-40 md:pb-40 overflow-hidden bg-primary-900">
                {/* Decorative background elements (Synchronized with Contact section) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-[float_10s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-bold mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                        地域企業のためのAI・デジタル支援パートナー
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white font-sans leading-[1.2]">
                        地域企業の成長を<br/>
                        <span className="text-primary-300">Webと集客とAI活用で支える</span>
                    </h1>

                    <p className="text-base md:text-xl text-white/90 mb-12 max-w-3xl leading-relaxed font-sans font-medium">
                        Webサイト制作、デジタルマーケティング、AI導入支援まで。<br className="hidden md:block"/>
                        事業課題に合わせて、成果につながる施策を一緒に設計・実行します。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                        <Link href={`/${lang}/contact`} className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white rounded-md font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-lg">
                            無料相談する <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href={`/${lang}/services`} className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-white hover:bg-zinc-100 text-primary-900 rounded-md font-bold transition-all shadow-sm w-full sm:w-auto text-lg">
                            サービスを見る
                        </Link>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-900 font-sans tracking-tight">こんなお悩みはありませんか？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-md flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                                <MonitorSmartphone className="w-7 h-7" />
                            </div>
                            <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                                「Webサイトが古く、<br/>会社の魅力が伝わらない…」
                            </p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-md flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-7 h-7" />
                            </div>
                            <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                                「集客や採用に<br/>デジタルを活用しきれていない…」
                            </p>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-md flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                                <Bot className="w-7 h-7" />
                            </div>
                            <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                                「AIやITツールを導入したいが、<br/>詳しい人材がいない…」
                            </p>
                        </div>
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

            {/* Features (Why Choose Us) Section - Sticky Scroll Layout */}
            <section id="features" className="py-24 bg-white border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
                        {/* Left Column: Sticky Title Area */}
                        <div className="w-full md:w-1/3 md:sticky md:top-32">
                            <div className="border-b-4 border-primary-600 w-12 mb-6"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-sans leading-tight mb-6">
                                なぜ、Fabcomが<br/>選ばれるのか
                            </h2>
                            <p className="text-zinc-500 text-base leading-relaxed font-sans">
                                AI × 伴走で、ビジネスの成長を最短距離で支援します。
                            </p>
                            <div className="mt-10 hidden md:block">
                                <Link href={`/${lang}/about`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-800 transition-colors gap-1">
                                    Fabcomについて見る <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Cards */}
                        <div className="w-full md:w-2/3 flex flex-col gap-10">
                            {/* Card 1 */}
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-zinc-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <div className="absolute top-6 right-6 text-5xl font-bold text-primary-100 select-none leading-none">01</div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-zinc-900 font-sans">AI活用で、高品質を身近に</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                        最新のAI技術をプロセスに組み込むことで大幅に効率化。限られた予算でも、妥協のない高品質な成果をスピーディに提供します。
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-zinc-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <div className="absolute top-6 right-6 text-5xl font-bold text-primary-100 select-none leading-none">02</div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-zinc-900 font-sans">専門家による、完全伴走型サポート</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                        作って終わりではありません。経験豊富な専門家がヒアリングから実行、改善までを一貫して担当し、貴社の成功を直接サポートします。
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-zinc-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <div className="absolute top-6 right-6 text-5xl font-bold text-primary-100 select-none leading-none">03</div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <Repeat className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-zinc-900 font-sans">集客から業務効率化までワンストップ</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                        Web制作からマーケティング、DX推進まで。複数の業者に依頼する手間を省き、ビジネスの成長を包括的に支援します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile only: Fabcomについて見る link */}
                    <div className="mt-12 text-center md:hidden">
                        <Link href={`/${lang}/about`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-800 transition-colors gap-1">
                            Fabcomについて見る <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Workflow Section - Vertical Timeline */}
            <section id="workflow" className="py-24 bg-slate-50 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">ご相談から導入までの流れ</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-zinc-200"></div>

                        <div className="flex flex-col gap-12 relative z-10">
                            {[
                                { title: "無料ヒアリング・課題抽出", desc: "まずは貴社の現状や目標、抱えているお悩みをお聞かせください。" },
                                { title: "戦略・プランのご提案", desc: "お伺いした内容をもとに、最短で成果を出すための最適なプランをご提示します。" },
                                { title: "ご契約", desc: "提案内容にご納得いただけましたら、正式にご契約となります。" },
                                { title: "制作・施策の実行", desc: "少数精鋭のチームが、責任を持ってスピーディにプロジェクトを進行します。" },
                                { title: "運用サポート・改善", desc: "データに基づいた効果測定と改善を繰り返し、持続的な成長をサポートします。" }
                            ].map((step, index) => (
                                <div key={index} className="flex items-start gap-6 md:gap-8 group">
                                    {/* Node */}
                                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm md:text-lg shadow-lg z-10 ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                                        0{index + 1}
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 pt-1 md:pt-2 pb-2">
                                        <h3 className="text-lg md:text-xl font-bold mb-2 text-zinc-900 font-sans">{step.title}</h3>
                                        <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-sans">{step.desc}</p>
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

            {/* About Us Section */}
            <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-100 relative">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">About Us</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-10"></div>

                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 font-sans leading-relaxed mb-6">
                            テクノロジーの力で、<br/>地域企業をエンパワーメントする
                        </h3>
                        <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-sans max-w-3xl mx-auto">
                            私たちは、最新のデジタル技術を誰もが活用できる形に翻訳し、地域経済を支える企業様のビジネスを加速させるパートナーです。
                        </p>
                    </div>

                    {/* Member Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
                        {/* Member 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 text-center">
                            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-light">👤</div>
                            </div>
                            <h4 className="text-xl font-bold text-zinc-900 font-sans">ぽこ</h4>
                            <p className="text-primary-600 text-sm font-medium mt-1 mb-5">Co-Founder / AI・デジタルストラテジスト</p>
                            <p className="text-gray-600 text-sm leading-relaxed font-sans text-left">
                                デジタルマーケティングとAI活用の領域で培った経験を活かし、地域企業のビジネス課題に最適なデジタル戦略を設計。テクノロジーを「分かりやすく」届けることをモットーに、クライアントの成長を伴走型で支援しています。
                            </p>
                        </div>

                        {/* Member 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 text-center">
                            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-light">👤</div>
                            </div>
                            <h4 className="text-xl font-bold text-zinc-900 font-sans">Member Name</h4>
                            <p className="text-primary-600 text-sm font-medium mt-1 mb-5">Co-Founder / テクニカルディレクター</p>
                            <p className="text-gray-600 text-sm leading-relaxed font-sans text-left">
                                Webアプリケーション開発とインフラ設計を専門とし、堅牢でスケーラブルなシステム構築を担当。最新技術のキャッチアップと実務への落とし込みを得意とし、クライアントのDX推進をテクニカル面から支えています。
                            </p>
                        </div>
                    </div>

                    {/* Link to About page */}
                    <div className="mt-12 text-center">
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
