import React, { useState } from 'react';
import { MenuItem } from './types';
import { CAFE_INFO } from './constants';
import { X, MessageCircle, Calendar, Clock, Users, Coffee, Send } from 'lucide-react';

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    preselectedItem?: MenuItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
    isOpen,
    onClose,
    preselectedItem,
}) => {
    const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
    const [name, setName] = useState('');
    const [guests, setGuests] = useState('2');
    const [time, setTime] = useState('16:00');
    const [date, setDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    });
    const [notes, setNotes] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let text = `Halo Halter Coffee! 👋\n\n`;
        text += `Saya ingin ${orderType === 'dine-in' ? 'Reservasi Meja (Dine In)' : 'Pesan Takeaway / Pickup'}:\n`;
        if (name) text += `• Nama: ${name}\n`;
        if (orderType === 'dine-in') {
            text += `• Jumlah Orang: ${guests} orang\n`;
            text += `• Tanggal: ${date}\n`;
            text += `• Jam: ${time} WIB\n`;
        }
        if (preselectedItem) {
            text += `• Menu Pesanan: ${preselectedItem.name} (${preselectedItem.priceFormatted})\n`;
        }
        if (notes) {
            text += `• Catatan Khusus: ${notes}\n`;
        }
        text += `\nMohon info ketersediaannya ya. Terima kasih!`;

        const waUrl = `https://wa.me/${CAFE_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative bg-[#F9EEDA] w-full max-w-lg rounded-3xl border-4 border-[#122664] shadow-[10px_10px_0px_#122664] overflow-hidden z-10 animate-fade-in p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#122664]/10 mb-6">
                    <div>
                        <span className="font-['Courgette',cursive] text-lg text-[#DD5D36] block">
                            Halter Concierge
                        </span>
                        <h3 className="font-['Paytone_One',sans-serif] text-2xl text-[#122664]">
                            {preselectedItem ? `Pesan ${preselectedItem.name}` : 'Reservasi & Pesan Cepat'}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-black/5 text-[#122664]"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Order Type Tabs */}
                    <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-white/60 border border-[#122664]/20">
                        <button
                            type="button"
                            onClick={() => setOrderType('dine-in')}
                            className={`py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                orderType === 'dine-in'
                                    ? 'bg-[#2D52C1] text-white shadow-xs'
                                    : 'text-[#122664] hover:text-[#2D52C1]'
                            }`}
                        >
                            Dine-In (Makan di Tempat)
                        </button>
                        <button
                            type="button"
                            onClick={() => setOrderType('takeaway')}
                            className={`py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                orderType === 'takeaway'
                                    ? 'bg-[#2D52C1] text-white shadow-xs'
                                    : 'text-[#122664] hover:text-[#2D52C1]'
                            }`}
                        >
                            Takeaway / Pickup
                        </button>
                    </div>

                    {/* Customer Name */}
                    <div>
                        <label className="block text-xs font-bold text-[#122664] mb-1">
                            Nama Kamu
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Contoh: Sarah"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#122664]/20 text-[#122664] text-sm focus:border-[#2D52C1] focus:outline-hidden"
                        />
                    </div>

                    {orderType === 'dine-in' && (
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label className="block text-xs font-bold text-[#122664] mb-1">
                                    Jumlah Orang
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    className="w-full px-3 py-2 rounded-xl bg-white border-2 border-[#122664]/20 text-[#122664] text-sm focus:border-[#2D52C1] focus:outline-hidden"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#122664] mb-1">
                                    Tanggal
                                </label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full px-3 py-2 rounded-xl bg-white border-2 border-[#122664]/20 text-[#122664] text-xs sm:text-sm focus:border-[#2D52C1] focus:outline-hidden"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#122664] mb-1">
                                    Jam Kunjungan
                                </label>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-full px-3 py-2 rounded-xl bg-white border-2 border-[#122664]/20 text-[#122664] text-xs sm:text-sm focus:border-[#2D52C1] focus:outline-hidden"
                                />
                            </div>
                        </div>
                    )}

                    {preselectedItem && (
                        <div className="p-3 bg-white/90 rounded-xl border border-[#122664]/15 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <Coffee className="w-4 h-4 text-[#DD5D36]" />
                                <div>
                                    <p className="text-xs font-bold text-[#122664]">
                                        {preselectedItem.name}
                                    </p>
                                    <p className="text-[11px] text-gray-500">
                                        {preselectedItem.tagline}
                                    </p>
                                </div>
                            </div>
                            <span className="font-['Paytone_One',sans-serif] text-xs text-[#2D52C1]">
                                {preselectedItem.priceFormatted}
                            </span>
                        </div>
                    )}

                    {/* Notes */}
                    <div>
                        <label className="block text-xs font-bold text-[#122664] mb-1">
                            Catatan Tambahan (Opsional)
                        </label>
                        <textarea
                            rows={2}
                            placeholder="Contoh: Mau area semi-outdoor dekat tanaman, bawa laptop, etc."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-white border-2 border-[#122664]/20 text-[#122664] text-sm focus:border-[#2D52C1] focus:outline-hidden"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2.5 bg-[#DD5D36] hover:bg-[#c94f2a] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer text-sm"
                        >
                            <Send className="w-4 h-4" />
                            <span>Kirim ke WhatsApp Halter Coffee</span>
                        </button>
                        <p className="text-[11px] text-center text-[#122664]/60 mt-2">
                            Pesan akan otomatis diformat dan dibuka di aplikasi WhatsApp Anda.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
