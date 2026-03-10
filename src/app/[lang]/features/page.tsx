import { Locale } from "@/i18n-config";
import Cta from "@/components/ui/Cta";

export default async function FeaturesPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <>
            <section className="py-24 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">当社の特徴・選ばれる理由</h1>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        Fabcomが多くのクライアントに選ばれ続ける3つの理由をご紹介します。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm">
                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-primary-600 font-bold text-xl">1</span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4">専門性の高いデジタルマーケティング支援</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            SEO、広告運用、SNSマーケティングなど、各分野に精通した専門家が最適な施策を設計・実行します。データに基づいた戦略立案で、確実な成果へと導きます。
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm">
                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-primary-600 font-bold text-xl">2</span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4">伴走型のプロジェクトマネジメント</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            一方的な提案ではなく、お客様のチームの一員として課題に向き合います。定期的な進捗共有と柔軟な方針調整で、プロジェクトを確実にゴールへ進めます。
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white border border-zinc-200 rounded-lg p-8 shadow-sm">
                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-primary-600 font-bold text-xl">3</span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4">成果に直結するデータ分析と改善</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            施策の実行後も、アクセス解析やコンバージョンデータを継続的にモニタリング。改善サイクルを回し続けることで、持続的な成長を実現します。
                        </p>
                    </div>
                </div>
            </section>

            <Cta lang={lang} />
        </>
    );
}
