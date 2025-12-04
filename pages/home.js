import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, BarChart3, Briefcase, Users, TrendingUp, LineChart, Binary } from 'lucide-react';
import { createPageUrl } from '@/utils';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692dcf5b5b525f066d4fd488/c6343e629_image.png";

const aims = [
  {
    icon: BarChart3,
    title: 'Quality Analysis',
    description: 'Cultivating a team of student analysts who produce consistent, publication-ready research reports.',
    number: '01'
  },
  {
    icon: Briefcase,
    title: 'Industry Engagement',
    description: 'Expanding our presence within the financial ecosystem through guest lectures, partnerships, and outreach.',
    number: '02'
  },
  {
    icon: Users,
    title: 'Student Empowerment',
    description: 'Delivering workshops, lectures, and guides that help students understand and apply financial knowledge practically.',
    number: '03'
  }
];

const divisions = [
  {
    icon: TrendingUp,
    title: 'Fundamentals',
    description: 'Deep-dive company analysis across 6 core sectors with publication-ready equity reports.',
    sectors: ['BFSI', 'Automobile', 'IT', 'Heavy Industries', 'FMCG', 'Healthcare']
  },
  {
    icon: LineChart,
    title: 'Technicals',
    description: 'Chart analysis and market event interpretation through the lens of technical analysis.',
    sectors: ['Price Action', 'Market Events', 'Pattern Recognition']
  },
  {
    icon: Binary,
    title: 'Quants',
    description: 'Proprietary tools, market strategies, and tech infrastructure powering FinCell.',
    sectors: ['Strategies', 'Tools & Indicators', 'Tech Stack']
  }
];

export default function Home() {
  const scrollToAims = () => {
    document.querySelector('#aims')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] bg-[#0B1E47] overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(#93B0AE 1px, transparent 1px), linear-gradient(90deg, #93B0AE 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#93B0AE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C5E5C1]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-6"
              >
                St. Xavier's College, Mumbai
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] tracking-tight mb-4"
              >
                FinCell
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.1] tracking-tight"
              >
                Insights
                <span className="text-[#C5E5C1] font-normal"> to Impact</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 max-w-md text-[#93B0AE]/80 text-lg font-light leading-relaxed"
              >
                Building a dynamic community of student analysts — transforming insights into real-world impact through research, education, and industry engagement.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 flex items-center gap-8"
              >
                <button
                  onClick={scrollToAims}
                  className="group flex items-center gap-3 text-white text-sm font-medium tracking-wide"
                >
                  <span className="w-12 h-12 rounded-full border border-[#93B0AE]/30 flex items-center justify-center group-hover:bg-[#93B0AE]/10 transition-colors duration-300">
                    <ArrowDown size={18} className="text-[#93B0AE]" />
                  </span>
                  <span className="text-[#93B0AE] group-hover:text-white transition-colors">Explore</span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#93B0AE]/20 rounded-full blur-3xl scale-150" />
                <img src={LOGO_URL} alt="FinCell Logo" className="relative w-64 md:w-80 lg:w-96 h-auto" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#93B0AE]/30 to-transparent" />
      </section>

      {/* Aims Section */}
      <section id="aims" className="relative bg-white py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAF9]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              Our Mission
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#0B1E47] tracking-tight"
            >
              Our Aims
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {aims.map((aim, index) => (
              <motion.div
                key={aim.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-white p-8 lg:p-10 border border-[#0B1E47]/10 hover:border-[#93B0AE]/50 transition-all duration-500 h-full">
                  <span className="absolute -top-4 -left-4 text-7xl font-light text-[#0B1E47]/5 select-none">
                    {aim.number}
                  </span>
                  
                  <div className="w-14 h-14 bg-[#0B1E47] flex items-center justify-center mb-8 group-hover:bg-[#93B0AE] transition-colors duration-500">
                    <aim.icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#0B1E47] mb-4">{aim.title}</h3>
                  <p className="text-[#0B1E47]/60 font-light leading-relaxed">{aim.description}</p>

                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5E5C1] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="relative bg-[#0B1E47] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(#93B0AE 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              Research Verticals
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-white tracking-tight"
            >
              Our Divisions
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full bg-[#091F46] border border-[#93B0AE]/10 p-8 lg:p-10 hover:border-[#93B0AE]/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#93B0AE] to-[#C5E5C1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-16 h-16 rounded-full border border-[#93B0AE]/30 flex items-center justify-center mb-8 group-hover:border-[#C5E5C1] group-hover:bg-[#C5E5C1]/5 transition-all duration-500">
                    <division.icon size={28} className="text-[#93B0AE] group-hover:text-[#C5E5C1] transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-4">{division.title}</h3>
                  <p className="text-[#93B0AE]/70 font-light leading-relaxed mb-8">{division.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {division.sectors.map((sector) => (
                      <span key={sector} className="px-3 py-1.5 text-xs font-medium text-[#93B0AE] border border-[#93B0AE]/20 bg-[#93B0AE]/5">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to={createPageUrl('About')}
              className="inline-flex items-center gap-3 text-[#93B0AE] hover:text-white transition-colors duration-300 group"
            >
              <span className="font-medium">Learn more about our research house</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={createPageUrl('Publications')}
                className="group block bg-[#0B1E47] p-10 lg:p-12 h-full hover:bg-[#091F46] transition-colors duration-500"
              >
                <p className="text-[#93B0AE] text-sm font-medium tracking-[0.2em] uppercase mb-4">Research Library</p>
                <h3 className="text-3xl font-light text-white mb-4">Publications</h3>
                <p className="text-[#93B0AE]/70 font-light mb-8">
                  Access our equity reports, research papers, project documentation, and blog articles.
                </p>
                <span className="inline-flex items-center gap-2 text-[#C5E5C1] font-medium group-hover:gap-3 transition-all">
                  Browse publications <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to={createPageUrl('Team')}
                className="group block bg-[#F8FAF9] border border-[#0B1E47]/10 p-10 lg:p-12 h-full hover:border-[#93B0AE]/40 transition-all duration-500"
              >
                <p className="text-[#93B0AE] text-sm font-medium tracking-[0.2em] uppercase mb-4">Our People</p>
                <h3 className="text-3xl font-light text-[#0B1E47] mb-4">Meet the Team</h3>
                <p className="text-[#0B1E47]/60 font-light mb-8">
                  The analysts, strategists, and researchers driving FinCell's vision forward.
                </p>
                <span className="inline-flex items-center gap-2 text-[#0B1E47] font-medium group-hover:gap-3 transition-all">
                  View team <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
