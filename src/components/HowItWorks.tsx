
import React from 'react';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
    return (
        <section id="como-funciona" className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Simplicidad total</h2>
                    <p className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                        Tu tienda lista en <span className="text-blue-600">3 simples pasos</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {HOW_IT_WORKS.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -top-6 -left-4 text-7xl font-black text-gray-100 group-hover:text-blue-50 transition-colors z-0">
                                {item.step}
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-200 group-hover:-translate-y-2 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
