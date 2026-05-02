import { Factory, Droplets, Zap, Pickaxe, Building2, Ship } from "lucide-react";

const industries = [
  { icon: Building2, name: "Construction", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: Pickaxe, name: "Mining", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Droplets, name: "Oil & Gas", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: Zap, name: "Power & Energy", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: Ship, name: "Marine & Ports", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Factory, name: "Manufacturing", color: "text-primary", bg: "bg-primary/10" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* ══════════ DESKTOP — 100% original ══════════ */}
        <div className="hidden md:block">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Sectors</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex items-center gap-4 p-6 rounded bg-card border-glow-red cursor-pointer"
              >
                <industry.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0" />
                <span className="font-bold uppercase tracking-wider text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ MOBILE ONLY — colored bubble 2-col tiles ══════════ */}
        <div className="md:hidden">
          <div className="mb-10">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Sectors</p>
            <h2 className="text-[2rem] font-black uppercase text-foreground leading-tight">
              Industries <span className="text-primary">We Serve</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="group relative flex flex-col items-center justify-center gap-3
                    py-7 px-4 rounded-2xl bg-card border border-white/5
                    hover:border-primary/25 transition-all duration-300
                    cursor-pointer active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  <div className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-xl ${industry.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${industry.color}`} />
                  </div>
                  <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {industry.name}
                  </span>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/0 transition-all duration-500 rounded-full" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
