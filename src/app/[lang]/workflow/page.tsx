import { Locale } from "@/i18n-config";
import Cta from "@/components/ui/Cta";

export default async function WorkflowPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    const steps = [
        {
            number: "01",
            title: "お問い合わせ・ヒアリング",
            description:
                "まずはお問い合わせフォームよりご連絡ください。初回のお打ち合わせでは、現状の課題やご要望を丁寧にヒアリングし、プロジェクトの方向性を共有します。",
        },
        {
            number: "02",
            title: "課題抽出・戦略設計",
            description:
                "ヒアリング内容をもとに、現状分析と課題の整理を行います。目標達成に向けた具体的な戦略とロードマップをご提案いたします。",
        },
        {
            number: "03",
            title: "施策の実行・制作",
            description:
                "承認いただいた計画に基づき、Webサイト制作や広告運用、コンテンツ制作などの施策を実行します。進捗は定期的にご報告いたします。",
        },
        {
            number: "04",
            title: "効果測定・継続的改善",
            description:
                "施策の効果をデータで測定し、レポートとしてご共有します。結果をもとに改善施策を立案・実行し、継続的な成果向上を目指します。",
        },
    ];

    return (
        <>
            <section className="py-24 max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">プロジェクトの進め方</h1>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        お問い合わせから納品・運用まで、透明性の高いプロセスでプロジェクトを進行します。
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-zinc-200" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex gap-6 md:gap-8">
                                {/* Step number circle */}
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-sm">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="bg-white border border-zinc-200 rounded-lg p-6 md:p-8 shadow-sm flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">
                                        Step {step.number.replace(/^0/, "")}. {step.title}
                                    </h2>
                                    <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Cta lang={lang} />
        </>
    );
}
