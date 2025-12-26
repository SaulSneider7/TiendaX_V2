
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

interface NavbarProps {
    onNavigate: (view: 'home' | 'blog') => void;
    currentView: 'home' | 'blog';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beneficios', href: '#beneficios' },
        { name: 'Proceso', href: '#como-funciona' },
        { name: 'Negocios', href: '#segmentos' },
        { name: 'Comparativa', href: '#diferenciales' },
        { name: 'Precios', href: '#precios' },
        { name: 'Blog', href: 'blog' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (href === 'blog') {
            onNavigate('blog');
            return;
        }

        // Si estamos en el blog y queremos ir a una sección de home
        if (currentView === 'blog') {
            onNavigate('home');
            // Pequeño delay para que el componente home cargue y podamos scrollear
            setTimeout(() => {
                const targetId = href.replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            window.history.pushState(null, '', href);
        } else if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate('home');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 group cursor-pointer"
                    >
                        <div className="bg-blue-600 p-2 rounded-xl shrink-0 shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
                            <ShoppingCart className="text-white w-5 h-5" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-gray-900">
                            Tienda<span className="text-blue-600">X</span>
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`px-4 py-2 text-sm font-black transition-all rounded-xl ${(link.href === 'blog' && currentView === 'blog') || (link.href !== 'blog' && currentView === 'home' && window.location.hash === link.href)
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:flex items-center space-x-2 px-6 py-2.5 text-sm font-black rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
                        >
                            <span>Empezar Ahora</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
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
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="flex items-center px-4 py-4 text-lg font-black text-gray-900 hover:bg-blue-50 rounded-2xl transition-colors"
                                >
                                    {link.name}
                                </a>
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
