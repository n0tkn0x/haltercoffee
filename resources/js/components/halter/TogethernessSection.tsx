import React, { useState } from 'react';
import { HALTER_ASSETS } from './constants';
import { Sparkles, Users, Coffee, ArrowRight, Heart } from 'lucide-react';

export const TogethernessSection: React.FC = () => {
    const [likes, setLikes] = useState(148);
    const [hasLiked, setHasLiked] = useState(false);

    const handleLike = () => {
        if (!hasLiked) {
            setLikes((prev) => prev + 1);
            setHasLiked(true);
        } else {
            setLikes((prev) => prev - 1);
            setHasLiked(false);
        }
    };

    return (
        <section id="tentang" className="relative py-20 bg-[#F9EEDA] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Tag and Title */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="font-['Courgette',cursive] text-2xl sm:text-3xl text-[#DD5D36] block mb-2">
                        Halter Coffee
                    </span>
                    <h2 className="font-['Paytone_One',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#122664] tracking-tight mb-4">
                        Merayakan Momen Kebersamaan
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-0.5 w-12 bg-[#DD5D36] rounded-full" />
                        <span className="font-['Paytone_One',sans-serif] text-lg sm:text-xl text-[#2D52C1]">
                            Slicing Togetherness
                        </span>
                        <span className="h-0.5 w-12 bg-[#DD5D36] rounded-full" />
                    </div>
                </div>

                {/* Main Content Grid: Image Collage Left, Story & Stickers Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Interactive Collage with Floating Halter Stickers */}
                    <div className="lg:col-span-7 relative">
                        {/* Halter Photo Grid */}
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="space-y-4">
                                <div className="relative group overflow-hidden rounded-3xl border-4 border-[#122664] shadow-lg transition-transform duration-300 hover:-rotate-1">
                                    <img
                                        src="https://haltercoffee.com/wp-content/uploads/2026/02/Semua-usia-bisa-quality-time-di-sini🤩Gak-hanya-muda-mudi-aja-kamu-juga-bisa-ajak-sekeluarga-b-768x960.webp"
                                        alt="Quality time di Halter"
                                        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                        <p className="text-white text-xs font-medium">Quality time untuk segala usia</p>
                                    </div>
                                </div>

                                <div className="relative group overflow-hidden rounded-3xl border-4 border-[#122664] shadow-lg transition-transform duration-300 hover:rotate-1">
                                    <img
                                        src="https://haltercoffee.com/wp-content/uploads/2026/02/Karena-kebahagiaan-sering-kali-sesederhana-nongkrong-bareng-sambil-menikmati-menu-kesukaan.Mau-n-3-768x960.webp"
                                        alt="Nongkrong di Halter Coffee"
                                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                        <p className="text-white text-xs font-medium">Nongkrong hangat sambil pizza time</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-8">
                                <div className="relative group overflow-hidden rounded-3xl border-4 border-[#122664] shadow-lg transition-transform duration-300 hover:rotate-1">
                                    <img
                                        src="https://haltercoffee.com/wp-content/uploads/2026/02/Sebaik-baiknya-kebahagiaan-adalah-kebahagiaan-yang-dibagi🤗Berbagi-pizza-adalah-cara-manis-meray-1-768x960.webp"
                                        alt="Berbagi Pizza Halter"
                                        className="w-full h-52 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                        <p className="text-white text-xs font-medium">Berbagi pizza, berbagi cerita</p>
                                    </div>
                                </div>

                                <div className="relative group overflow-hidden rounded-3xl border-4 border-[#122664] shadow-lg transition-transform duration-300 hover:-rotate-1">
                                    <img
                                        src="https://haltercoffee.com/wp-content/uploads/2026/02/Karena-kebahagiaan-sering-kali-sesederhana-nongkrong-bareng-sambil-menikmati-menu-kesukaan.Mau-n-1-768x960.webp"
                                        alt="Suasana Halter"
                                        className="w-full h-60 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                        <p className="text-white text-xs font-medium">Ruang kumpul yang selalu terbuka</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Retro Stickers from Halter */}
                        <img
                            src={HALTER_ASSETS.stickers.spendTime}
                            alt="Spend Time"
                            className="absolute -top-6 -left-6 w-24 sm:w-32 z-20 drop-shadow-md animate-float pointer-events-none"
                            loading="lazy"
                        />
                        <img
                            src={HALTER_ASSETS.stickers.smiley}
                            alt="Smiley"
                            className="absolute top-1/2 -left-8 w-20 sm:w-24 z-20 drop-shadow-md animate-float-reverse pointer-events-none"
                            loading="lazy"
                        />
                        <img
                            src={HALTER_ASSETS.stickers.eyes}
                            alt="Eyes"
                            className="absolute -bottom-6 left-1/3 w-16 sm:w-20 z-20 drop-shadow-md pointer-events-none"
                            loading="lazy"
                        />
                        <img
                            src={HALTER_ASSETS.stickers.gotToGrid}
                            alt="Got to Grid"
                            className="absolute -bottom-8 -right-4 w-28 sm:w-36 z-20 drop-shadow-md pointer-events-none"
                            loading="lazy"
                        />
                    </div>

                    {/* Right: Story Description & Interactive Community Box */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white/85 backdrop-blur-sm p-8 rounded-3xl border-3 border-[#122664] shadow-[6px_6px_0px_#122664] relative">
                            <div className="inline-block p-2.5 rounded-2xl bg-[#2D52C1]/10 text-[#2D52C1] mb-4">
                                <Users className="w-6 h-6" />
                            </div>

                            <h3 className="font-['Paytone_One',sans-serif] text-2xl sm:text-3xl text-[#122664] mb-4">
                                Rumah Bagi Cerita & Pertemanan
                            </h3>

                            <p className="font-['Be_Vietnam_Pro',sans-serif] text-base text-[#122664]/85 leading-relaxed mb-4">
                                <strong>Tuangkan ide dan perluas pertemananmu</strong> dalam suasana menyenangkan. Halter Coffee mengusung konsep interaksi hangat antara barista dengan teman-teman semua lewat kopi, pengalaman, hingga wadah diskusi terbuka.
                            </p>

                            <p className="font-['Be_Vietnam_Pro',sans-serif] text-base text-[#122664]/85 leading-relaxed mb-6">
                                Karena bagi kami, pizza dan kopi terasa jauh lebih nikmat saat dinikmati ramai-ramai. Inilah ruang kumpul yang kami bangun khusus untuk kamu dan orang-orang terdekatmu.
                            </p>

                            {/* Community Interactive High-Five / Like Counter */}
                            <div className="pt-6 border-t border-[#122664]/15 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold text-[#122664]/70">Suka suasana Halter?</p>
                                    <p className="text-sm font-bold text-[#122664]">
                                        {likes} orang merasa seperti di rumah
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleLike}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#122664] font-bold text-sm transition-all duration-200 cursor-pointer active:scale-90 ${
                                        hasLiked
                                            ? 'bg-[#DD5D36] text-white shadow-xs'
                                            : 'bg-white text-[#122664] hover:bg-[#F9EEDA]'
                                    }`}
                                >
                                    <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : 'text-[#DD5D36]'}`} />
                                    <span>{hasLiked ? 'Tersimpan!' : 'Love It'}</span>
                                </button>
                            </div>
                        </div>

                        {/* CTA Button to Explore Atmosphere */}
                        <div className="pt-2">
                            <a
                                href="#galeri"
                                className="inline-flex items-center gap-3 font-['Paytone_One',sans-serif] text-lg text-[#2D52C1] hover:text-[#DD5D36] transition-colors group cursor-pointer"
                            >
                                <span>Lihat Suasana Lengkap di Halter</span>
                                <span className="p-2 rounded-full bg-[#2D52C1] text-white group-hover:bg-[#DD5D36] transition-colors">
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkerboard Pattern Divider */}
            <div className="w-full mt-16 overflow-hidden h-5 sm:h-6 opacity-90 select-none">
                <img
                    src={HALTER_ASSETS.checkerboard1}
                    alt="Checkerboard Pattern"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
            </div>
        </section>
    );
};
