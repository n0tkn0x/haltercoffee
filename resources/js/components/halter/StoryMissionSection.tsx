import React from 'react';
import { HALTER_ASSETS } from './constants';
import { Award, Timer, Pizza, HeartHandshake } from 'lucide-react';

export const StoryMissionSection: React.FC = () => {
    const pillars = [
        {
            id: 'service',
            iconImg: HALTER_ASSETS.icons.star6,
            fallbackIcon: Award,
            title: 'Service Bintang 6',
            description: 'Ramah, tulus, dan bikin kamu merasa spesial layaknya bertamu ke rumah sahabat lama.',
            badgeColor: 'bg-[#2D52C1]',
        },
        {
            id: 'speed',
            iconImg: HALTER_ASSETS.icons.speed15,
            fallbackIcon: Timer,
            title: 'Siap dalam 15 Menit',
            description: 'Gak pakai lama, kualitas tetap juara. Pizza hangat dan espresso segar tersaji tepat waktu.',
            badgeColor: 'bg-[#DD5D36]',
        },
        {
            id: 'volcano',
            iconImg: HALTER_ASSETS.icons.volcanoPizza,
            fallbackIcon: Pizza,
            title: 'The Volcano Pizza',
            description: 'Menu ikonik khas Halter yang wajib dicoba bareng teman. Sensasi lelehan keju tak tertandingi.',
            badgeColor: 'bg-[#F2BF4A]',
        },
        {
            id: 'togetherness',
            iconImg: HALTER_ASSETS.icons.togetherness,
            fallbackIcon: HeartHandshake,
            title: 'Irisan Kebersamaan',
            description: 'Tempat di mana setiap tawa jadi lebih bermakna. Ruang aman untuk diskusi dan bertukar ide positif.',
            badgeColor: 'bg-[#317039]',
        },
    ];

    return (
        <section id="misi" className="py-24 bg-[#F9EEDA] relative overflow-hidden">
            {/* Background Wave Graphic Accent */}
            <div className="absolute top-0 left-0 right-0 w-full h-12 opacity-80 pointer-events-none">
                <img
                    src={HALTER_ASSETS.stickers.waveBg}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <span className="font-['Courgette',cursive] text-2xl sm:text-3xl text-[#DD5D36] block mb-2">
                        Misi Kami
                    </span>
                    <h2 className="font-['Paytone_One',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#122664] tracking-tight mb-4">
                        Bukan Cuma Soal Pizza, Tapi Cerita di Baliknya
                    </h2>
                    <p className="font-['Be_Vietnam_Pro',sans-serif] text-base text-[#122664]/80 max-w-xl mx-auto">
                        Di setiap seduhan kopi dan irisan pizza, ada ketulusan crew Halter untuk menghadirkan pengalaman berkesan bagi setiap orang yang melangkah masuk.
                    </p>

                    {/* Halter Good Vibes Sticker */}
                    <img
                        src={HALTER_ASSETS.stickers.goodVibes}
                        alt="Good Vibes"
                        className="hidden md:block absolute -top-10 -left-10 w-28 lg:w-36 drop-shadow-md rotate-6 animate-float"
                        loading="lazy"
                    />
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="bg-white rounded-3xl border-3 border-[#122664] p-6 sm:p-8 shadow-[6px_6px_0px_#122664] hover:shadow-[8px_8px_0px_#2D52C1] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
                        >
                            <div>
                                {/* Icon Frame */}
                                <div className="w-16 h-16 rounded-2xl bg-[#F9EEDA] border-2 border-[#122664] p-2.5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xs">
                                    <img
                                        src={pillar.iconImg}
                                        alt={pillar.title}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                        onError={(e) => {
                                            // Fallback if network fails
                                            (e.currentTarget as HTMLElement).style.display = 'none';
                                        }}
                                    />
                                </div>

                                <h3 className="font-['Paytone_One',sans-serif] text-xl text-[#122664] mb-3 group-hover:text-[#2D52C1] transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="font-['Be_Vietnam_Pro',sans-serif] text-sm text-[#122664]/75 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-[#122664]/10 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#DD5D36]">Halter Promise</span>
                                <span className="text-xs font-bold text-[#122664]">✦ ✦ ✦</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
