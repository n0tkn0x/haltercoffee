import React, { useState, useEffect } from "react";
import { HALTER_ASSETS, CAFE_INFO } from "./constants";
import {
    UtensilsCrossed,
    Sparkles,
    Star,
    MapPin,
    ChevronRight,
} from "lucide-react";
import { MarqueeTicker } from "./MarqueeTicker";

interface HeroSectionProps {
    onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    onOpenOrderModal,
}) => {
    const [activeStickerTip, setActiveStickerTip] = useState<string | null>(
        null,
    );
    const [isOpenNow, setIsOpenNow] = useState(true);

    useEffect(() => {
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

    const stickers = [
        {
            id: "welcome",
            src: HALTER_ASSETS.stickers.welcome,
            alt: "Welcome",
            tip: "Selamat datang di rumah kumpul kita! 🏡",
            className:
                "top-10 -left-6 sm:-left-10 w-28 sm:w-36 md:w-44 -rotate-6 animate-float",
        },
        {
            id: "daily-dose",
            src: HALTER_ASSETS.stickers.dailyDose,
            alt: "Daily Dose",
            tip: "Secangkir es kopi susu pendahuluan siap segarkan harimu! ☕️",
            className:
                "bottom-16 -left-4 sm:left-4 w-24 sm:w-32 rotate-12 animate-float-reverse",
        },
        {
            id: "sticker1",
            src: HALTER_ASSETS.stickers.sticker1,
            alt: "Halter Sticker",
            tip: "Good times & pizza slices guaranteed! 🍕",
            className:
                "top-8 -right-4 sm:-right-8 w-24 sm:w-32 rotate-6 animate-float",
        },
        {
            id: "wave-red",
            src: HALTER_ASSETS.stickers.waveRed,
            alt: "Wave Decor",
            tip: "Slicing togetherness in every bite!",
            className: "bottom-20 -right-4 sm:right-4 w-28 sm:w-36 -rotate-3",
        },
    ];

    const stats = [
        { value: "4.9★", label: "Google Rating" },
        { value: "5000+", label: "Pelanggan Setia" },
        { value: "15 min", label: "Waktu Saji" },
    ];

    return (
        <section
            id="home"
            className="relative max-h-screen pt-24 pb-0 md:pt-32 overflow-hidden bg-[var(--color-halter-blue)]"
        >
            {/* Subtle grid overlay */}
            <div className="up-grid-bg fixed inset-0 pointer-events-none z-0" />

            {/* Radial glow accents */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20"
                    style={{
                        background:
                            "radial-gradient(ellipse, #F2BF4A 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
                    style={{
                        background:
                            "radial-gradient(ellipse, #DD5D36 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto text-center relative">
                    {/* ── Floating Interactive Stickers (Desktop & Tablet only) ── */}
                    {stickers.map((stk) => (
                        <div
                            key={stk.id}
                            className={`absolute hidden sm:block ${stk.className} cursor-pointer group transition-transform duration-300 hover:scale-110 select-none z-20`}
                            onClick={() =>
                                setActiveStickerTip(
                                    activeStickerTip === stk.id ? null : stk.id,
                                )
                            }
                            title="Klik saya!"
                        >
                            <img
                                src={stk.src}
                                alt={stk.alt}
                                className="w-full h-auto drop-shadow-lg transition-transform group-hover:rotate-6"
                                loading="eager"
                                width="180"
                                height="80"
                            />
                            {activeStickerTip === stk.id && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-[#122664] text-white text-xs font-semibold rounded-xl shadow-xl whitespace-nowrap z-30 animate-fade-in border border-white/10">
                                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#122664] rotate-45 border-l border-t border-white/10" />
                                    {stk.tip}
                                </div>
                            )}
                        </div>
                    ))}



                    {/* ── Main Heading ── */}
                    <h1 className="font-paytone-one [-webkit-text-stroke:1px_#122664] uppercase text-shadow-[0px_8px_0px_#122664] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-white leading-[1.05] mb-5">
                        Welcome{" "}
                        <span className="relative inline-block">
                            Home
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 220 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M4 6 C50 2, 170 9, 216 5"
                                    stroke="#F2BF4A"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* ── Sub-heading ── */}
                    <p className="font-['Be_Vietnam_Pro',sans-serif] text-base sm:text-lg md:text-xl text-white/75 max-w-xl mx-auto leading-relaxed mb-4">
                        Nikmati{" "}
                        <span className="font-bold text-[#F2BF4A]">
                            Volcano Pizza
                        </span>{" "}
                        khas Halter Coffee, pizza terbaik di Malang — bukan
                        sekadar rasa, tapi merayakan setiap momen kebersamaan
                        yang hangat dan tak terlupakan.
                    </p>

                    {/* ── Social Proof Stars ── */}
                    <div className="flex items-center justify-center gap-1 mb-10">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-[#F2BF4A] text-[#F2BF4A]"
                            />
                        ))}
                        <span className="ml-2 text-white/60 text-sm font-medium">
                            4.9/5 dari{" "}
                            <span className="text-white font-semibold">
                                200+ ulasan
                            </span>{" "}
                            Google
                        </span>
                    </div>

                    {/* ── CTA Buttons ── */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
                        {/* Primary: Order */}
                        <button
                            type="button"
                            onClick={onOpenOrderModal}
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F2BF4A] hover:bg-[#e4b03b] text-[#122664] font-bold text-base px-8 py-4 rounded-2xl border-2 border-[#122664] shadow-[0_5px_0_#0e1d4d] hover:shadow-[0_6px_0_#0e1d4d] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#0e1d4d] transition-all duration-150 cursor-pointer select-none"
                        >
                            <Sparkles className="w-5 h-5 text-[#DD5D36] transition-transform group-hover:rotate-12" />
                            <span>Reservasi / Order Sekarang</span>
                        </button>

                        {/* Secondary: Menu */}
                        <a
                            href="#menu"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-2xl border-2 border-white/25 hover:border-white/50 backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        >
                            <UtensilsCrossed className="w-5 h-5 transition-transform group-hover:rotate-12" />
                            <span>Lihat Menu</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    {/* ── Stats Row ── */}
                    <div className="flex items-center justify-center gap-6 sm:gap-10 mb-14">
                        {stats.map((stat, idx) => (
                            <React.Fragment key={stat.label}>
                                <div className="text-center">
                                    <div className="font-paytone-one text-xl sm:text-2xl text-white leading-none">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/50 text-xs mt-1 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                                {idx < stats.length - 1 && (
                                    <div className="h-8 w-px bg-white/15 hidden sm:block" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom strip: Marquee + Checkerboard ── */}
            <div className="mt-2">
                <MarqueeTicker
                    bgColor="bg-[#122664]"
                    textColor="text-white"
                    reverse={false}
                />
                <img
                    src={HALTER_ASSETS.checkerboard2}
                    alt="Checkerboard Pattern"
                    className="w-full h-auto object-cover block"
                />
            </div>
        </section>
    );
};
