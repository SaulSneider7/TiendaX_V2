
import React from 'react';
import { ShoppingCart, Instagram, Heart, Send, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
// import { WHATSAPP_LINK, INSTAGRAM_URL } from '../constants';

interface FooterProps {
    onNavigate?: (view: 'home' | 'blog') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        producto: [
            { name: 'Características', href: '#beneficios', type: 'home' },
            { name: 'Precios', href: '#precios', type: 'home' },
            { name: 'Blog de Ventas', href: 'blog', type: 'blog' },
            { name: 'Guía de inicio', href: '#', type: 'home' },
        ],
        compañia: [
            { name: 'Sobre nosotros', href: '#', type: 'home' },
            { name: 'Contacto', href: '#', type: 'home' },
            { name: 'Blog', href: 'blog', type: 'blog' },
            { name: 'Empleos', href: '#', type: 'home' },
        ],
        legal: [
            { name: 'Privacidad', href: '#', type: 'home' },
            { name: 'Términos', href: '#', type: 'home' },
            { name: 'Cookies', href: '#', type: 'home' },
        ]
    };

    const handleLinkClick = (e: React.MouseEvent, link: { href: string, type: string }) => {
        if (link.type === 'blog' && onNavigate) {
            e.preventDefault();
            onNavigate('blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (link.href.startsWith('#') && onNavigate) {
            // Si estamos en blog, volvemos a home
            onNavigate('home');
        }
    };

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
            {/* Decorative dot background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">

                    <div className="col-span-2">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            onClick={() => onNavigate && onNavigate('home')}
                            className="flex items-center space-x-2 mb-8 cursor-pointer"
                        >
                            <div className="bg-blue-600 p-2 rounded-xl flex items-center justify-center">
                                <ShoppingCart className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-gray-900">
                                Tienda<span className="text-blue-600">X</span>
                            </span>
                        </motion.div>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-sm">
                            La plataforma de ventas por WhatsApp más grande de Perú. Únete a miles de emprendedores digitales.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: '#2563eb' }}
                                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Producto</h4>
                        <ul className="space-y-4">
                            {footerLinks.producto.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link)}
                                        className="text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Compañía</h4>
                        <ul className="space-y-4">
                            {footerLinks.compañia.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link)}
                                        className="text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Boletín</h4>
                        <p className="text-gray-500 mb-6 font-medium">Recibe consejos de ventas semanalmente.</p>
                        <form className="flex space-x-2" onSubmit={e => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="flex-grow px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                            />
                            <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-400">
                    <p>© {currentYear} TiendaX Perú. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {footerLinks.legal.map(link => (
                            <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">{link.name}</a>
                        ))}
                    </div>
                    <p className="mt-4 md:mt-0 flex items-center">
                        Hecho con <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> en Lima.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
