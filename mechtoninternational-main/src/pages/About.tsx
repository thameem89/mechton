import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/factory.jpg"; // Reusing existing asset
import { Target, Eye, Star, CheckCircle, Globe, Users, TrendingUp, Package, ArrowRight } from "lucide-react";

// CountUp Component (Reused from AboutSection)
const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(target / (duration / 16)); // 60fps
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-2xl md:text-5xl font-black text-[#E10600]">
        {count}{suffix}
      </span>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-montserrat">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="About Mechton"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]" />
        </div>

        {/* Added pt-14 here */}
        <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-14">
          <h1 className="text-2xl md:text-5xl font-black uppercase tracking-wider mb-6 animate-fade-up leading-tight">
            About <br /><span className="text-[#E10600]">Mechton International</span>
          </h1>
          <p className="text-[#B3B3B3] text-sm md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Leading global supplier of heavy equipment, machinery parts, and premium industrial solutions.
          </p>
          <a
            href="/store"
            className="inline-block px-10 py-4 bg-[#E10600] text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:scale-105 transition-all duration-300 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Our Products
          </a>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-[#E10600]/20 rounded-sm blur-lg group-hover:bg-[#E10600]/30 transition-all duration-500"></div>
            <img src={heroImg} alt="Our Story" className="relative w-full rounded-sm border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-black uppercase text-white mb-6 border-l-4 border-[#E10600] pl-4">Our Story</h2>
            <div className="space-y-6 text-[#B3B3B3] text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-white">Mechton International L.L.C-FZ</strong> is a global leader in heavy machinery solutions and premium OEM parts distribution. Established in 2025, we bring world-class products from trusted global manufacturers to industrial markets across the world.
              </p>
              <p>
                We are committed to delivering reliable, high-performance equipment and parts that help grow your business. Our expertise in sourcing, logistics, and product knowledge ensures that our clients receive the right solutions, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Values */}
      <section className="py-24 bg-[#121212] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-black p-8 border border-white/5 rounded-sm hover:border-[#E10600] transition-colors group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#121212] flex items-center justify-center rounded-full mb-6 group-hover:bg-[#E10600]/10 transition-colors">
                <Target className="text-white group-hover:text-[#E10600] transition-colors" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase text-white mb-4">Our Mission</h3>
              <p className="text-[#B3B3B3] leading-relaxed">
                To empower industries with reliable machinery and world-class product solutions from global OEM partners.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-black p-8 border border-white/5 rounded-sm hover:border-[#E10600] transition-colors group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#121212] flex items-center justify-center rounded-full mb-6 group-hover:bg-[#E10600]/10 transition-colors">
                <Eye className="text-white group-hover:text-[#E10600] transition-colors" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase text-white mb-4">Our Vision</h3>
              <p className="text-[#B3B3B3] leading-relaxed">
                To be the most trusted international supplier in heavy equipment parts and industrial solutions.
              </p>
            </div>

            {/* Values */}
            <div className="bg-black p-8 border border-white/5 rounded-sm hover:border-[#E10600] transition-colors group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#121212] flex items-center justify-center rounded-full mb-6 group-hover:bg-[#E10600]/10 transition-colors">
                <Star className="text-white group-hover:text-[#E10600] transition-colors" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase text-white mb-4">Core Values</h3>
              <ul className="space-y-2 text-[#B3B3B3] text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#E10600] rounded-full" /> Customer Focus</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#E10600] rounded-full" /> Quality Assurance</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#E10600] rounded-full" /> Integrity & Transparency</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#E10600] rounded-full" /> Innovation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#E10600] rounded-full" /> Global Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-black uppercase text-white">Why <span className="text-[#E10600]">Partners Trust Us</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Premium Global OEM Brands",
            "High Quality & Durable Parts",
            "Fast Worldwide Shipping",
            "Experienced Industry Specialists",
            "Customized Industrial Solutions",
            "Excellent After-Sales Support"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 md:p-6 bg-[#121212] border border-white/5 rounded-sm hover:border-[#E10600]/50 transition-colors group">
              <CheckCircle className="text-[#B3B3B3] group-hover:text-[#E10600] transition-colors shrink-0" size={20} />
              <span className="text-white font-bold uppercase text-xs md:text-sm tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Global Footprint */}
      <section className="py-24 bg-black border-t border-b border-[#E10600]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#E10600]/5 pattern-grid opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <Globe className="mx-auto text-[#B3B3B3] mb-4 opacity-50" size={40} />
              <CountUp target={20} suffix="+" />
              <p className="mt-2 text-sm font-bold uppercase text-[#B3B3B3] tracking-widest">Countries Served</p>
            </div>
            <div>
              <Users className="mx-auto text-[#B3B3B3] mb-4 opacity-50" size={40} />
              <CountUp target={500} suffix="+" />
              <p className="mt-2 text-sm font-bold uppercase text-[#B3B3B3] tracking-widest">Global Clients</p>
            </div>
            <div>
              <Package className="mx-auto text-[#B3B3B3] mb-4 opacity-50" size={40} />
              <CountUp target={1000} suffix="+" />
              <p className="mt-2 text-sm font-bold uppercase text-[#B3B3B3] tracking-widest">Successful Deliveries</p>
            </div>
            <div>
              <TrendingUp className="mx-auto text-[#B3B3B3] mb-4 opacity-50" size={40} />
              <CountUp target={25} suffix="+" />
              <p className="mt-2 text-sm font-bold uppercase text-[#B3B3B3] tracking-widest">Brand Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#121212] to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-4xl font-black uppercase text-white mb-8">
            Ready to partner with <br /><span className="text-[#E10600]">Mechton International?</span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#E10600] text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:shadow-[0_0_30px_rgba(225,6,0,0.5)] hover:scale-105 transition-all duration-300"
          >
            Request a Quote
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
