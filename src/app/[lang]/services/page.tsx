import { Locale } from "@/i18n-config";
import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Layout, Megaphone, Cpu, Bot, TrendingUp, Search, MousePointerClick } from "lucide-react";
import Cta from "@/components/ui/Cta";
import Image from "next/image";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    const categories = [
        {
            id: "creative",
            title: "Creative",
            lead: "ブランドの価値を最大化し、ユーザーの心を動かす高品質なクリエイティブを提供します。",
            services: ["Webサイト制作・リニューアル", "LP制作"],
            icon: <Layout className="w-8 h-8" />,
            image: "/images/services/creative.png",
            reverse: false
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing",
            lead: "データに基づいた戦略設計と実行力で、認知拡大から収益向上までをワンストップで支援します。",
            services: ["広告運用", "SNS・集客支援", "リテンション施策"],
            icon: <Megaphone className="w-8 h-8" />,
            image: "/images/services/marketing.png",
            reverse: true
        },
        {
            id: "ai-dx",
            title: "AI / DX",
            lead: "最先端のAI技術とDXツールを駆使し、業務効率の劇的な向上と新しい価値創造を実現します。",
            services: ["AI活用支援", "業務効率化・導入支援"],
            icon: <Cpu className="w-8 h-8" />,
            image: "/images/services/ai_dx.png",
            reverse: false
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Intro */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-900 font-sans tracking-tight">提供サービス</h1>
                    <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        Fabcomは、クリエイティブ、マーケティング、テクノロジーの3つの軸で、<br className="hidden md:block"/>
                        お客様のビジネス変革と持続的な成長をトータルにサポートします。
                    </p>
                </div>
            </section>

            {/* Categories Context */}
            <section className="py-12 md:py-24 max-w-7xl mx-auto px-6 space-y-24 md:space-y-40">
                {categories.map((category, index) => (
                    <div 
                        key={category.id}
                        className={`flex flex-col ${category.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
                    >
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="inline-flex items-center gap-3 text-primary-600 font-bold tracking-wider text-sm uppercase">
                                <span className="w-8 h-[2px] bg-primary-600"></span>
                                {category.id.replace('-', ' ')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 font-sans leading-tight">
                                {category.title}
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed font-sans">
                                {category.lead}
                            </p>
                            
                            <div className="pt-4 flex flex-wrap gap-3">
                                {category.services.map((service, sIndex) => (
                                    <span key={sIndex} className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Image Panel */}
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group cursor-pointer shadow-2xl border border-zinc-100 bg-zinc-100">
                                {/* Default State Content */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600 mb-6 border border-zinc-100">
                                        {category.icon}
                                    </div>
                                    <span className="flex items-center gap-2 text-primary-600 font-bold">
                                        View Details <ArrowRight className="w-4 h-4 animate-bounce-x" />
                                    </span>
                                </div>

                                {/* Background Image with Zoom and Fade Effect */}
                                <div className="absolute inset-0 transition-all duration-700 ease-out scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                                    <Image 
                                        src={category.image} 
                                        alt={category.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent"></div>
                                </div>

                                {/* Hover Content: Service List */}
                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <h4 className="text-white text-2xl font-bold mb-6 font-sans">提供サービス：</h4>
                                    <div className="grid gap-3">
                                        {category.services.map((service, sIndex) => (
                                            <div key={sIndex} className="flex items-center gap-3 text-white">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                                                <span className="font-medium text-lg">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8">
                                        <button className="px-6 py-2 bg-white text-primary-600 rounded-full font-bold text-sm hover:bg-primary-50 transition-colors">
                                            詳しく見る
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <Cta lang={lang} />
        </div>
    );
}
