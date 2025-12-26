import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const navLinks = [
    { name: 'Negocios', href: '#segmentos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Proceso', href: '#como-funciona' },
    { name: 'Comparativa', href: '#diferenciales' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Precios', href: '#precios' },
    { name: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleMobileNav = (hash: string) => {
        setIsMenuOpen(false);

        // Espera a que el menú se cierre antes de hacer scroll
        requestAnimationFrame(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                    ? 'py-2 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 group"
                    >
                        <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
                            <ShoppingCart className="text-white w-5 h-5" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-gray-900">
                            Tienda<span className="text-blue-600">X</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:flex items-center space-x-2 px-6 py-2.5 text-sm font-black rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                        >
                            <span>Empezar Ahora</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>

                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map(link => (
                                <button
                                    key={link.name}
                                    onClick={() => handleMobileNav(link.href)}
                                    className="flex w-full items-center px-4 py-4 text-lg font-bold text-gray-900 hover:bg-blue-50 rounded-2xl transition-colors text-left"
                                >
                                    {link.name}
                                </button>
                            ))}

                            <div className="pt-4 px-2">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 px-6 py-4 text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl"
                                >
                                    <span>Crear Mi Tienda</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
