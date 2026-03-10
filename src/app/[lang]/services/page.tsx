import { Locale } from "@/i18n-config";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Users, Target, Mail, LayoutDashboard } from "lucide-react";
import Cta from "@/components/ui/Cta";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    const services = [
        {
            slug: "web-production",
            icon: <Globe className="w-8 h-8 text-primary-600" />,
            title: "Webサイト制作・運用",
            description: "企業の顔となるコーポレートサイトの設計から構築、運用までを一貫してサポート。"
        },
        {
            slug: "lp-production",
            icon: <Target className="w-8 h-8 text-accent" />,
            title: "LP制作・運用（LPO含む）",
            description: "コンバージョン率を最大化するランディングページの制作と継続的な改善支援。"
        },
        {
            slug: "retention",
            icon: <Users className="w-8 h-8 text-primary-600" />,
            title: "リテンション向上施策",
            description: "独自システムにより既存顧客の離脱を防ぎ、LTV（顧客生涯価値）を高めます。"
        },
        {
            slug: "meta-ads",
            icon: <TrendingUp className="w-8 h-8 text-accent" />,
            title: "Meta広告運用",
            description: "Facebook/Instagramを活用し、ターゲット層へ正確にアプローチする広告配信。"
        },
        {
            slug: "email-marketing",
            icon: <Mail className="w-8 h-8 text-primary-600" />,
            title: "メールマーケティング",
            description: "リストを活用した自動化・シナリオ配信で、顧客育成～リピート購入を促進。"
        },
        {
            slug: "ai-integration",
            icon: <LayoutDashboard className="w-8 h-8 text-accent" />,
            title: "AI活用・導入支援",
            description: "最新のAIツールを活用し、業務効率化や新しい価値提供の形を提案します。"
        }
    ];

    return (
        <>
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">提供サービス</h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        Fabcomでは、ビジネスの課題解決と成長を加速させる多彩なサービスを展開しています。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/${lang}/services/${service.slug}`}
                            className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-primary-200 hover:shadow-md transition-all duration-300 group block"
                        >
                            <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-zinc-900">{service.title}</h2>
                            <p className="text-zinc-600 mb-8 flex-grow">
                                {service.description}
                            </p>
                            <div className="flex items-center text-primary-600 font-bold group-hover:translate-x-2 transition-transform">
                                詳細を見る <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Cta lang={lang} />
        </>
    );
}
