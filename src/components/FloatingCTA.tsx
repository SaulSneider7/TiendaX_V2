
import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import {FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK, INSTAGRAM_URL } from '../constants';

const FloatingCTA: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center space-y-3">
            {/* Instagram Button */}
            <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 border-2 border-white"
                aria-label="Instagram"
            >
                <Instagram className="w-7 h-7" />
            </a>

            {/* WhatsApp Button with Hover Message */}
            <div className="relative flex flex-col items-center">
                {/* Tooltip Message */}
                <div
                    className={`absolute bottom-full mb-4 md:bottom-auto md:right-full md:mr-4 px-5 py-3 bg-white text-gray-800 text-sm font-bold rounded-2xl shadow-2xl border border-gray-100 whitespace-nowrap transition-all duration-300 transform ${showTooltip ? 'opacity-100 translate-y-0 md:translate-x-0 scale-100' : 'opacity-0 translate-y-4 md:translate-x-4 scale-95 pointer-events-none'
                        }`}
                >
                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>¡Hola! ¿En qué puedo ayudarte?</span>
                    </div>
                    <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45"></div>
                    <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white border-r border-t border-gray-100 rotate-45"></div>
                </div>

                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95 relative group border-2 border-white"
                    aria-label="WhatsApp"
                >
                    <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></span>
                    <FaWhatsapp className="w-9 h-9 relative z-10" />
                </a>
            </div>
        </div>
    );
};

export default FloatingCTA;
