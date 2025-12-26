
import React from 'react';
import { CircleX, CircleCheck } from 'lucide-react';

const ProblemSolution: React.FC = () => {
    return (
        <section id="solucion" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            ¿Cansado de pagar comisiones y perder clientes en procesos complejos?
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <CircleX className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-gray-900">Plataformas costosas</h3>
                                    <p className="text-gray-600">Pagar hasta el 10% por cada venta devora tus márgenes de ganancia.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <CircleX className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-gray-900">Configuraciones difíciles</h3>
                                    <p className="text-gray-600">Perder días tratando de entender cómo subir un producto o configurar el envío.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <CircleX className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-gray-900">Falta de contacto directo</h3>
                                    <p className="text-gray-600">Tus clientes se pierden en carritos de compra que nadie termina.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <CircleCheck className="w-[15rem] h-[15rem]" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">La Solución: TiendaX</h3>
                        <p className="text-blue-100 mb-8 text-lg">
                            Creamos una plataforma pensada para el emprendedor peruano que quiere vender más sin complicaciones.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Recibe pedidos directo a tu WhatsApp",
                                "Cero comisiones por venta (¡Prometido!)",
                                "Crea tu catálogo en menos de 5 minutos",
                                "Personaliza tu enlace y compártelo",
                                "Gestiona stock desde tu celular"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                    <CircleCheck className="w-5 h-5 text-blue-300 mr-3 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
