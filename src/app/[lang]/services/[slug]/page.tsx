import { Locale } from "@/i18n-config";
import Cta from "@/components/ui/Cta";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default async function ServiceDetailPage({
    params
}: {
    params: Promise<{ lang: string, slug: string }>
}) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const lang = resolvedParams.lang as Locale;

    // Mock data mapping based on the slug. In a real app this might come from a CMS.
    const serviceData: Record<string, any> = {
        "web-production": { title: "Webサイト制作・運用", desc: "企業の顔となるコーポレートサイトの設計から構築、運用までを一貫してサポート。" },
        "lp-production": { title: "LP制作・運用（LPO含む）", desc: "コンバージョン率を最大化するランディングページの制作と継続的な改善支援。" },
        "retention": { title: "リテンション向上施策", desc: "独自システムにより既存顧客の離脱を防ぎ、LTV（顧客生涯価値）を高めます。" },
        "meta-ads": { title: "Meta広告運用", desc: "Facebook/Instagramを活用し、ターゲット層へ正確にアプローチする広告配信。" },
        "email-marketing": { title: "メールマーケティング", desc: "リストを活用した自動化・シナリオ配信で、顧客育成～リピート購入を促進。" },
        "ai-integration": { title: "AI活用・導入支援", desc: "最新のAIツールを活用し、業務効率化や新しい価値提供の形を提案します。" }
    };

    const service = serviceData[slug] || { title: "Service Not Found", desc: "詳細情報が見つかりませんでした。" };

    return (
        <>
            <section className="py-24 max-w-4xl mx-auto px-6">
                <Link href={`/${lang}/services`} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> サービス一覧へ戻る
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">{service.title}</h1>
                <p className="text-xl text-zinc-600 mb-16 leading-relaxed">
                    {service.desc}
                </p>

                <div className="space-y-16">
                    <div className="bg-white p-8 md:p-12 rounded-lg border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-zinc-900">
                            <CheckCircle2 className="text-primary-500" />
                            対応内容
                        </h2>
                        <ul className="space-y-4 text-zinc-700">
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0"></span> 戦略立案とプラニング</li>
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0"></span> デザインおよび開発</li>
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0"></span> 公開後の運用と改善施策の実行</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-zinc-900">
                            <CheckCircle2 className="text-primary-500" />
                            制作・支援の流れ
                        </h2>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-zinc-200">
                            {[
                                { step: "01", title: "ヒアリング", desc: "現状の課題と目標をオンラインで詳細にお伺いします。" },
                                { step: "02", title: "戦略立案", desc: "ヒアリングに基づき、最適なプランとロードマップをご提案。" },
                                { step: "03", title: "実装・実行", desc: "プロフェッショナルチームが迅速かつ高品質に実装。" },
                                { step: "04", title: "運用・改善", desc: "データを分析し、PDCAを回しながら成果を最大化します。" }
                            ].map((item, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-100 bg-white text-primary-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold font-mono">
                                        {item.step}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-50 p-6 rounded-lg border border-zinc-200 group-hover:border-primary-200 transition-colors">
                                        <h3 className="font-bold text-lg mb-2 text-zinc-900">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Cta lang={lang} />
        </>
    );
}
