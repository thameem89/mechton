import { Mail, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background — original */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      {/* Mobile-only red glow orbs */}
      <div className="md:hidden absolute -top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="md:hidden absolute -bottom-20 right-1/4 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      {/* ══════════ DESKTOP — 100% original ══════════ */}
      <div className="hidden md:block relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-foreground mb-6">
          Partner With <span className="text-primary">Industry Leaders</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Ready to power your next project? Connect with Mechton International for premium heavy equipment
          solutions from the world's best brands.
        </p>
        <a
          href="mailto:info@mechtoninternational.com"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded glow-red hover:scale-105 transition-transform duration-300"
        >
          Get a Quote
        </a>
      </div>

      {/* ══════════ MOBILE ONLY — glassmorphic card ══════════ */}
      <div className="md:hidden relative z-10 container mx-auto px-5">
        <div className="rounded-3xl border border-primary/20 bg-white/[0.02] backdrop-blur-sm p-8 text-center
          shadow-[0_0_60px_rgba(225,6,0,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]">

          {/* Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles size={11} className="text-primary" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Get in Touch</span>
          </div>

          <h2 className="text-[clamp(1.8rem,8vw,2.8rem)] font-black uppercase text-foreground leading-tight mb-5">
            Partner With <span className="text-primary">Industry Leaders</span>
          </h2>

          <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-8 leading-relaxed">
            Ready to power your next project? Connect with Mechton International for premium heavy equipment solutions.
          </p>

          {/* Two stacked CTAs */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href="mailto:info@mechtoninternational.com"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm rounded-xl glow-red active:scale-95 transition-all duration-300"
            >
              <Mail size={15} />
              Get a Quote
            </a>
            <a
              href="/store"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/15 bg-white/5 text-white font-bold uppercase tracking-wider text-sm rounded-xl active:scale-95 transition-all duration-300"
            >
              Browse Store
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/5">
            {[["15+", "Years"], ["500+", "Machines"], ["20+", "Countries"]].map(([val, label], i, arr) => (
              <>
                <div key={label} className="text-center">
                  <p className="text-white font-black text-lg">{val}</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest">{label}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-white/10" />}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
