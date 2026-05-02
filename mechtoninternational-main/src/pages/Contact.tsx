import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Calendar, User, Building, Clock, Shield, Globe, Award, MessageSquare } from "lucide-react";
import heroImg from "@/assets/factory.jpg"; // Reusing existing asset

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0B] text-white font-montserrat">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImg}
                        alt="Industrial Facility"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-14">
                    <h1 className="text-2xl md:text-5xl font-black uppercase tracking-wider mb-8 animate-fade-up leading-tight">
                        Get in Touch with <br /><span className="text-[#E10600]">Mechton International</span>
                    </h1>
                    <p className="text-[#B3B3B3] text-sm md:text-lg max-w-2xl mx-auto mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
                        Your trusted global partner in premium heavy equipment and OEM solutions.
                    </p>
                    <button
                        onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-block px-10 py-4 bg-[#E10600] text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:scale-105 transition-all duration-300 animate-fade-up opacity-0"
                        style={{ animationDelay: "0.4s" }}
                    >
                        Request a Quote
                    </button>
                </div>
            </section>

            {/* 2 & 3. Company Info & Inquiry Form */}
            <section id="inquiry" className="py-24 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-8 border-l-4 border-[#E10600] pl-4">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-[#121212] border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#E10600] transition-colors">
                                        <Building className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] md:text-sm font-bold uppercase text-[#B3B3B3] mb-1">Company Name</h3>
                                        <p className="text-base md:text-lg font-bold">Mechton International L.L.C-FZ</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-[#121212] border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#E10600] transition-colors">
                                        <User className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] md:text-sm font-bold uppercase text-[#B3B3B3] mb-1">Company Type</h3>
                                        <p className="text-base md:text-lg font-bold">Limited Liability Company</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-[#121212] border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#E10600] transition-colors">
                                        <MapPin className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] md:text-sm font-bold uppercase text-[#B3B3B3] mb-1">Address</h3>
                                        <p className="text-white text-sm md:text-base leading-relaxed">
                                            Meydan Grandstand, 6th Floor<br />
                                            Meydan Road, Nad Al Sheba<br />
                                            Dubai, U.A.E.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-[#121212] border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#E10600] transition-colors">
                                        <Calendar className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] md:text-sm font-bold uppercase text-[#B3B3B3] mb-1">Formation Date</h3>
                                        <p className="text-base md:text-lg font-bold">26/12/2025</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-[#121212] border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#E10600] transition-colors">
                                        <Mail className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] md:text-sm font-bold uppercase text-[#B3B3B3] mb-1">Email</h3>
                                        <a href="mailto:info@mechtoninternational.com" className="text-base md:text-lg font-bold hover:text-[#E10600] transition-colors">
                                            info@mechtoninternational.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Inquiry Form */}
                    <div className="bg-[#121212] p-6 md:p-10 border border-white/5 rounded-sm">
                        <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-8">Send an <span className="text-[#E10600]">Inquiry</span></h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Full Name</label>
                                    <input type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Company Name</label>
                                    <input type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="Company Ltd." />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Email Address</label>
                                    <input type="email" className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="email@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Phone Number</label>
                                    <input type="tel" className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Country</label>
                                <input type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm" placeholder="Country" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Product Category</label>
                                <select className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm cursor-pointer">
                                    <option value="">Select Category</option>
                                    <option value="Engine Parts">Engine Parts</option>
                                    <option value="Generator Parts">Generator Parts</option>
                                    <option value="Earthmoving">Earthmoving Parts</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-[#B3B3B3] tracking-wider">Message</label>
                                <textarea className="w-full bg-black border border-white/10 p-4 text-white focus:border-[#E10600] focus:outline-none transition-colors rounded-sm h-32" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-[#E10600] text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-[#c20500] hover:shadow-[0_0_20px_rgba(225,6,0,0.3)] transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 4. Google Map Section */}
            <section className="bg-[#121212] py-12 border-t border-b border-[#E10600]/20">
                <div className="container mx-auto px-6 mb-8 text-center">
                    <h2 className="text-xl md:text-2xl font-black uppercase text-white">Our <span className="text-[#E10600]">Location</span></h2>
                </div>
                <div className="w-full h-[400px] relative grayscale invert contrast-125">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.3039!3d25.1587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69023186259f%3A0x6b44a7065910fa8!2sMeydan%20Grandstand!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                    {/* Map overlay to ensure dark theme feel if filter doesn't work perfectly on all browsers */}
                    <div className="absolute inset-0 bg-[#E10600]/5 pointer-events-none mix-blend-overlay"></div>
                </div>
            </section>

            {/* 5. Business Hours Section */}
            <section className="py-20 bg-[#0B0B0B]">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-block border-b-2 border-[#E10600] pb-2 mb-8">
                        <Clock className="mx-auto text-[#E10600] mb-2 w-6 h-6 md:w-8 md:h-8" />
                        <h2 className="text-xl md:text-2xl font-black uppercase text-white">Business Hours</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-[#121212] p-4 md:p-6 rounded-sm border border-white/5">
                            <h3 className="text-base md:text-lg font-bold text-white mb-2">Mon - Fri</h3>
                            <p className="text-sm md:text-[#B3B3B3]">9:00 AM – 6:00 PM</p>
                        </div>
                        <div className="bg-[#121212] p-4 md:p-6 rounded-sm border border-white/5">
                            <h3 className="text-base md:text-lg font-bold text-white mb-2">Saturday</h3>
                            <p className="text-sm md:text-[#B3B3B3]">9:00 AM – 2:00 PM</p>
                        </div>
                        <div className="bg-[#121212] p-4 md:p-6 rounded-sm border border-white/5">
                            <h3 className="text-base md:text-lg font-bold text-white mb-2">Sunday</h3>
                            <p className="text-[#E10600] text-sm md:text-base font-bold">Closed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Contact Us Section */}
            <section className="py-20 bg-[#121212] border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-black border border-white/10 flex items-center justify-center rounded-full mb-4 group-hover:border-[#E10600] group-hover:shadow-[0_0_15px_rgba(225,6,0,0.3)] transition-all">
                                <Shield className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                            </div>
                            <h3 className="text-[10px] md:text-sm font-bold uppercase text-white tracking-wider">Trusted OEM Distributor</h3>
                        </div>

                        <div className="text-center group">
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-black border border-white/10 flex items-center justify-center rounded-full mb-4 group-hover:border-[#E10600] group-hover:shadow-[0_0_15px_rgba(225,6,0,0.3)] transition-all">
                                <Globe className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                            </div>
                            <h3 className="text-[10px] md:text-sm font-bold uppercase text-white tracking-wider">Global Shipping Network</h3>
                        </div>

                        <div className="text-center group">
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-black border border-white/10 flex items-center justify-center rounded-full mb-4 group-hover:border-[#E10600] group-hover:shadow-[0_0_15px_rgba(225,6,0,0.3)] transition-all">
                                <Award className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                            </div>
                            <h3 className="text-[10px] md:text-sm font-bold uppercase text-white tracking-wider">Premium Brand Partnerships</h3>
                        </div>

                        <div className="text-center group">
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-black border border-white/10 flex items-center justify-center rounded-full mb-4 group-hover:border-[#E10600] group-hover:shadow-[0_0_15px_rgba(225,6,0,0.3)] transition-all">
                                <MessageSquare className="text-white group-hover:text-[#E10600] transition-colors" size={20} />
                            </div>
                            <h3 className="text-[10px] md:text-sm font-bold uppercase text-white tracking-wider">Fast Response Support</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
