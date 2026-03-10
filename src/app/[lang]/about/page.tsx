import { Locale } from "@/i18n-config";
import Cta from "@/components/ui/Cta";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <>
            <section className="py-24 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-zinc-900">会社概要</h1>

                <div className="bg-white p-8 md:p-12 rounded-lg border border-zinc-200 shadow-sm space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-100 pb-8">
                        <div className="text-zinc-500 font-medium">屋号 / チーム名</div>
                        <div className="md:col-span-2 font-bold text-lg text-zinc-900">Fabcom</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-100 pb-8">
                        <div className="text-zinc-500 font-medium">事業内容</div>
                        <div className="md:col-span-2 leading-relaxed text-zinc-700">
                            Webサイト制作・運用<br />
                            LP制作およびLPO支援<br />
                            リテンション向上施策の企画・実行<br />
                            Meta広告等デジタル広告運用<br />
                            メールマーケティング支援<br />
                            AIツール導入・活用コンサルティング
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-100 pb-8">
                        <div className="text-zinc-500 font-medium">主要メンバー情報</div>
                        <div className="md:col-span-2 text-zinc-700">
                            代表 / ディレクター ほか、各分野のプロフェッショナルチームで構成
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-100 pb-8">
                        <div className="text-zinc-500 font-medium">拠点情報</div>
                        <div className="md:col-span-2 text-zinc-700">
                            日本 / オーストラリア
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-zinc-100 pb-8">
                        <div className="text-zinc-500 font-medium">対応地域</div>
                        <div className="md:col-span-2 text-zinc-700">
                            全国対応可能（原則オンラインでの打ち合わせとなります）
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-zinc-500 font-medium">連絡先</div>
                        <div className="md:col-span-2 text-zinc-700">
                            contact@fabcom-example.com
                        </div>
                    </div>
                </div>
            </section>

            <Cta lang={lang} />
        </>
    );
}
