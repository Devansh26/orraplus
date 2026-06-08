import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '#founder' },
    { label: 'Our Science', href: '#science' },
    { label: 'How It Works', href: '#solution' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'DPDP Compliance', href: '#' },
  ],
  Contact: [
    { label: 'hello@orraplus.com', href: 'mailto:hello@orraplus.com' },
    { label: 'Support', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partnerships', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/orraplus' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/orraplus' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/orraplus' },
];

export function Footer() {
  const scrollToWaitlist = () => {
    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white" aria-label="Site footer">
      {/* Pre-footer CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
                Early Access
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Your Health Can't Wait.
              </h2>
              <p className="text-slate-400 text-lg">
                Join thousands of Indians on the path to preventive health.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToWaitlist}
              className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-2xl transition-colors duration-200 shadow-glow hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Join the Waitlist
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-5">
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-2.5 group" aria-label="ORRA+ Home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-400 flex items-center justify-center shadow-glow-sm">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2L12.5 8H14.5L9 16L3.5 8H5.5L9 2Z" fill="white" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                ORRA<span className="text-brand-500">+</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              ORRA+ is building the future of preventive healthcare for India — transforming how 1.4 billion people understand, monitor, and optimize their health.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-brand-500/10 hover:border-brand-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Made in India */}
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              <span>🇮🇳</span>
              <span>Made with pride in India</span>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {category}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-400 focus-visible:rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} ORRA+ Health Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">
              Not a medical device. For health intelligence only.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
