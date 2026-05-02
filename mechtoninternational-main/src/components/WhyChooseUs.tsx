import { Shield, Award, Globe, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Top Brand Partners",
    description: "We source exclusively from the world's most trusted heavy equipment manufacturers.",
    mobileBg: "from-blue-600/20 to-blue-600/5",
    mobileAccent: "bg-blue-500/15",
    mobileColor: "text-blue-400",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "Every machine meets rigorous international quality and safety certifications.",
    mobileBg: "from-amber-600/20 to-amber-600/5",
    mobileAccent: "bg-amber-500/15",
    mobileColor: "text-amber-400",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Seamless logistics and delivery to 20+ countries across 5 continents.",
    mobileBg: "from-emerald-600/20 to-emerald-600/5",
    mobileAccent: "bg-emerald-500/15",
    mobileColor: "text-emerald-400",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    description: "Comprehensive service, spare parts, and technical support for every machine we sell.",
    mobileBg: "from-red-600/20 to-red-600/5",
    mobileAccent: "bg-primary/15",
    mobileColor: "text-primary",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">

        {/* ══════════ DESKTOP — 100% original ══════════ */}
        <div className="hidden sm:block">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground">
              The Mechton Advantage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center group p-8 rounded bg-card border-glow-red">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold uppercase text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ MOBILE ONLY — modern horizontal cards ══════════ */}
        <div className="sm:hidden">
          <div className="mb-10">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Why Choose Us</p>
            <h2 className="text-[1.5rem] font-black uppercase text-foreground leading-tight">
              The Mechton <span className="text-primary">Advantage</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group relative flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br ${feature.mobileBg} border border-white/5 overflow-hidden`}
              >
                <span className="absolute top-3 right-4 text-[10px] font-black text-white/10">0{i + 1}</span>
                <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${feature.mobileAccent}`}>
                  <feature.icon className={`w-6 h-6 ${feature.mobileColor}`} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
