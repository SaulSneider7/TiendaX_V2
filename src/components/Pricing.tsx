
import React, { useState, useEffect } from 'react';
import { Check, Info, Clock } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const targetDate = new Date(`January 1, ${currentYear + 1} 00:00:00`);
        const difference = +targetDate - +now;
        let timeLeft = { days: 0, hours: 0, minutes: 0 };
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 60000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="precios" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                        Precios Claros, Sin Sorpresas
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Aprovecha nuestra promoción por lanzamiento y asegura tu lugar.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-100 text-sm font-black uppercase tracking-tighter">
                        <Clock className="w-4 h-4 mr-2" />
                        La oferta expira en {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                    </div>
                </div>

                <div className="max-w-lg mx-auto bg-white rounded-3xl border-2 border-blue-600 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-12 -right-16 bg-red-500 text-white px-16 py-1 rotate-45 text-sm font-bold shadow-lg">
                        ¡PROMOCIÓN!
                    </div>

                    <div className="p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Tienda Total</h3>
                        <p className="text-gray-500 mb-8">Tu tienda completa en un solo pago recurrente</p>

                        <div className="flex flex-col items-center justify-center mb-10">
                            <span className="text-gray-400 line-through text-2xl font-medium mb-1">S/ 200</span>
                            <div className="flex items-baseline">
                                <span className="text-5xl font-extrabold text-blue-600 tracking-tight">S/ 150</span>
                                <span className="text-gray-500 ml-2 font-medium">/mes</span>
                            </div>
                            <p className="text-sm text-blue-600 font-semibold mt-4 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                *Por los primeros 3 meses
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                            <div className="flex items-center justify-center text-gray-900 font-bold text-lg text-balance text-center">
                                Luego pagarás solo S/ 100 <span className="text-blue-600 ml-1">Vitalicio</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Mantenemos tu precio para siempre si te registras hoy.</p>
                        </div>

                        <ul className="space-y-4 text-left mb-10">
                            {[
                                "Catálogo Digital Ilimitado",
                                "Enlace Personalizado (tu-tienda.tiendax.pe)",
                                "Gestión de Pedidos Centralizada",
                                "Integración WhatsApp Business",
                                "Panel de Administración Pro",
                                "Soporte prioritario 24/7"
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 text-center"
                        >
                            Reclamar Oferta Ahora
                        </a>

                        <div className="flex items-center justify-center mt-6 text-xs text-gray-400">
                            <Info className="w-4 h-4 mr-1.5" />
                            Garantía de satisfacción de 7 días
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
