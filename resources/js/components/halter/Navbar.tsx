import React, { useState, useEffect } from "react";
import { HALTER_ASSETS, CAFE_INFO } from "./constants";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpenNow, setIsOpenNow] = useState(true);

    useEffect(() => {
        const heightHome = document.getElementById("home")?.offsetHeight;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > (heightHome ?? 20));
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Malang WIB is UTC+7
        const checkOpenStatus = () => {
            const now = new Date();
            const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
            const wibDate = new Date(utcTime + 3600000 * 7);
            const hours = wibDate.getHours();
            setIsOpenNow(
                hours >= CAFE_INFO.openHour && hours < CAFE_INFO.closeHour,
            );
        };
        checkOpenStatus();
        const interval = setInterval(checkOpenStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Tentang", href: "#tentang" },
        { name: "Menu", href: "#menu" },

        { name: "Galeri", href: "#galeri" },
        { name: "Misi Kami", href: "#misi" },
    ];

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            setMobileMenuOpen(false);
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 h-16 sm:h-20 transition-colors duration-200 ${
                    isScrolled
                        ? "bg-[#F9EEDA]/95 backdrop-blur-md shadow-xs border-b-2 border-[#122664]/10"
                        : "bg-[#2D52C1] border-b-2 border-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
                    {/* Brand Logo */}
                    <a
                        href="#home"
                        className="group flex items-center gap-3 transition-transform hover:scale-102"
                        aria-label="Halter Coffee Home"
                    >
                        <img
                            src={HALTER_ASSETS.logo}
                            alt="Halter Coffee"
                            className="h-8 sm:h-11 w-auto object-contain drop-shadow-xs transition-transform group-hover:rotate-1"
                            width="160"
                            height="44"
                        />
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`${isScrolled ? "text-[#122664]" : "text-[#F9EEDA]"} text-[15px] font-medium hover:text-[#DD5D36] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DD5D36] hover:after:w-full after:transition-all after:duration-200`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Action: CTA Button */}
                    <div className="hidden sm:flex items-center gap-4">
                        <button
                            type="button"
                            onClick={onOpenOrderModal}
                            className="bg-[var(--color-halter-yellow)] text-[#122664] font-bold text-sm sm:text-base px-6 py-2 rounded-2xl border-2 border-[#122664] shadow-[0_4px_0_#122664] hover:bg-[#c94f2a] hover:shadow-[0_5px_0_#122664] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#122664] transition-all cursor-pointer select-none"
                        >
                            Hubungi Kami
                        </button>
                    </div>

                    {/* Mobile Menu Hamburger */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-xl text-[#122664] hover:bg-[#122664]/10 transition-colors"
                            aria-label={
                                mobileMenuOpen ? "Tutup Menu" : "Buka Menu"
                            }
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Off-Canvas Drawer (Outside header so fixed inset-0 covers full screen properly) */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
                    {/* Full Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer Panel */}
                    <div className="relative w-full max-w-xs sm:max-w-sm bg-[#F9EEDA] h-screen shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l-4 border-[#2D52C1] z-10">
                        <div>
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-[#122664]/10">
                                <img
                                    src={HALTER_ASSETS.logo}
                                    alt="Halter Coffee"
                                    className="h-8 w-auto"
                                />
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-xl bg-white/80 hover:bg-white text-[#122664] border border-[#122664]/20 transition-colors cursor-pointer"
                                    aria-label="Tutup Menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Status badge in mobile */}
                            <div className="mt-4 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 border border-[#122664]/10 text-xs font-semibold text-[#122664]">
                                <span
                                    className={`w-2.5 h-2.5 rounded-full ${
                                        isOpenNow
                                            ? "bg-emerald-500 animate-pulse"
                                            : "bg-amber-500"
                                    }`}
                                />
                                <span>
                                    {isOpenNow
                                        ? "Kedai Buka (11:00 - 00:00 WIB)"
                                        : "Tutup Sementara (Buka 11:00 WIB)"}
                                </span>
                            </div>

                            {/* Navigation List */}
                            <nav className="mt-6 flex flex-col gap-1.5">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) =>
                                            scrollToSection(e, link.href)
                                        }
                                        className="px-4 py-3 rounded-xl text-base font-semibold text-[#122664] hover:bg-[#2D52C1]/10 hover:text-[#2D52C1] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Drawer Bottom Actions */}
                        <div className="pt-6 border-t border-[#122664]/10 space-y-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onOpenOrderModal();
                                }}
                                className="w-full bg-[#DD5D36] text-[#F9EEDA] font-bold text-base py-3 rounded-2xl border-2 border-[#122664] shadow-[0_4px_0_#122664] hover:bg-[#c94f2a] active:translate-y-1 active:shadow-[0_1px_0_#122664] transition-all cursor-pointer select-none"
                            >
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
