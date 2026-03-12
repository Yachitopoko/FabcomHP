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
                        人材不足、集客の悩み、業務の非効率。中小企業が抱えるあらゆる課題を、最新のAIテクノロジーとデジタルマーケティングで解決します。圧倒的なスピードと柔軟性で、あなたのビジネスの成長を強力に後押しする。それがFabcomの使命です。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href={`/${lang}/contact`} className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-lg">
                            無料相談・お問い合わせはこちら <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-zinc-50 border-t border-zinc-100">
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
                            <div className="text-xs text-zinc-500 mt-1 font-medium">Fabcomのコア</div>
                        </div>

                        {/* Connecting Lines for Desktop (hidden on mobile) */}
                        <div className="hidden lg:block absolute top-[40%] left-[20%] right-[20%] h-px bg-primary-200 -z-0"></div>
                        <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 h-[300px] w-px bg-primary-200 -z-0"></div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 w-full z-10 relative mt-8 lg:mt-0">
                            {/* Strength 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 relative group hover:border-primary-200 transition-colors lg:-translate-y-16">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">1</div>
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans leading-tight">【AIフル活用による圧倒的なスピードとコストパフォーマンス】</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                    最新のAIツールを開発・運用プロセスに組み込むことで、従来は多大な時間と費用がかかっていた施策を、高品質かつスピーディに提供します。限られた予算でも最大の成果を生み出します。
                                </p>
                            </div>

                            {/* Strength 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 relative group hover:border-primary-200 transition-colors lg:translate-y-48">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">2</div>
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans leading-tight">【少数精鋭だからできる「完全伴走型」のサポート】</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                    営業と制作で担当者が変わる大手代理店とは異なり、代表を含む専門家が直接ヒアリングから実行までを一貫して担当。認識のズレを防ぎ、経営者の想いをダイレクトに形にします。
                                </p>
                            </div>

                            {/* Strength 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 relative group hover:border-primary-200 transition-colors lg:-translate-y-16">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">3</div>
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans leading-tight">【「作るだけ」で終わらない。集客と業務効率化のワンストップ支援】</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                                    美しいホームページを作ることはゴールではありません。見込み客を集めるWeb集客（新規獲得・リピート促進）から、社内のIT化・DX推進による業務効率化まで、企業の利益を最大化する包括的な支援を行います。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">提供サービス</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="group relative h-80 rounded-xl overflow-hidden cursor-default shadow-md bg-zinc-50 border border-zinc-100 transition-all duration-500 hover:shadow-2xl">
                            {/* Default State */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 group-hover:opacity-0 bg-white">
                                <MonitorSmartphone className="w-16 h-16 text-primary-600 mb-6" />
                                <h3 className="text-xl font-bold text-zinc-900 font-sans text-center">Webサイト制作・<br/>リニューアル</h3>
                            </div>
                            
                            {/* Hover State */}
                            <div className="absolute inset-0 bg-primary-600 p-8 flex flex-col items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <MonitorSmartphone className="w-10 h-10 text-white/80 mb-4 shrink-0" />
                                <h3 className="text-lg font-bold mb-3 text-white font-sans text-center">Webサイト制作・リニューアル</h3>
                                <div className="w-10 h-px bg-white/30 mb-4 shrink-0"></div>
                                <p className="text-sm text-primary-50 leading-relaxed font-sans text-center">
                                    企業の「顔」となり、信用を向上させる高品質なWebサイトを構築。AIを活用した迅速な制作プロセスで、集客に強いサイトを実現します。
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative h-80 rounded-xl overflow-hidden cursor-default shadow-md bg-zinc-50 border border-zinc-100 transition-all duration-500 hover:shadow-2xl">
                            {/* Default State */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 group-hover:opacity-0 bg-white">
                                <TrendingUp className="w-16 h-16 text-primary-600 mb-6" />
                                <h3 className="text-xl font-bold text-zinc-900 font-sans text-center">デジタル集客・<br/>マーケティング支援</h3>
                            </div>
                            
                            {/* Hover State */}
                            <div className="absolute inset-0 bg-primary-600 p-8 flex flex-col items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <TrendingUp className="w-10 h-10 text-white/80 mb-4 shrink-0" />
                                <h3 className="text-lg font-bold mb-3 text-white font-sans text-center">デジタル集客・マーケティング支援</h3>
                                <div className="w-10 h-px bg-white/30 mb-4 shrink-0"></div>
                                <p className="text-sm text-primary-50 leading-relaxed font-sans text-center">
                                    新規顧客の獲得から、既存顧客のファン化（リピート増加）まで。SNS運用、広告運用、リテンション施策など、貴社に最適なマーケティング戦略を立案・実行します。
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative h-80 rounded-xl overflow-hidden cursor-default shadow-md bg-zinc-50 border border-zinc-100 transition-all duration-500 hover:shadow-2xl">
                            {/* Default State */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 group-hover:opacity-0 bg-white">
                                <Cpu className="w-16 h-16 text-primary-600 mb-6" />
                                <h3 className="text-xl font-bold text-zinc-900 font-sans text-center">AI・DX<br/>導入サポート</h3>
                            </div>
                            
                            {/* Hover State */}
                            <div className="absolute inset-0 bg-primary-600 p-8 flex flex-col items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <Cpu className="w-10 h-10 text-white/80 mb-4 shrink-0" />
                                <h3 className="text-lg font-bold mb-3 text-white font-sans text-center">AI・DX導入サポート</h3>
                                <div className="w-10 h-px bg-white/30 mb-4 shrink-0"></div>
                                <p className="text-sm text-primary-50 leading-relaxed font-sans text-center">
                                    「ITに詳しい人材がいない」という企業様向けに、生成AIの活用支援や、業務効率化ツールの導入をサポート。生産性を劇的に向上させます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-24 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 font-sans">ご相談から導入までの流れ</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Horizontal Line for Desktop */}
                        <div className="hidden md:block absolute top-[48px] left-0 w-full h-[2px] bg-primary-100"></div>
                        
                        <div className="flex flex-col md:flex-row gap-12 md:gap-4 justify-between relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 md:flex-1 relative group">
                                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-600 text-xl md:text-2xl font-bold shadow-sm group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors z-10">
                                    01
                                </div>
                                {/* Vertical line for mobile */}
                                <div className="md:hidden absolute left-[38px] top-[80px] h-[calc(100%+24px)] w-[2px] bg-primary-100 -z-10"></div>
                                
                                <div className="flex-1 md:text-center mt-2 md:mt-0 pt-2 md:pt-0">
                                    <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans">[無料ヒアリング・課題の抽出]</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                                        まずは貴社の現状や目標、抱えているお悩みをお聞かせください。
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 md:flex-1 relative group pt-4 md:pt-0">
                                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-600 text-xl md:text-2xl font-bold shadow-sm group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors z-10">
                                    02
                                </div>
                                {/* Vertical line for mobile */}
                                <div className="md:hidden absolute left-[38px] top-[80px] h-[calc(100%+24px)] w-[2px] bg-primary-100 -z-10"></div>
                                
                                <div className="flex-1 md:text-center mt-2 md:mt-0 pt-2 md:pt-0">
                                    <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans">[戦略・プランのご提案]</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                                        AIツールやデジタル施策を組み合わせた、最短で成果を出すための最適なプランをご提示します。
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 md:flex-1 relative group pt-4 md:pt-0">
                                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-600 text-xl md:text-2xl font-bold shadow-sm group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors z-10">
                                    03
                                </div>
                                {/* Vertical line for mobile */}
                                <div className="md:hidden absolute left-[38px] top-[80px] h-[calc(100%+24px)] w-[2px] bg-primary-100 -z-10"></div>
                                
                                <div className="flex-1 md:text-center mt-2 md:mt-0 pt-2 md:pt-0">
                                    <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans">[制作・施策の実行]</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                                        少数精鋭のチームが、責任を持ってスピーディにプロジェクトを進行します。
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 md:flex-1 relative group pt-4 md:pt-0">
                                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-600 text-xl md:text-2xl font-bold shadow-sm group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors z-10">
                                    04
                                </div>
                                <div className="flex-1 md:text-center mt-2 md:mt-0 pt-2 md:pt-0">
                                    <h3 className="text-lg font-bold mb-3 text-zinc-900 font-sans">[運用サポート・改善]</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                                        納品後も、データに基づいた効果測定と改善を繰り返し、持続的な成長をサポートします。
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white border-t border-zinc-100 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 font-sans">会社概要</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>
                    
                    <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-10 md:p-16 shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                         <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 font-sans leading-relaxed">
                             「テクノロジーの力で、<br className="md:hidden"/>すべての企業にフラットな競争力を。」
                         </h3>
                         <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12 font-sans font-medium">
                             私たちは、最新のデジタル技術を誰もが活用できる形に翻訳し、地域経済を支える企業様のビジネスを加速させるパートナーです。
                         </p>

                         <div className="border-t border-zinc-200 pt-8 flex items-center justify-center gap-4">
                             <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Company Name</span>
                             <span className="text-zinc-900 font-extrabold text-2xl tracking-tight">Fabcom</span>
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
                        御社のビジネスの成長を後押しする最適なプランを共に考えさせてください。
                    </p>
                    
                    <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary-900 hover:bg-zinc-50 rounded-full font-bold text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group border-2 border-transparent hover:border-primary-100">
                        無料オンライン相談を予約する
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
}
