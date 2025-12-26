
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Clock, ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        // Target: January 1st of the next year
        const targetDate = new Date(`January 1, ${currentYear + 1} 00:00:00`);
        const difference = +targetDate - +now;

        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-56 overflow-hidden bg-white">
            {/* Elementos Decorativos de Fondo */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[100px] opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="text-center lg:text-left relative z-20"
                    >
                        <motion.div variants={item} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600/5 text-blue-700 border border-blue-100 mb-8 font-bold text-xs uppercase tracking-widest">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span>La plataforma #1 en Perú</span>
                        </motion.div>

                        <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[1] mb-8">
                            Tu Negocio <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">en WhatsApp</span>
                        </motion.h1>

                        <motion.p variants={item} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Crea tu catálogo digital profesional en 5 minutos. Recibe pedidos directos al chat y aumenta tus ventas sin pagar comisiones por transacción.
                        </motion.p>

                        {/* Contador de Oferta Estilizado al 1 de Enero */}
                        <motion.div variants={item} className="bg-gray-50 border border-gray-100 p-5 rounded-[2.5rem] mb-10 inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mx-auto lg:mx-0 shadow-sm">
                            <div className="flex items-center text-red-600 font-black text-sm uppercase tracking-tighter">
                                <Clock className="w-5 h-5 mr-2 animate-pulse" />
                                La promo termina el 1 de Enero:
                            </div>
                            <div className="flex space-x-6">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-gray-900 leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">Días</span>
                                </div>
                                <span className="text-2xl font-black text-gray-200">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-gray-900 leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">Hrs</span>
                                </div>
                                <span className="text-2xl font-black text-gray-200">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-gray-900 leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">Min</span>
                                </div>
                                <span className="text-2xl font-black text-gray-200">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-blue-600 leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">Seg</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-black rounded-[2rem] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
                            >
                                <span>Crear Mi Tienda Ahora</span>
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </motion.a>
                            <div className="flex flex-col items-start space-y-1">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                    <span className="text-sm font-black text-gray-900 ml-1">4.9/5</span>
                                </div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Confianza total</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="relative perspective-1000 hidden sm:block"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="relative mx-auto w-[320px] md:w-[380px] lg:w-[420px] aspect-[9/18.5] bg-gray-900 rounded-[3rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
                                    <img
                                        src="./Hero_tiendaX.png"
                                        alt="TiendaX Catálogo en Celular"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 w-full h-12 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 border-b border-gray-100">
                                        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-12 top-1/4 bg-white p-5 rounded-3xl shadow-2xl border border-gray-50 flex flex-col space-y-2 z-20"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="bg-green-100 p-2 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-900">Venta Exitosa</p>
                                        <p className="text-[10px] text-gray-500">S/ 249.00</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-16 bottom-1/4 bg-blue-600 p-5 rounded-3xl shadow-2xl flex flex-col space-y-1 z-20"
                            >
                                <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">Nuevos Clientes</p>
                                <p className="text-2xl font-black text-white">+142%</p>
                            </motion.div>
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
