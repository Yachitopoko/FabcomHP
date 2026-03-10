import { Locale } from "@/i18n-config";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">お問い合わせ</h1>
                <p className="text-zinc-600">
                    プロジェクトのご相談やサービスに関するご質問など、お気軽にお問い合わせください。
                </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg border border-zinc-200 shadow-sm">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-zinc-700">お名前 <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                placeholder="山田 太郎"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-bold text-zinc-700">貴社名 <span className="text-zinc-400 text-xs ml-2 font-normal">任意</span></label>
                            <input
                                type="text"
                                id="company"
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                placeholder="株式会社Fabcom"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-zinc-700">メールアドレス <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="email@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="inquiry-type" className="text-sm font-bold text-zinc-700">お問い合わせ種別 <span className="text-red-500">*</span></label>
                        <select
                            id="inquiry-type"
                            className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>選択してください</option>
                            <option value="web">Webサイト制作について</option>
                            <option value="marketing">マーケティング支援について</option>
                            <option value="partnership">協業・パートナーシップについて</option>
                            <option value="other">その他</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-zinc-700">お問い合わせ内容 <span className="text-red-500">*</span></label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                            placeholder="プロジェクトの概要や課題感など、詳細をご記載ください。"
                            required
                        ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                        <input
                            type="checkbox"
                            id="privacy"
                            className="mt-1 w-4 h-4 rounded border-zinc-300 text-primary-600 focus:ring-primary-500"
                            required
                        />
                        <label htmlFor="privacy" className="text-sm text-zinc-600 leading-relaxed cursor-pointer">
                            <a href={`/${lang}/privacy-policy`} className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4">プライバシーポリシー</a>に同意して送信します。
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-600 text-white font-bold text-lg py-4 rounded-md hover:bg-primary-700 transition-colors shadow-sm mt-8"
                    >
                        送信する
                    </button>
                </form>
            </div>
        </section>
    );
}
