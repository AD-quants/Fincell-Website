import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { createPageUrl } from '@/utils';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692dcf5b5b525f066d4fd488/c6343e629_image.png";

const navLinks = [
  { label: 'Home', page: 'Home' },
  { label: 'About', page: 'About' },
  { label: 'Team', page: 'Team' },
  { label: 'Publications', page: 'Publications' },
  { label: 'Virtual Fund', page: 'VirtualFund' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1E47]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <img src={LOGO_URL} alt="FinCell" className="h-16 w-auto mb-6" />
            <p className="text-[#93B0AE]/70 font-light leading-relaxed max-w-sm mb-8">
              The student-run financial research cell of St. Xavier's College, Mumbai. 
              Bridging academic excellence with industry-standard analysis.
            </p>
            
            <div className="flex items-start gap-3 text-[#93B0AE]/60">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <p className="text-sm font-light">
                St. Xavier's College<br />
                5, Mahapalika Marg, Dhobi Talao<br />
                Mumbai, Maharashtra 400001
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-[#93B0AE]/60 hover:text-white text-sm font-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-medium mb-6 tracking-wide">Connect</h4>
            
            <div className="space-y-4 mb-8">
              <a
                href="https://instagram.com/fincell.xaviers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#93B0AE]/30 flex items-center justify-center group-hover:border-[#C5E5C1] group-hover:bg-[#C5E5C1]/10 transition-all duration-300">
                  <Instagram size={18} className="text-[#93B0AE] group-hover:text-[#C5E5C1] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Instagram</p>
                  <p className="text-xs text-[#93B0AE]/60">@fincell.xaviers</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/fincell/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#93B0AE]/30 flex items-center justify-center group-hover:border-[#C5E5C1] group-hover:bg-[#C5E5C1]/10 transition-all duration-300">
                  <Linkedin size={18} className="text-[#93B0AE] group-hover:text-[#C5E5C1] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">LinkedIn</p>
                  <p className="text-xs text-[#93B0AE]/60">FinCell</p>
                </div>
              </a>
            </div>

            <a
              href="mailto:fincell@xaviers.edu"
              className="inline-flex items-center gap-3 text-[#93B0AE]/60 hover:text-white transition-colors duration-300"
            >
              <Mail size={16} />
              <span className="text-sm">fincell@xaviers.edu</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#93B0AE]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#93B0AE]/40 text-sm font-light">
              © {new Date().getFullYear()} FinCell — St. Xavier's College, Mumbai
            </p>
            <p className="text-[#93B0AE]/40 text-sm font-light">
              Insights to Impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
