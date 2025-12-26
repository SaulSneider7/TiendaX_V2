import React, { useState } from 'react';
import {
    ShoppingCart,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    Send,
    CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTAGRAM_URL, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const footerLinks = {
        producto: [
            { name: 'Características', href: '#beneficios' },
            { name: 'Precios', href: '#precios' },
            { name: 'Guía de inicio', href: '#como-funciona' }
        ],
        compañia: [
            { name: 'Sobre nosotros', href: '#' },
            { name: 'Contacto', href: '#' },
            { name: 'Blog', href: '#' }
        ],
        legal: [
            { name: 'Privacidad', href: '#' },
            { name: 'Términos', href: '#' },
            { name: 'Cookies', href: '#' }
        ]
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setSubmitted(true);
        setEmail('');

        // Simula envío (API real luego)
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(#3b82f6 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">

                    {/* Marca */}
                    <div className="lg:col-span-2">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="bg-blue-600 p-2 rounded-xl">
                                <ShoppingCart className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-gray-900">
                                Tienda<span className="text-blue-600">X</span>
                            </span>
                        </motion.div>

                        <p className="text-gray-500 mb-6 max-w-sm">
                            La plataforma de ventas por WhatsApp más potente del Perú.
                            Diseñada para emprendedores que quieren vender más.
                        </p>

                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href={INSTAGRAM_URL}
                                    whileHover={{ y: -4 }}
                                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Producto */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">
                            Producto
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.producto.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 hover:text-blue-600 transition-colors font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compañía */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">
                            Compañía
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.compañia.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 hover:text-blue-600 transition-colors font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Boletín */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-black uppercase tracking-widest mb-4">
                            Boletín
                        </h4>
                        <p className="text-gray-500 mb-5">
                            Recibe tips reales para vender más por WhatsApp.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="tu@email.com"
                                            className="flex-grow px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition shadow-lg"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center space-x-2 text-green-600 font-semibold"
                                    >
                                        <CheckCircle className="w-6 h-6" />
                                        <span>Correo registrado correctamente</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>

                {/* FOOTER INFERIOR */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-400">
                    <p>© {currentYear} TiendaX Perú. Todos los derechos reservados.</p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {footerLinks.legal.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <p className="mt-4 md:mt-0">
                        Desarrollado por{' '}
                        <a
                            href="https://saulsneider7.github.io/snei_web/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Saul Sneider
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
