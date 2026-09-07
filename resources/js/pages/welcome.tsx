import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/components/halter/Navbar";
import { HeroSection } from "@/components/halter/HeroSection";
import { MarqueeTicker } from "@/components/halter/MarqueeTicker";
import { TogethernessSection } from "@/components/halter/TogethernessSection";
import { MenuSection } from "@/components/halter/MenuSection";
import { StoryMissionSection } from "@/components/halter/StoryMissionSection";
import { CommunityVibes } from "@/components/halter/CommunityVibes";
import { GallerySection } from "@/components/halter/GallerySection";
import { Footer } from "@/components/halter/Footer";
import { OrderModal } from "@/components/halter/OrderModal";
import { MenuItem } from "@/components/halter/types";
import { HALTER_ASSETS } from "@/components/halter/constants";

export default function Welcome() {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [selectedItemForOrder, setSelectedItemForOrder] =
        useState<MenuItem | null>(null);

    const handleOpenOrderWithItem = (item: MenuItem) => {
        setSelectedItemForOrder(item);
        setIsOrderModalOpen(true);
    };

    const handleOpenGeneralOrder = () => {
        setSelectedItemForOrder(null);
        setIsOrderModalOpen(true);
    };

    return (
        <>
            <Head>
                <title>Welcome </title>
                <meta
                    name="description"
                    content="Nikmati Volcano Pizza khas Halter Coffee, pizza terbaik di Malang. Bukan hanya rasa, tapi merayakan setiap momen kebersamaan."
                />
                <meta property="og:title" content="Halter Coffee" />
                <meta
                    property="og:description"
                    content="Nikmati Volcano Pizza khas Halter Coffee, pizza terbaik di Malang. Slicing Togetherness."
                />
                <meta
                    property="og:image"
                    content="/images/assets/wp-content/uploads/2026/01/halter-logo.webp"
                />
            </Head>

            <div className="min-h-screen bg-[#F9EEDA] text-[#122664] font-['Be_Vietnam_Pro',sans-serif] selection:bg-[#DD5D36] selection:text-white relative">
                {/* Header Navigation */}
                <Navbar onOpenOrderModal={handleOpenGeneralOrder} />

                {/* Main Landing Sections */}
                <main>
                    {/* Hero Section */}
                    <HeroSection onOpenOrderModal={handleOpenGeneralOrder} />


                    {/* Merayakan Momen Kebersamaan / Slicing Togetherness */}
                    <TogethernessSection />

                    {/* Community Reaction Live Bar */}
                    <CommunityVibes />

                    {/* Yang Harus Kamu Coba / Menu Explorer */}
                    <MenuSection onSelectOrder={handleOpenOrderWithItem} />

                    {/* Marquee Ticker 2 (Reverse) */}
                    <MarqueeTicker
                        bgColor="bg-[#DD5D36]"
                        textColor="text-white"
                        reverse={true}
                    />

                    {/* Bukan Cuma Soal Pizza, Tapi Cerita di Baliknya (Misi & 4 Pilar) */}
                    <StoryMissionSection />

                    {/* Slice, Snap, Share (Galeri Suasana & Lightbox) */}
                    <GallerySection />
                </main>

                {/* Footer */}
                <Footer />

                {/* Quick WhatsApp Order / Reservation Modal */}
                <OrderModal
                    isOpen={isOrderModalOpen}
                    onClose={() => setIsOrderModalOpen(false)}
                    preselectedItem={selectedItemForOrder}
                />
            </div>
        </>
    );
}
