import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS, HALTER_ASSETS } from './constants';
import { GalleryPhoto } from './types';
import { Camera, Instagram, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const GallerySection: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'semi-outdoor' | 'indoor' | 'moments'>('all');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredPhotos = GALLERY_PHOTOS.filter(
        (p) => filter === 'all' || p.category === filter
    );

    // Keyboard navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
            }
            if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredPhotos.length]);

    const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

    return (
        <section id="galeri" className="py-20 bg-[#F9EEDA] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="font-['Courgette',cursive] text-2xl sm:text-3xl text-[#DD5D36] block mb-2">
                        Galeri
                    </span>
                    <h2 className="font-['Paytone_One',sans-serif] text-3xl sm:text-4xl md:text-5xl text-[#122664] tracking-tight mb-4">
                        Slice, Snap, Share 📸
                    </h2>
                    <p className="font-['Be_Vietnam_Pro',sans-serif] text-base text-[#122664]/80">
                        Bagikan momenmu di Halter Coffee dan tag{' '}
                        <a
                            href="https://instagram.com/haltercoffee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#DD5D36] hover:underline inline-flex items-center gap-1"
                        >
                            <span>@haltercoffee</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>{' '}
                        di Instagram untuk masuk ke gallery feed kami!
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
                    {[
                        { id: 'all', label: 'Semua Suasana' },
                        { id: 'semi-outdoor', label: 'Semi-Outdoor' },
                        { id: 'indoor', label: 'Indoor & Bar' },
                        { id: 'moments', label: 'Momen Bersama' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setFilter(tab.id as any)}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border-2 cursor-pointer ${
                                filter === tab.id
                                    ? 'bg-[#122664] text-white border-[#122664] shadow-xs'
                                    : 'bg-white text-[#122664] border-[#122664]/15 hover:border-[#122664]/40'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Photos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPhotos.map((photo, index) => (
                        <div
                            key={photo.id}
                            onClick={() => setLightboxIndex(index)}
                            className="group relative h-80 rounded-3xl overflow-hidden border-3 border-[#122664] shadow-[6px_6px_0px_#122664] hover:shadow-[8px_8px_0px_#DD5D36] cursor-pointer transition-all duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                                loading="lazy"
                            />
                            {/* Overlay caption */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Instagram className="w-4 h-4 text-[#F2BF4A]" />
                                    <span className="text-xs font-bold text-[#F2BF4A]">@haltercoffee</span>
                                </div>
                                <p className="text-sm font-medium leading-snug">{photo.caption}</p>
                                <span className="mt-3 text-[11px] text-white/70 uppercase tracking-wider font-semibold">
                                    Klik untuk memperbesar
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activePhoto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors z-20"
                        aria-label="Tutup Galeri"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Nav Prev */}
                    <button
                        type="button"
                        onClick={() =>
                            setLightboxIndex(
                                (lightboxIndex! - 1 + filteredPhotos.length) % filteredPhotos.length
                            )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors z-20 hidden sm:block"
                        aria-label="Foto Sebelumnya"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Nav Next */}
                    <button
                        type="button"
                        onClick={() =>
                            setLightboxIndex((lightboxIndex! + 1) % filteredPhotos.length)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors z-20 hidden sm:block"
                        aria-label="Foto Selanjutnya"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Lightbox Image Container */}
                    <div className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center">
                        <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl max-h-[70vh] bg-black">
                            <img
                                src={activePhoto.url}
                                alt={activePhoto.caption}
                                className="w-full h-full max-h-[70vh] object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center text-white px-4">
                            <p className="text-base font-semibold">{activePhoto.caption}</p>
                            <p className="text-xs text-white/70 mt-1">
                                Foto {lightboxIndex! + 1} dari {filteredPhotos.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Checkerboard Pattern Divider */}
            <div className="w-full mt-20 overflow-hidden h-5 sm:h-6 opacity-90 select-none">
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
