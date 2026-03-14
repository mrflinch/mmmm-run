import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ArrowRight, Target, Phone, Database, CheckCircle2 } from 'lucide-react';

const BOOKING_URL = "https://cal.com/monder/quick-chat";

const services = [
  {
    title: "Outbound AI Engine",
    tagline: "Turn cold outreach into a precision weapon.",
    problem: "Manual prospecting is slow, inconsistent, and error-prone.",
    solution: "AI-driven multi-channel campaigns across Email, LinkedIn, Paid Ads, YouTube, and custom channels. Hyper-targeted to your ICP.",
    outcome: "Qualified, sales-ready conversations scheduled directly on your calendar, with real-time metrics visible in your AI Dashboard.",
    icon: Target,
    tags: ["Multi-channel", "Hyper-targeted", "Autonomous"],
    features: ["ICP targeting & enrichment", "Email + LinkedIn sequences", "A/B message testing", "Calendar auto-booking"],
    color: "hsl(var(--primary))",
  },
  {
    title: "AI Caller",
    tagline: "Never miss a lead. Never waste a meeting.",
    problem: "Leads slip through the cracks. Missed calls and unqualified meetings waste time and revenue.",
    solution: "Human-like AI answers calls, responds to forms, qualifies prospects, and books meetings 24/7.",
    outcome: "No unqualified bookings. Every conversation comes with full context and buying intent in your dashboard.",
    icon: Phone,
    tags: ["24/7 Availability", "Human-like Voice", "BANT Qualified"],
    features: ["Inbound call handling", "Form & chat response", "BANT qualification", "Full call transcripts"],
    color: "hsl(225 72% 67%)",
  },
  {
    title: "AI Proprietary CRM",
    tagline: "Your entire pipeline. Automated and prioritized.",
    problem: "Sales data scattered, manual follow-ups slow, pipeline prioritization unclear.",
    solution: "Centralized, AI-powered CRM with automated qualification, pipeline insights, and lead prioritization — fully integrated with your AI engines.",
    outcome: "Less manual work, more closed deals, and complete visibility into your sales pipeline.",
    icon: Database,
    tags: ["Centralized Data", "Auto-Followup", "Smart Prioritization"],
    features: ["Unified lead database", "Auto follow-up sequences", "Pipeline scoring", "Revenue forecasting"],
    color: "hsl(210 100% 63%)",
  },
];

export const ServicesPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="pb-32 relative overflow-hidden">

      {/* ─── HERO: full-bleed video background ─── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          src="/videos/services-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-100"
          style={{ objectPosition: 'center center' }}
        />

        {/* Multi-layer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Hero content — anchored to bottom-left */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-[11px] font-bold uppercase tracking-widest text-white/60 backdrop-blur-sm">
              Our Systems
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6 text-foreground drop-shadow-2xl">
              Built to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Scale Revenue.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed">
              Modular AI infrastructure that replaces your fragmented stack with one unified growth engine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-24 space-y-40">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left sticky column */}
              <div className="lg:sticky lg:top-32">
                {/* Icon badge */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ background: `color-mix(in srgb, ${service.color} 15%, transparent)` }}
                >
                  <Icon className="w-8 h-8" style={{ color: service.color }} />
                </div>

                {/* Index */}
                <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-3">
                  {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </p>

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-foreground">
                  {service.title}
                </h2>
                <p className="text-lg text-white/40 mb-8 italic">{service.tagline}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Feature checklist */}
                <ul className="space-y-3 mb-10">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <RainbowButton
                  className="h-14 px-10 text-base"
                  onClick={() => window.open(BOOKING_URL, '_blank')}
                >
                  Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </RainbowButton>
              </div>

              {/* Right cards column */}
              <div className="space-y-6">
                {/* Problem */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative p-8 rounded-2xl glass overflow-hidden"
                >
                  <GlowingEffect spread={40} glow proximity={64} disabled={false} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative z-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3">
                      The Problem
                    </h4>
                    <p className="text-base text-white/70 leading-relaxed">{service.problem}</p>
                  </div>
                </motion.div>

                {/* Solution */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative p-8 rounded-2xl glass overflow-hidden"
                  style={{ borderColor: `color-mix(in srgb, ${service.color} 20%, transparent)` }}
                >
                  <GlowingEffect spread={40} glow proximity={64} disabled={false} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative z-10">
                    <h4
                      className="text-[10px] font-bold uppercase tracking-widest mb-3"
                      style={{ color: service.color }}
                    >
                      The Solution
                    </h4>
                    <p className="text-base text-white/70 leading-relaxed">{service.solution}</p>
                  </div>
                </motion.div>

                {/* Outcome */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative p-8 rounded-2xl overflow-hidden"
                  style={{
                    background: `color-mix(in srgb, ${service.color} 6%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${service.color} 15%, transparent)`,
                  }}
                >
                  <GlowingEffect spread={40} glow proximity={64} disabled={false} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative z-10">
                    <h4
                      className="text-[10px] font-bold uppercase tracking-widest mb-3"
                      style={{ color: service.color }}
                    >
                      The Outcome
                    </h4>
                    <p className="text-base text-white/80 leading-relaxed font-medium italic">
                      "{service.outcome}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 text-center mt-40"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-4">Ready to scale?</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
          Deploy your full<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            revenue engine today.
          </span>
        </h2>
        <p className="text-white/40 mb-10 text-lg">
          Book a strategy call and we'll map out exactly which systems your business needs.
        </p>
        <RainbowButton
          className="h-14 px-12 text-lg"
          onClick={() => window.open(BOOKING_URL, '_blank')}
        >
          Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
        </RainbowButton>
      </motion.div>
    </div>
  );
};
