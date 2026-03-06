import { Locale } from "@/i18n-config";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;

    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
                <p className="text-zinc-400">
                    プロジェクトのご相談やサービスに関するご質問など、お気軽にお問い合わせください。
                </p>
            </div>

            <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-zinc-300">お名前 <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                placeholder="山田 太郎"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-zinc-300">貴社名 <span className="text-zinc-500 text-xs ml-2">任意</span></label>
                            <input
                                type="text"
                                id="company"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                placeholder="株式会社Fabcom"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">メールアドレス <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="email@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="inquiry-type" className="text-sm font-medium text-zinc-300">お問い合わせ種別 <span className="text-red-500">*</span></label>
                        <select
                            id="inquiry-type"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none"
                            required
                        >
                            <option value="" disabled selected>選択してください</option>
                            <option value="web">Webサイト制作について</option>
                            <option value="marketing">マーケティング支援について</option>
                            <option value="partnership">協業・パートナーシップについて</option>
                            <option value="other">その他</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-zinc-300">お問い合わせ内容 <span className="text-red-500">*</span></label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                            placeholder="プロジェクトの概要や課題感など、詳細をご記載ください。"
                            required
                        ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                        <input
                            type="checkbox"
                            id="privacy"
                            className="mt-1 w-4 h-4 rounded border-white/10 bg-black/50 text-primary-500 focus:ring-primary-500 focus:ring-offset-black"
                            required
                        />
                        <label htmlFor="privacy" className="text-sm text-zinc-400 leading-relaxed cursor-pointer">
                            <a href={`/${lang}/privacy-policy`} className="text-primary-400 hover:text-primary-300 underline underline-offset-4">プライバシーポリシー</a>に同意して送信します。
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-zinc-200 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-8"
                    >
                        送信する
                    </button>
                </form>
            </div>
        </section>
    );
}
