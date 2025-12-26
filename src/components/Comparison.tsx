
import React from 'react';
import { CircleCheck, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison: React.FC = () => {
    return (
        <section id="diferenciales" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        ¿Por qué elegir <span className="text-blue-600">TiendaX</span>?
                    </motion.h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        Comparamos nuestra solución con el ecommerce tradicional para que veas el ahorro real.
                    </p>
                </div>

                {/* Contenedor con Scroll Horizontal en Móvil */}
                <div className="relative">
                    {/* Indicador de scroll para móvil */}
                    <div className="absolute -top-8 right-0 flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest md:hidden">
                        <span>Desliza</span>
                        <div className="ml-2 w-8 h-[2px] bg-gray-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-400 animate-[scroll-hint_2s_infinite]"></div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
                        <div className="inline-block min-w-[600px] w-full align-middle">
                            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
                                <table className="w-full text-left border-collapse table-fixed">
                                    <thead>
                                        <tr className="bg-gray-900 text-white">
                                            <th className="p-6 font-bold text-lg w-1/3">Característica</th>
                                            <th className="p-6 font-bold text-lg text-blue-400 w-1/3 text-center">TiendaX</th>
                                            <th className="p-6 font-bold text-lg text-gray-400 w-1/3 text-center">Otros</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            { label: "Comisiones por venta", x: "Toda tu ganancia es tuya", other: "cobra 2% a 10%" },
                                            { label: "Configuración inicial", x: "30 minutos", other: "Semanas" },
                                            { label: "Venta por WhatsApp", x: "Nativo", other: "Limitado" },
                                            { label: "Panel de administración", x: "Fácil / Móvil", other: "Complejo" },
                                            { label: "Mantenimiento", x: "Cero esfuerzo", other: "Costoso" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                                <td className="p-6 font-bold text-gray-700">{row.label}</td>
                                                <td className="p-6 text-blue-600 font-black text-center">
                                                    <div className="flex items-center justify-center">
                                                        <CircleCheck className="w-5 h-5 mr-2 shrink-0" />
                                                        {row.x}
                                                    </div>
                                                </td>
                                                <td className="p-6 text-gray-400 font-medium text-center">{row.other}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center px-6 py-3 bg-yellow-50 rounded-2xl border border-yellow-100 text-yellow-800 font-bold text-sm shadow-sm">
                        <Lightbulb className="w-5 h-5 text-yellow-500 mr-3 shrink-0" />
                        <span>Ahorra un promedio de <strong>S/ 1,200 anuales</strong> solo en comisiones innecesarias.</span>
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scroll-hint {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
        </section>
    );
};

export default Comparison;
