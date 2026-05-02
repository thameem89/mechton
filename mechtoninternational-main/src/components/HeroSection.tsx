import { Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — original */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Mobile-only decorative layers */}
      <div className="md:hidden absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
      <div className="md:hidden absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content wrapper
          - Mobile: pt-24 clears the fixed navbar (~72px), pb-10 gives bottom breathing room
          - Desktop: no extra padding, flex centering handles it
      */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24 pb-10 md:pt-0 md:pb-0">
        <div className="max-w-4xl mx-auto">

          {/* Mobile-only badge chip */}
          <div className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-5">
            <Zap size={11} className="text-primary fill-primary animate-pulse" />
            <span className="text-primary text-[9px] font-bold uppercase tracking-[0.2em]">
              Global Heavy Equipment
            </span>
          </div>

          {/* Headline
              Mobile:  text-[2rem]  (~32px) — compact, fits on screen
              sm:      text-5xl     (~48px)
              md+:     text-7xl     (~72px) — original desktop size
          */}
          <h1 className="text-[2rem] sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight text-foreground opacity-0 animate-fade-up">
            Powering Industries.
            <br />
            <span className="text-primary">Global Reach.</span>
          </h1>

          {/* Sub-text — smaller on mobile to save vertical space */}
          <p
            className="mt-4 md:mt-6 text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            The international premium seller of heavy equipment &amp; machinery with product solutions from top-notch brands all over the world.
          </p>

          {/* CTA buttons
              Mobile: stacked full-width, compact py-3
              sm+:    row, auto-width, original py-4
          */}
          <div
            className="mt-6 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#products"
              className="flex items-center justify-center px-8 py-3 md:py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded hover:glow-red transition-all duration-300"
            >
              Explore Products
            </a>
            <a
              href="#cta"
              className="flex items-center justify-center px-8 py-3 md:py-4 border-2 border-primary text-primary font-bold uppercase tracking-wider text-sm rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Request Quote
            </a>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade — original */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
