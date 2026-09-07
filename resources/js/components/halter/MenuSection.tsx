import React, { useState } from 'react';
import { MENU_ITEMS, HALTER_ASSETS } from './constants';
import { MenuItem } from './types';
import { Search, Sparkles, Coffee, Pizza, Utensils, Zap, ExternalLink, X, MessageCircle } from 'lucide-react';

interface MenuSectionProps {
    onSelectOrder: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectOrder }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeDetailItem, setActiveDetailItem] = useState<MenuItem | null>(null);

    const categories = [
        { id: 'all', label: 'Semua Menu', icon: Sparkles },
        { id: 'coffee', label: 'Coffee Special', icon: Coffee },
        { id: 'pizza', label: 'Volcano Pizza', icon: Pizza },
        { id: 'pasta', label: 'Pasta & Mains', icon: Utensils },
        { id: 'snacks', label: 'Snacks', icon: Zap },
    ];

    const filteredItems = MENU_ITEMS.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="menu" className="py-20 bg-[#F9EEDA] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Halter Script and Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12 relative">
                    <span className="font-['Courgette',cursive] text-2xl sm:text-3xl text-[#DD5D36] block mb-2">
                        Menu Andalan
                    </span>
                    <h2 className="font-['Paytone_One',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#122664] tracking-tight mb-4">
                        Yang Harus Kamu Coba
                    </h2>
                    <p className="font-['Be_Vietnam_Pro',sans-serif] text-base text-[#122664]/80 max-w-xl mx-auto">
                        Racikan spesial dari biji kopi kurasi terbaik hingga sajian pizza dan pasta lezat dengan kualitas terjamin dan harga terjangkau.
                    </p>

                    {/* Halter Decorative Yummy Foods Sticker */}
                    <img
                        src={HALTER_ASSETS.stickers.yummyFoods}
                        alt="Yummy Foods"
                        className="hidden md:block absolute -top-8 -right-6 w-28 lg:w-36 drop-shadow-md -rotate-6 pointer-events-none"
                        loading="lazy"
                    />
                </div>

                {/* Search & Category Filter Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border-2 cursor-pointer ${
                                        isActive
                                            ? 'bg-[#2D52C1] text-white border-[#2D52C1] shadow-sm'
                                            : 'bg-white/80 text-[#122664] border-[#122664]/15 hover:border-[#2D52C1]/40'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Instant Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#122664]/40" />
                        <input
                            type="text"
                            placeholder="Cari kopi, pizza, pasta..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/90 border-2 border-[#122664]/20 text-[#122664] placeholder:text-[#122664]/40 text-sm focus:outline-hidden focus:border-[#2D52C1] transition-all"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#122664]/50 hover:text-[#122664]"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Menu Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-3xl border-3 border-[#122664] overflow-hidden shadow-[6px_6px_0px_#122664] hover:shadow-[8px_8px_0px_#122664] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                        >
                            {/* Card Image with Badge */}
                            <div className="relative h-60 w-full overflow-hidden bg-[#F9EEDA] border-b-3 border-[#122664]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {item.badge && (
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#F2BF4A] text-[#122664] border-2 border-[#122664] shadow-xs">
                                        {item.badge}
                                    </span>
                                )}
                                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-xl text-xs font-['Paytone_One',sans-serif] bg-[#122664] text-white">
                                    {item.priceFormatted}
                                </span>
                            </div>

                            {/* Card Details */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-['Paytone_One',sans-serif] text-xl text-[#122664] mb-1.5 group-hover:text-[#2D52C1] transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-[#DD5D36] font-semibold mb-3 line-clamp-1">
                                        {item.tagline}
                                    </p>
                                    <p className="font-['Be_Vietnam_Pro',sans-serif] text-sm text-[#122664]/75 leading-relaxed line-clamp-3 mb-4">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-4 border-t border-[#122664]/10 flex items-center justify-between gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setActiveDetailItem(item)}
                                        className="text-xs font-bold text-[#2D52C1] hover:text-[#122664] underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                                    >
                                        <span>Lihat Detail</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => onSelectOrder(item)}
                                        className="px-4 py-2 rounded-full bg-[#DD5D36] hover:bg-[#c94f2a] text-white text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                                    >
                                        Pesan Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-16 bg-white/70 rounded-3xl border-2 border-dashed border-[#122664]/30">
                        <p className="text-base font-bold text-[#122664] mb-2">
                            Menu tidak ditemukan
                        </p>
                        <p className="text-xs text-[#122664]/60 mb-4">
                            Coba ubah kata kunci pencarian atau kategori di atas.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedCategory('all');
                                setSearchQuery('');
                            }}
                            className="px-4 py-1.5 rounded-full bg-[#2D52C1] text-white text-xs font-semibold"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </div>

            {/* Product Detail Modal / Drawer */}
            {activeDetailItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
                        onClick={() => setActiveDetailItem(null)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-[#F9EEDA] w-full max-w-xl rounded-3xl border-4 border-[#122664] shadow-[10px_10px_0px_#122664] overflow-hidden z-10 animate-fade-in max-h-[90vh] flex flex-col">
                        {/* Modal Header */}
                        <div className="relative h-56 bg-white border-b-4 border-[#122664]">
                            <img
                                src={activeDetailItem.image}
                                alt={activeDetailItem.name}
                                className="w-full h-full object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => setActiveDetailItem(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-[#122664] border-2 border-[#122664] shadow-md"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl font-['Paytone_One',sans-serif] text-sm bg-[#122664] text-white">
                                {activeDetailItem.priceFormatted}
                            </span>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto space-y-5">
                            <div>
                                <h3 className="font-['Paytone_One',sans-serif] text-2xl text-[#122664]">
                                    {activeDetailItem.name}
                                </h3>
                                <p className="text-sm font-semibold text-[#DD5D36] mt-0.5">
                                    {activeDetailItem.tagline}
                                </p>
                            </div>

                            <p className="text-sm text-[#122664]/85 leading-relaxed">
                                {activeDetailItem.description}
                            </p>

                            {/* Flavor Profile Sliders */}
                            {activeDetailItem.flavorProfile && (
                                <div className="bg-white/80 p-4 rounded-2xl border-2 border-[#122664]/20 space-y-3">
                                    <p className="text-xs font-bold text-[#122664] uppercase tracking-wider">
                                        Karakteristik Rasa:
                                    </p>
                                    <div className="space-y-2">
                                        <div>
                                            <div className="flex justify-between text-xs font-medium text-[#122664] mb-1">
                                                <span>Sweetness (Manis)</span>
                                                <span>{activeDetailItem.flavorProfile.sweetness} / 5</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#F2BF4A]"
                                                    style={{ width: `${(activeDetailItem.flavorProfile.sweetness / 5) * 100}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-xs font-medium text-[#122664] mb-1">
                                                <span>Boldness (Espresso / Rasa Kuat)</span>
                                                <span>{activeDetailItem.flavorProfile.boldness} / 5</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#DD5D36]"
                                                    style={{ width: `${(activeDetailItem.flavorProfile.boldness / 5) * 100}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-xs font-medium text-[#122664] mb-1">
                                                <span>Creaminess (Lembut Susu)</span>
                                                <span>{activeDetailItem.flavorProfile.creaminess} / 5</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#2D52C1]"
                                                    style={{ width: `${(activeDetailItem.flavorProfile.creaminess / 5) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Ingredients List */}
                            {activeDetailItem.ingredients && (
                                <div>
                                    <p className="text-xs font-bold text-[#122664] uppercase tracking-wider mb-2">
                                        Komposisi Bahan:
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeDetailItem.ingredients.map((ing) => (
                                            <span
                                                key={ing}
                                                className="px-2.5 py-1 rounded-lg bg-white border border-[#122664]/15 text-xs text-[#122664]"
                                            >
                                                {ing}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer Action */}
                        <div className="p-4 bg-white/60 border-t-2 border-[#122664]/15 flex items-center justify-between gap-3">
                            <button
                                type="button"
                                onClick={() => setActiveDetailItem(null)}
                                className="px-5 py-2.5 rounded-full border-2 border-[#122664] text-xs font-bold text-[#122664] hover:bg-white"
                            >
                                Tutup
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    const item = activeDetailItem;
                                    setActiveDetailItem(null);
                                    onSelectOrder(item);
                                }}
                                className="flex-1 flex items-center justify-center gap-2 bg-[#DD5D36] hover:bg-[#c94f2a] text-white font-bold py-2.5 px-5 rounded-full shadow-md text-xs cursor-pointer active:scale-95"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Pesan Ini Sekarang</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
