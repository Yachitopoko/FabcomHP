"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6 text-primary-400" />,
      title: "4層リテンションシステム",
      description: "顧客の離脱を防ぎ、LTV（生涯顧客価値）を最大化する独自の4層アプローチを提供。"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      title: "データドリブンな意思決定",
      description: "直感に頼らない、データを基盤にした確実なビジネスグロースを実現します。"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-400" />,
      title: "マーケティング自動化",
      description: "最新のテクノロジーを活用し、リード獲得から育成までのプロセスを自動化。"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "持続可能な事業構造",
      description: "広告費に依存しない、顧客リストを『資産』に変える堅牢なビジネスモデルの構築。"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            FAB<span className="text-primary-500">COM</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link href="#services" className="hover:text-white transition-colors">サービス</Link>
            <Link href="#features" className="hover:text-white transition-colors">特徴</Link>
            <Link href="#about" className="hover:text-white transition-colors">会社概要</Link>
            <button className="bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
              無料相談
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-900)_0%,transparent_40%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.15)_0%,transparent_40%)] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-8"
              variants={fadeIn}
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              次世代のビジネスモデル構築
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
              variants={fadeIn}
            >
              顧客リストを「資産」に変え、<br className="hidden md:block" />
              <span className="text-gradient">圧倒的な収益基盤</span>を創る。
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
              variants={fadeIn}
            >
              広告費を浪費する時代は終わりました。Fabcomは、独自の「4層リテンションシステム」で、あなたのビジネスを持続可能な高収益モデルへと進化させます。
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              variants={fadeIn}
            >
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
                無料の戦略セッションを予約 <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium border border-white/10 transition-all">
                サービス詳細を見る
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fabcomが選ばれる理由</h2>
            <p className="text-zinc-400">最新のアプローチと確かな実績で、あなたのビジネスの潜在能力を最大限に引き出します。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">ビジネスを次の次元へ</h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            現状の課題をオンラインでヒアリングし、最適なソリューションをご提案します。まずは無料相談をご利用ください。
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105">
            今すぐミーティングを予約する <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-zinc-500 text-sm text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white mb-4 md:mb-0">
            FAB<span className="text-primary-500">COM</span>
          </div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-white transition-colors">利用規約</Link>
            <Link href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Fabcom Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
