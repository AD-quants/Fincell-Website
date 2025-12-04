import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
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
            className="max-w-3xl">

            <p className="text-[#93B0AE] text-sm font-medium tracking-[0.3em] uppercase mb-6">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-8">
              Contact Us
            </h1>
            <p className="text-[#93B0AE]/80 text-lg font-light leading-relaxed">
              Have questions about FinCell? Interested in collaborating or joining our team? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/fincell.xaviers"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#F8FAF9] p-10 lg:p-12 border border-[#0B1E47]/5 hover:border-[#93B0AE]/50 hover:shadow-xl transition-all duration-500">

              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center mb-8">
                <Instagram size={28} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-[#0B1E47] mb-2 group-hover:text-[#93B0AE] transition-colors">Instagram</h3>
              <p className="text-[#0B1E47]/60 font-light mb-4">Follow us for updates, insights, and behind-the-scenes content.</p>
              <span className="inline-flex items-center gap-2 text-[#93B0AE] font-medium">
                @fincell.xaviers
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/fincell/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-[#F8FAF9] p-10 lg:p-12 border border-[#0B1E47]/5 hover:border-[#93B0AE]/50 hover:shadow-xl transition-all duration-500">

              <div className="w-16 h-16 bg-[#0A66C2] flex items-center justify-center mb-8">
                <Linkedin size={28} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-[#0B1E47] mb-2 group-hover:text-[#93B0AE] transition-colors">LinkedIn</h3>
              <p className="text-[#0B1E47]/60 font-light mb-4">Connect professionally and stay updated on our publications.</p>
              <span className="inline-flex items-center gap-2 text-[#93B0AE] font-medium">
                FinCell
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:fincell@xaviers.edu"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-[#F8FAF9] p-10 lg:p-12 border border-[#0B1E47]/5 hover:border-[#93B0AE]/50 hover:shadow-xl transition-all duration-500">

              <div className="w-16 h-16 bg-[#0B1E47] flex items-center justify-center mb-8 group-hover:bg-[#93B0AE] transition-colors duration-500">
                <Mail size={28} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-[#0B1E47] mb-2 group-hover:text-[#93B0AE] transition-colors">Email</h3>
              <p className="text-[#0B1E47]/60 font-light mb-4">For collaborations, partnerships, or general inquiries.</p>
              <span className="inline-flex items-center gap-2 text-[#93B0AE] font-medium">fincell.research.xaviers@gmail.com


              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative bg-[#0B1E47] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>

              <div className="w-16 h-16 rounded-full border-2 border-[#93B0AE]/30 flex items-center justify-center mb-8">
                <MapPin size={28} className="text-[#93B0AE]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-light text-white tracking-tight mb-6">Our Location</h2>
              <div className="text-[#93B0AE]/70 font-light leading-relaxed space-y-2">
                <p className="text-white font-medium text-lg">St. Xavier's College</p>
                <p>5, Mahapalika Marg</p>
                <p>Dhobi Talao, Chhatrapati Shivaji Terminus Area</p>
                <p>Fort, Mumbai, Maharashtra 400001</p>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAF9] border border-[#0B1E47]/10 p-10 lg:p-16 text-center">

            <h3 className="text-3xl font-light text-[#0B1E47] mb-4">Interested in Joining FinCell?</h3>
            <p className="text-[#0B1E47]/60 font-light max-w-2xl mx-auto mb-8">
              We're always looking for passionate students who want to learn, research, and contribute to our growing community. Applications for the 2025 cohort will open soon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/fincell.xaviers"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0B1E47] text-white font-medium hover:bg-[#091F46] transition-colors duration-300 inline-flex items-center gap-2">

                <Instagram size={18} />
                Follow for Updates
              </a>
              <a
                href="https://www.linkedin.com/company/fincell/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#0B1E47]/20 text-[#0B1E47] font-medium hover:bg-[#0B1E47]/5 transition-colors duration-300 inline-flex items-center gap-2">

                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);

}
