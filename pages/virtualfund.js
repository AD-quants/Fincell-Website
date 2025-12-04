import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, PieChart, Shield, Rocket, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: TrendingUp, label: 'Live Portfolio Tracking', description: 'Real-time performance monitoring' },
  { icon: PieChart, label: 'Asset Allocation', description: 'Diversified sector exposure' },
  { icon: Shield, label: 'Risk Analytics', description: 'VaR and drawdown metrics' },
  { icon: BarChart3, label: 'Performance Attribution', description: 'Factor-based analysis' }
];

export default function VirtualFund() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B1E47] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5E5C1]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#93B0AE]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5E5C1]/10 border border-[#C5E5C1]/30 mb-8">
              <Rocket size={16} className="text-[#C5E5C1]" />
              <span className="text-xs font-medium text-[#C5E5C1] tracking-[0.2em] uppercase">
                Public Dashboard
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
              Virtual Fund
            </h1>
            
            <p className="text-[#93B0AE]/80 font-light text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              A simulated investment portfolio managed by FinCell members, applying real-world strategies 
              in a controlled environment. Track our performance and learn from our investment decisions.
            </p>

            <a
              href="https://fincell-virtual-fund.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#C5E5C1] text-[#0B1E47] hover:bg-white font-medium px-10 py-6 text-base gap-3"
              >
                Open Dashboard
                <ExternalLink size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-4">Dashboard Features</p>
            <h2 className="text-4xl font-light text-[#0B1E47] tracking-tight">What You'll Find</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8FAF9] p-8 border border-[#0B1E47]/5 hover:border-[#93B0AE]/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-[#0B1E47] flex items-center justify-center mb-6 group-hover:bg-[#93B0AE] transition-colors duration-500">
                  <feature.icon size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-[#0B1E47] mb-2">{feature.label}</h3>
                <p className="text-sm text-[#0B1E47]/60 font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Fund */}
      <section className="relative bg-[#F8FAF9] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-[#0B1E47] tracking-tight mb-6">About the Virtual Fund</h2>
              <div className="space-y-4 text-[#0B1E47]/60 font-light leading-relaxed">
                <p>
                  The FinCell Virtual Fund is a paper trading portfolio that allows our members to apply theoretical knowledge in a practical setting without real capital at risk.
                </p>
                <p>
                  Investment decisions are made collaboratively across our three divisions — Fundamentals, Technicals, and Quants — combining different analytical perspectives to build a diversified portfolio.
                </p>
                <p>
                  The public dashboard, built on Streamlit, provides transparency into our holdings, performance metrics, and decision-making rationale. It serves as both a learning tool for our members and a demonstration of FinCell's analytical capabilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0B1E47] p-10 lg:p-12">
                <h3 className="text-xl font-medium text-white mb-6">Investment Philosophy</h3>
                <div className="space-y-4">
                  {[
                    'Multi-factor approach combining fundamental and technical signals',
                    'Risk-adjusted returns with defined position sizing',
                    'Sector-diversified with concentration limits',
                    'Regular rebalancing based on market conditions',
                    'Transparent decision documentation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="w-6 h-6 bg-[#93B0AE]/20 flex items-center justify-center text-xs font-medium text-[#93B0AE] shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-[#93B0AE]/80 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0B1E47] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light text-white mb-6">Track Our Performance</h3>
            <p className="text-[#93B0AE]/70 font-light mb-8 max-w-xl mx-auto">
              Visit our Streamlit dashboard to see current holdings, historical returns, and detailed analytics.
            </p>
            <a
              href="https://fincell-virtual-fund.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#C5E5C1] text-[#0B1E47] hover:bg-white font-medium px-10 py-6 text-base gap-3"
              >
                Open Dashboard
                <ExternalLink size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
