
import React from 'react';
import { CircleCheck } from 'lucide-react';
import { SEGMENTS } from '../constants';

const Segments: React.FC = () => {
    return (
        <section id="segmentos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        Una solución para cada tamaño de negocio
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Desde el emprendedor que vende por Instagram hasta la empresa con múltiples sucursales. TiendaX crece contigo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SEGMENTS.map((segment, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                {segment.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{segment.title}</h3>
                            <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">{segment.target}</p>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {segment.description}
                            </p>
                            <ul className="space-y-3">
                                {segment.features.map((feature, fidx) => (
                                    <li key={fidx} className="flex items-center text-sm text-gray-700 font-medium">
                                        <CircleCheck className="w-4 h-4 text-blue-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Segments;
