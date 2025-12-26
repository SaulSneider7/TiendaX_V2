
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
    {
        name: "María Fernández",
        role: "Dueña de 'Boutique Mafer'",
        text: "Antes perdía pedidos porque mis clientes se confundían con el carrito. Ahora todo llega a mi WhatsApp y cierro ventas en segundos con mi catálogo de TiendaX.",
        image: "https://i.pravatar.cc/150?img=32"
    },
    {
        name: "Carlos Ruiz",
        role: "Emprendedor de Tecnología",
        text: "Lo que más me gusta es que no me cobran comisiones por venta. Los S/100 mensuales son la mejor inversión que he hecho para mi negocio online.",
        image: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Lucía Paredes",
        role: "Vendedora de Calzado",
        text: "Mi tienda virtual estuvo lista en 5 minutos. Es impresionante lo fácil que es subir productos y gestionar el stock desde el celular.",
        image: "https://i.pravatar.cc/150?img=44"
    }
];

const Testimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const moveSlide = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    useEffect(() => {
        const timer = setInterval(() => moveSlide(1), 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section id="testimonials" className="py-32 bg-blue-600 text-white overflow-hidden relative" aria-labelledby="testimonials-title">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 id="testimonials-title" className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        Amado por emprendedores en todo el país
                    </h2>
                    <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                    </div>
                </motion.div>

                <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full max-w-4xl px-4 md:px-12 flex flex-col items-center"
                        >
                            <Quote className="w-16 h-16 mb-8 opacity-20 text-white" />
                            <blockquote className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed italic">
                                "{TESTIMONIALS[current].text}"
                            </blockquote>

                            <div className="flex items-center space-x-4">
                                <img
                                    src={TESTIMONIALS[current].image}
                                    alt={TESTIMONIALS[current].name}
                                    className="w-16 h-16 rounded-full border-2 border-white/50"
                                />
                                <div className="text-left">
                                    <h3 className="text-xl font-bold">{TESTIMONIALS[current].name}</h3>
                                    <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">{TESTIMONIALS[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-2 md:px-0">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => moveSlide(-1)}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => moveSlide(1)}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </motion.button>
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-16 flex justify-center space-x-3">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > current ? 1 : -1);
                                setCurrent(i);
                            }}
                            className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
