import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Scan } from "lucide-react";
import catGenerator from "@/assets/cat-generator.jpg";
import catEngine from "@/assets/cat-engine.jpg";
import catEarthmoving from "@/assets/cat-earthmoving.jpg";
import catUndercarriage from "@/assets/cat-undercarriage.jpg";
import catGet from "@/assets/cat-get.jpg";
import catAutomobile from "@/assets/cat-automobile.jpg";
import catOil from "@/assets/cat-oil.jpg";
import catFilters from "@/assets/cat-filters.jpg";
import catDrill from "@/assets/cat-drill.jpg";

const products = [
  { name: "Generator Parts", description: "Spare parts for generators and power solutions.", image: catGenerator },
  { name: "Engine Parts", description: "Diesel engine components and accessories.", image: catEngine },
  { name: "Earthmoving Parts", description: "Heavy earthmoving equipment parts.", image: catEarthmoving },
  { name: "Undercarriage", description: "Tracks, rollers, idlers, sprockets and more.", image: catUndercarriage },
  { name: "G.E.T. Tools", description: "Buckets, teeth, tips, adapters and edges.", image: catGet },
  { name: "Auto Parts", description: "Automotive components and spare parts.", image: catAutomobile },
  { name: "Oil & Grease", description: "Lubricants and industrial greases.", image: catOil },
  { name: "Filtration", description: "Filters for fuel, oil, air, and hydraulic systems.", image: catFilters },
  { name: "Drill & Crusher", description: "Equipment for drilling and crushing operations.", image: catDrill },
];

const ProductsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollSnaps = emblaApi ? emblaApi.scrollSnapList() : [];

  return (
    <section id="products" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Blueprint Grid Background — original */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header — ORIGINAL desktop layout restored ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Scan className="w-4 h-4 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase">Our Products</span>
            </div>
            {/* Heading — original text-4xl md:text-5xl + text-outline-white class for "Categories" */}
            <h2 className="text-2xl md:text-5xl font-black uppercase text-white tracking-tight">
              Product <span className="categories-gradient">Categories</span>
            </h2>
          </div>

          {/* Nav buttons — original clipPath polygon style on desktop, rounded on mobile */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-primary hover:text-primary text-white/60 transition-all duration-300 max-md:rounded-lg"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-primary hover:text-primary text-white/60 transition-all duration-300 max-md:rounded-lg"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Embla Carousel ── */}
        {/*
          Mobile:  bleed edge-to-edge (-mx-6 / px-6), 75vw cards, rounded-2xl
          Desktop: original container-width, original clipPath polygon cards
        */}
        <div className="overflow-hidden -mx-6 md:mx-0 px-6 md:px-0" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className={[
                  // Widths: 75vw on mobile peek, original sizes on sm+
                  "flex-none w-[75vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
                  "group relative bg-[#0F0F0F] hover:bg-[#141414] transition-colors duration-500",
                  // Mobile only: rounded corners + border
                  "max-md:rounded-2xl max-md:overflow-hidden max-md:border max-md:border-white/5 max-md:hover:border-primary/30",
                ].join(" ")}
                // Desktop only: original polygon clip-path
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
              >
                {/* Technical Corners — original */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 group-hover:border-primary/50 transition-colors duration-300 z-30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 group-hover:border-primary/50 transition-colors duration-300 z-30" />

                {/* Image — original */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 z-20 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent translate-y-[-100%] group-hover:animate-scan pointer-events-none h-1/2 w-full blur-sm" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                  />
                </div>

                {/* Content — original p-6 */}
                <div className="p-6 relative">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold uppercase text-white tracking-wide group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="h-0.5 w-8 bg-primary/50 mt-2 group-hover:w-full transition-all duration-500" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-end pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-primary transition-colors cursor-pointer">
                      Explore
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators — original */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`h-1 transition-all duration-300 ${idx === selectedIndex ? "w-8 bg-primary" : "w-3 bg-white/20"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Original CSS — text-outline-white + scan animation */}
      <style>{`
        .text-outline-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
        .categories-gradient {
          background: linear-gradient(90deg, #E10600 0%, #ff4d3a 60%, #ff7a3a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 18px rgba(225,6,0,0.45));
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan {
          animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
