import React from 'react';
import { HALTER_ASSETS, CAFE_INFO } from './constants';
import { MapPin, Clock, Instagram, ArrowUp, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="kontak" className="bg-[#122664] text-white pt-16 pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    {/* Brand & Address */}
                    <div className="lg:col-span-5 space-y-4">
                        <img
                            src={HALTER_ASSETS.logo}
                            alt="Halter Coffee"
                            className="h-12 w-auto  "
                            loading="lazy"
                        />
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                            Kedai kopi & pizza yang mengusung kehangatan pertemanan dan ruang diskusi bagi komunitas di Malang.
                        </p>

                        <div className="pt-2 space-y-2.5 text-sm text-white/80">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#DD5D36] shrink-0 mt-0.5" />
                                <span>{CAFE_INFO.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#F2BF4A] shrink-0" />
                                <span>{CAFE_INFO.hours}</span>
                            </div>
                        </div>

                        <div className="pt-3">
                            <a
                                href={CAFE_INFO.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all"
                            >
                                <MapPin className="w-3.5 h-3.5 text-[#F2BF4A]" />
                                <span>Buka Petunjuk Arah di Google Maps</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Nav Links */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="font-['Paytone_One',sans-serif] text-base text-[#F2BF4A] tracking-wider uppercase">
                            Jelajahi
                        </h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>
                                <a href="#home" className="hover:text-[#DD5D36] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#tentang" className="hover:text-[#DD5D36] transition-colors">
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a href="#menu" className="hover:text-[#DD5D36] transition-colors">
                                    Daftar Menu
                                </a>
                            </li>
                            <li>
                                <a href="#pizza-builder" className="hover:text-[#DD5D36] transition-colors">
                                    Volcano Pizza Simulator
                                </a>
                            </li>
                            <li>
                                <a href="#galeri" className="hover:text-[#DD5D36] transition-colors">
                                    Galeri Suasana
                                </a>
                            </li>
                            <li>
                                <a href="#misi" className="hover:text-[#DD5D36] transition-colors">
                                    Misi & Service Bintang 6
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Connect */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="font-['Paytone_One',sans-serif] text-base text-[#F2BF4A] tracking-wider uppercase">
                            Terhubung dengan Halter
                        </h4>
                        <p className="text-xs text-white/70 leading-relaxed">
                            Ikuti cerita harian, menu baru, dan keseruan komunitas Halter Coffee melalui media sosial kami.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href={CAFE_INFO.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#DD5D36] flex items-center justify-center text-white transition-colors"
                                aria-label="Instagram Halter Coffee"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={`https://wa.me/${CAFE_INFO.whatsapp}?text=${encodeURIComponent(CAFE_INFO.whatsappDefaultText)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                                aria-label="WhatsApp Halter Coffee"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Back to Top */}
                        <div className="pt-4">
                            <button
                                type="button"
                                onClick={scrollToTop}
                                className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors cursor-pointer group"
                            >
                                <span className="p-1.5 rounded-lg bg-white/10 group-hover:bg-[#DD5D36] transition-colors">
                                    <ArrowUp className="w-4 h-4" />
                                </span>
                                <span>Kembali ke Atas</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
                    <p>© {new Date().getFullYear()} Halter Coffee Malang. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Dibuat dengan <Heart className="w-3.5 h-3.5 text-[#DD5D36] fill-[#DD5D36]" /> untuk pencinta kopi & pizza.
                    </p>
                </div>
            </div>
        </footer>
    );
};
