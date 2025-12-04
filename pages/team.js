import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Linkedin } from 'lucide-react';
import { createPageUrl } from '@/utils';

const teamStats = [
  { number: '30+', label: 'Active Members' },
  { number: '3', label: 'Research Divisions' },
  { number: '6', label: 'Sector Coverage' },
  { number: '2023', label: 'Founded' }
];

const divisions = [
  {
    name: 'Fundamentals',
    description: 'Equity research across BFSI, Auto, IT, Heavy Industries, FMCG, and Healthcare',
    members: 'Core analysts producing publication-ready reports'
  },
  {
    name: 'Technicals',
    description: 'Chart analysis, market events, and price action research',
    members: 'Technical analysts decoding market structure'
  },
  {
    name: 'Quants',
    description: 'Strategies, tools, infrastructure, and analyst training',
    members: 'Quantitative researchers and developers'
  },
  {
    name: 'Content House',
    description: 'Blogs, podcasts, and workshops for college students',
    members: 'Content creators and workshop facilitators'
  }
];

export default function Team() {
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
            <p className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-6">Our People</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-8">
              The Team Behind
              <br />
              <span className="text-[#C5E5C1]">FinCell</span>
            </h1>
            <p className="text-[#93B0AE]/80 text-lg font-light leading-relaxed">
              A diverse group of finance enthusiasts, data scientists, and market analysts united by a passion for understanding markets and creating impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-[#F8FAF9] border border-[#0B1E47]/5"
              >
                <span className="block text-4xl md:text-5xl font-light text-[#0B1E47] mb-2">
                  {stat.number}
                </span>
                <span className="text-sm text-[#0B1E47]/50 font-medium tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="relative bg-[#F8FAF9] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-4">Structure</p>
            <h2 className="text-4xl font-light text-[#0B1E47] tracking-tight">Our Divisions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 lg:p-10 border border-[#0B1E47]/10"
              >
                <h3 className="text-2xl font-medium text-[#0B1E47] mb-4">{division.name}</h3>
                <p className="text-[#0B1E47]/60 font-light leading-relaxed mb-6">{division.description}</p>
                <div className="pt-6 border-t border-[#0B1E47]/10">
                  <p className="text-sm text-[#93B0AE] font-medium">{division.members}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Connect */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-[#0B1E47] mb-8">Connect with us on LinkedIn</h3>
            <a
              href="https://www.linkedin.com/company/fincell/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B1E47] text-white font-medium hover:bg-[#091F46] transition-colors duration-300"
            >
              <Linkedin size={20} />
              Follow FinCell
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
