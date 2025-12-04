import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, LineChart, Binary, ArrowRight, Target, Eye, Lightbulb } from 'lucide-react';
import { createPageUrl } from '@/utils';

const fundamentalsSectors = [
  { name: 'BFSI', description: 'Banking, Financial Services & Insurance' },
  { name: 'Automobile', description: 'OEMs, Auto Ancillaries & EVs' },
  { name: 'IT', description: 'Software Services & Technology' },
  { name: 'Heavy Industries', description: 'Capital Goods & Infrastructure' },
  { name: 'FMCG', description: 'Consumer Staples & Discretionary' },
  { name: 'Healthcare', description: 'Pharma, Hospitals & Diagnostics' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B1E47] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(#93B0AE 1px, transparent 1px), linear-gradient(90deg, #93B0AE 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-6">About FinCell</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-8">
              Where Student Research
              <br />
              <span className="text-[#C5E5C1]">Evolves Into Influence</span>
            </h1>
            <p className="text-[#93B0AE]/80 text-lg font-light leading-relaxed">
              FinCell envisions a community where student-led research evolves into influence. We aim to empower students to not only understand markets but also actively shape their perspective through hands-on research, sharp publications, and strategic outreach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8FAF9] p-10 lg:p-12"
            >
              <div className="w-14 h-14 bg-[#0B1E47] flex items-center justify-center mb-8">
                <Eye size={24} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-[#0B1E47] mb-4">Our Vision</h3>
              <p className="text-[#0B1E47]/60 font-light leading-relaxed">
                To build a dynamic community of student analysts and finance enthusiasts — transforming insights into real-world impact through research, education, and industry engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1E47] p-10 lg:p-12"
            >
              <div className="w-14 h-14 bg-[#93B0AE]/20 flex items-center justify-center mb-8">
                <Lightbulb size={24} className="text-[#C5E5C1]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Our Philosophy</h3>
              <p className="text-[#93B0AE]/70 font-light leading-relaxed">
                The goal is to move beyond textbook finance and into a space where knowledge is created, shared, and acted upon. We believe in learning by doing — real research, real markets, real impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fundamentals Division */}
      <section className="relative bg-[#F8FAF9] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-32">
                <div className="w-20 h-20 rounded-full border-2 border-[#0B1E47]/20 flex items-center justify-center mb-8">
                  <TrendingUp size={36} className="text-[#0B1E47]" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-light text-[#0B1E47] tracking-tight mb-6">Fundamentals</h2>
                <p className="text-[#0B1E47]/60 font-light leading-relaxed mb-8">
                  Our fundamental analysis division produces institutional-grade equity research across six core sectors of the Indian economy. Each sector team conducts deep-dive analysis, building comprehensive coverage through company profiles, valuation models, and sector outlooks.
                </p>
                <p className="text-[#0B1E47]/60 font-light leading-relaxed">
                  Reports undergo rigorous internal review before publication, ensuring every piece meets our standards for analytical depth and presentation quality.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {fundamentalsSectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white border border-[#0B1E47]/10 p-6 hover:border-[#93B0AE]/50 hover:shadow-lg transition-all duration-500"
                >
                  <h4 className="text-lg font-medium text-[#0B1E47] mb-2">{sector.name}</h4>
                  <p className="text-sm text-[#0B1E47]/50 font-light">{sector.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technicals Division */}
      <section className="relative bg-[#0B1E47] py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#091F46]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#93B0AE]/30 flex items-center justify-center mb-8">
                <LineChart size={36} className="text-[#93B0AE]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-light text-white tracking-tight mb-6">Technicals</h2>
              <p className="text-[#93B0AE]/70 font-light leading-relaxed mb-6">
                The technicals team brings a different lens to market analysis. Rather than diving into financial statements, they focus on price action, chart patterns, and market structure to decode what the tape is telling us.
              </p>
              <p className="text-[#93B0AE]/70 font-light leading-relaxed mb-8">
                Beyond routine chart analysis, the team dissects significant market events through a technical perspective — from unusual volume spikes to the mechanics behind events like the Jane Street futures market manipulation controversy. Their work helps the broader FinCell community understand market microstructure and the forces that move prices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#091F46] border border-[#93B0AE]/20 p-8 lg:p-10">
                <h4 className="text-lg font-medium text-white mb-6">Core Focus Areas</h4>
                <div className="space-y-4">
                  {['Price Action & Chart Patterns', 'Market Microstructure Analysis', 'Event-Driven Technical Studies', 'Volume & Momentum Analysis', 'Support & Resistance Mapping'].map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-[#93B0AE]/10 flex items-center justify-center text-xs font-medium text-[#93B0AE]">
                        {String(index + 1).padStart(2, '0')}
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

      {/* Quants Division */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#F8FAF9] p-8 lg:p-10">
                <h4 className="text-lg font-medium text-[#0B1E47] mb-6">What We Build</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Market Strategies', desc: 'Systematic approaches to alpha generation' },
                    { title: 'Proprietary Tools', desc: 'Custom indicators for analysis teams' },
                    { title: 'Project Reports', desc: 'Documented research methodologies' },
                    { title: 'GitHub Repos', desc: 'Open-source tools and notebooks' },
                    { title: 'Tech Infrastructure', desc: 'Backend systems for FinCell' },
                    { title: 'Analyst Training', desc: 'Upskilling programs in Python and statistics' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white p-4 border border-[#0B1E47]/10">
                      <h5 className="font-medium text-[#0B1E47] text-sm mb-1">{item.title}</h5>
                      <p className="text-xs text-[#0B1E47]/50">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#0B1E47]/20 flex items-center justify-center mb-8">
                <Binary size={36} className="text-[#0B1E47]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-light text-[#0B1E47] tracking-tight mb-6">Quants</h2>
              <p className="text-[#0B1E47]/60 font-light leading-relaxed mb-6">
                The quants division is the engine room of FinCell. We develop market strategies, build proprietary tools and indicators that power the other analysis teams, and handle all technical requirements for the committee.
              </p>
              <p className="text-[#0B1E47]/60 font-light leading-relaxed">
                Our work spans from backtesting systematic strategies to publishing project reports and maintaining GitHub repositories. We're also responsible for upskilling analysts across divisions in quantitative methods, Python programming, and statistical analysis.
              </p>
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
            <h3 className="text-3xl font-light text-white mb-6">Ready to explore our work?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={createPageUrl('Publications')}
                className="px-8 py-4 bg-[#C5E5C1] text-[#0B1E47] font-medium hover:bg-white transition-colors duration-300 inline-flex items-center gap-2"
              >
                View Publications <ArrowRight size={18} />
              </Link>
              <Link
                to={createPageUrl('Team')}
                className="px-8 py-4 border border-[#93B0AE]/30 text-[#93B0AE] font-medium hover:bg-[#93B0AE]/10 transition-colors duration-300"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
