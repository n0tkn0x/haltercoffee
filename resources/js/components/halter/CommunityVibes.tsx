import React, { useState, useEffect } from 'react';
import { Sparkles, ThumbsUp } from 'lucide-react';

interface VibeOption {
    id: string;
    emoji: string;
    label: string;
    defaultCount: number;
}

export const CommunityVibes: React.FC = () => {
    const options: VibeOption[] = [
        { id: 'coffee', emoji: '☕️', label: 'Fresh Brew', defaultCount: 234 },
        { id: 'pizza', emoji: '🍕', label: 'Volcano Pizza', defaultCount: 389 },
        { id: 'vibes', emoji: '✨', label: 'Cozy Vibes', defaultCount: 195 },
        { id: 'crew', emoji: '❤️', label: 'Crew Love', defaultCount: 267 },
    ];

    const [counts, setCounts] = useState<{ [key: string]: number }>({});
    const [clicked, setClicked] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const saved = localStorage.getItem('halter_vibe_counts');
        if (saved) {
            try {
                setCounts(JSON.parse(saved));
            } catch {
                initializeDefault();
            }
        } else {
            initializeDefault();
        }
    }, []);

    const initializeDefault = () => {
        const init: { [key: string]: number } = {};
        options.forEach((opt) => {
            init[opt.id] = opt.defaultCount;
        });
        setCounts(init);
    };

    const handleVote = (id: string) => {
        const next = {
            ...counts,
            [id]: (counts[id] || 0) + 1,
        };
        setCounts(next);
        setClicked({ ...clicked, [id]: true });
        localStorage.setItem('halter_vibe_counts', JSON.stringify(next));

        setTimeout(() => {
            setClicked((prev) => ({ ...prev, [id]: false }));
        }, 600);
    };

    return (
        <section className="py-12 bg-white/70 border-y-2 border-[#122664]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="font-['Courgette',cursive] text-xl text-[#DD5D36] block">
                            Community Love
                        </span>
                        <h3 className="font-['Paytone_One',sans-serif] text-xl sm:text-2xl text-[#122664]">
                            Bagikan Reaksimu untuk Halter!
                        </h3>
                    </div>

                    {/* Reaction Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        {options.map((opt) => (
                            <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleVote(opt.id)}
                                className={`group flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 border-[#122664] font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-[3px_3px_0px_#122664] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none bg-white hover:bg-[#F9EEDA] ${
                                    clicked[opt.id] ? 'scale-110 bg-[#F2BF4A]' : ''
                                }`}
                            >
                                <span className="text-xl transition-transform group-hover:scale-125">
                                    {opt.emoji}
                                </span>
                                <span className="text-[#122664]">{opt.label}</span>
                                <span className="px-2 py-0.5 rounded-full bg-[#122664]/10 text-[#122664] text-xs">
                                    {counts[opt.id] || opt.defaultCount}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
