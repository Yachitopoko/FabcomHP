import { Locale } from "@/i18n-config";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <section className="py-24 max-w-3xl mx-auto px-6 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-zinc-900">プライバシーポリシー</h1>

            <div className="prose prose-zinc max-w-none bg-white p-8 md:p-12 rounded-lg border border-zinc-200 shadow-sm space-y-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900">1. はじめに</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Fabcom（以下「当チーム」）は、お客様のプライバシーを尊重し、お客様からご提供いただく個人情報を保護するため、以下の通りプライバシーポリシーを定めます。本ポリシーは、当サイトのサービスを利用する際に適用されます。
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900">2. 取得する情報</h2>
                    <p className="text-zinc-700 leading-relaxed mb-2">
                        当チームは、お問い合わせフォームの送信時等に、以下の情報を取得することがあります。
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 space-y-1">
                        <li>氏名、会社名</li>
                        <li>メールアドレス</li>
                        <li>お問い合わせ内容等に入力された情報</li>
                        <li>その他、サイトへのアクセスに関する技術的な情報（Cookie等）</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900">3. 利用目的</h2>
                    <p className="text-zinc-700 leading-relaxed mb-2">
                        取得した個人情報は、以下の目的で利用いたします。
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 space-y-1">
                        <li>お問い合わせに対する回答および関連するご連絡のため</li>
                        <li>ご提供するサービスの改善および新サービスの開発のため</li>
                        <li>当サイトの利用状況の分析およびマーケティング施策のため</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900">4. 管理方法</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        当チームは、取得した個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等を防止するための必要なセキュリティ対策を講じます。法令に基づく場合を除き、事前にお客様の同意を得ることなく第三者へ個人情報を提供することはありません。
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900">5. お問い合わせ窓口</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        本ポリシーに関するご質問や、個人情報の取り扱いに関するお問い合わせは、お問い合わせページよりご連絡ください。
                    </p>
                </div>

                <div className="pt-8 border-t border-zinc-200">
                    <p className="text-sm text-zinc-500">制定日: {new Date().getFullYear()}年X月X日</p>
                </div>
            </div>
        </section>
    );
}
