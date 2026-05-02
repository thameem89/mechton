import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, ChevronRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/cat-earthmoving.jpg"; // Using existing asset

const brands = [
    "Perkins", "Caterpillar", "Cummins", "Kolbenschmidt", "Interstate McBee",
    "Mahle", "Miba", "Victor Reinz", "Goetze", "FP Diesel", "SLP", "CTP"
];

const brandDetails = [
    {
        name: "Kolbenschmidt",
        description: "Kolbenschmidt is a globally recognized manufacturer of high-quality engine components and precision parts engineered for performance and durability.",
        logo: "KS"
    },
    {
        name: "Caterpillar",
        description: "The world's leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.",
        logo: "CAT"
    },
    {
        name: "Cummins",
        description: "A global power leader that designs, manufactures, distributes and services a broad portfolio of power solutions.",
        logo: "CUM"
    },
    {
        name: "Perkins",
        description: "One of the world's leading providers of diesel and gas engines, with a history of design excellence spanning more than 85 years.",
        logo: "PER"
    },
    {
        name: "Interstate McBee",
        description: "Premier independent manufacturer and distributor of diesel engine parts and fuel injection components.",
        logo: "IM"
    },
];

const Store = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0B] text-white font-montserrat">
            <Navbar />

            {/* 1. Hero Banner */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImg}
                        alt="Industrial Machinery"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0B]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-14">
                    <h1 className="text-2xl md:text-6xl font-black uppercase tracking-wider mb-6 animate-fade-up">
                        Global OEM Brands & <br /><span className="text-[#E10600]">Industrial Partners</span>
                    </h1>
                    <p className="text-[#B3B3B3] text-sm md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
                        Premium spare parts and machinery solutions from world-leading manufacturers.
                    </p>
                    <a
                        href="#brands"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#E10600] text-white font-bold uppercase tracking-wider text-sm rounded hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] transition-all duration-300 animate-fade-up opacity-0"
                        style={{ animationDelay: "0.4s" }}
                    >
                        Browse All Brands
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            {/* 2. Brand Logo Strip */}
            <section className="py-10 border-b border-white/10 overflow-hidden bg-[#0B0B0B]">
                <div className="container mx-auto px-6 mb-4">
                    <p className="text-[#E10600] text-xs font-bold uppercase tracking-[0.2em]">Our Trusted Partners</p>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 px-4">
                        {[...brands, ...brands].map((brand, index) => (
                            <span
                                key={index}
                                className="text-2xl font-black uppercase text-white/20 hover:text-white hover:text-shadow-red transition-all duration-500 cursor-default"
                                style={{ textShadow: "none" }}
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. OEM Brand Listing */}
            <section id="brands" className="py-24 container mx-auto px-6">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                    <h2 className="text-xl md:text-3xl font-black uppercase text-white">OEM <span className="text-[#E10600]">Partners</span></h2>
                </div>

                <div className="space-y-4">
                    {brandDetails.map((brand) => (
                        <div
                            key={brand.name}
                            className="group grid md:grid-cols-[150px_1fr_auto] gap-8 items-center p-8 bg-[#121212] border border-white/5 rounded-sm hover:border-[#E10600]/50 hover:shadow-[0_0_30px_rgba(225,6,0,0.05)] transition-all duration-500"
                        >
                            {/* Logo Area */}
                            <div className="w-full h-24 bg-black flex items-center justify-center border border-white/10 group-hover:border-[#E10600]/30 transition-colors">
                                <span className="text-2xl font-black text-white/80">{brand.logo}</span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold uppercase text-white mb-2 group-hover:text-[#E10600] transition-colors">{brand.name}</h3>
                                <p className="text-[#B3B3B3] text-xs md:text-sm leading-relaxed max-w-2xl">
                                    {brand.description}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#E10600] text-[#E10600] font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-[#E10600] hover:text-white transition-all duration-300">
                                    <Download size={16} />
                                    Download Catalogue
                                </button>
                                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#E10600] text-white font-bold uppercase text-xs tracking-wider rounded-sm hover:shadow-[0_0_15px_rgba(225,6,0,0.4)] transition-all duration-300">
                                    View Products
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination (Optional) */}
                <div className="flex justify-center mt-12 gap-2">
                    <span className="text-[#B3B3B3] hover:text-white cursor-pointer px-3 py-1 text-sm font-medium transition-colors">Previous</span>
                    <span className="bg-[#E10600] text-white px-3 py-1 text-sm font-bold rounded-sm">1</span>
                    <span className="text-[#B3B3B3] hover:text-white cursor-pointer px-3 py-1 text-sm font-medium transition-colors">2</span>
                    <span className="text-[#B3B3B3] hover:text-white cursor-pointer px-3 py-1 text-sm font-medium transition-colors">3</span>
                    <span className="text-[#B3B3B3] hover:text-white cursor-pointer px-3 py-1 text-sm font-medium transition-colors">Next</span>
                </div>
            </section>

            {/* 5. Inquiry Section */}
            <section className="py-24 bg-black border-t border-t-[#E10600]/20 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-50"></div>

                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-4">Make an <span className="text-[#E10600]">Inquiry</span></h2>
                        <p className="text-sm md:text-base text-[#B3B3B3]">Looking for specific parts? Send us a request and we'll get back to you shortly.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Full Name</label>
                                <input type="text" className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Company Name</label>
                                <input type="text" className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="Your Company Ltd." />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Email Address</label>
                                <input type="email" className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Phone Number</label>
                                <input type="tel" className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Brand Interest</label>
                            <select className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm">
                                <option value="">Select a Brand</option>
                                {brands.map(b => <option key={b} value={b}>{b}</option>)}
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Message</label>
                            <textarea className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm h-32" placeholder="Tell us what you need..."></textarea>
                        </div>

                        <div className="pt-4 text-center">
                            <button type="submit" className="inline-flex items-center gap-2 px-10 py-4 bg-[#E10600] text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:scale-105 transition-all duration-300">
                                Send Inquiry
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Store;
