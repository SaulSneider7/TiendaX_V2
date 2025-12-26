
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';
import { Calendar, Clock, Search, ChevronRight, Share2, ArrowLeft } from 'lucide-react';

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const categories = ['Todos', 'Guías', 'E-commerce', 'Emprendimiento', 'Finanzas'];

    // SEO Management
    useEffect(() => {
        if (selectedPost) {
            document.title = `${selectedPost.title} | Blog TiendaX`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', selectedPost.excerpt);

            // Inject JSON-LD
            const schema = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": selectedPost.title,
                "image": selectedPost.image,
                "author": { "@type": "Person", "name": selectedPost.author },
                "datePublished": selectedPost.dateISO,
                "description": selectedPost.excerpt
            };
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = 'json-ld-blog';
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);

            return () => {
                const oldScript = document.getElementById('json-ld-blog');
                if (oldScript) oldScript.remove();
            };
        } else {
            document.title = 'Blog TiendaX | E-commerce y Ventas por WhatsApp en Perú';
        }
    }, [selectedPost]);

    const filteredPosts = activeCategory === 'Todos'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', `#blog/${post.slug}`);
    };

    const handleBack = () => {
        setSelectedPost(null);
        window.history.pushState(null, '', '#blog');
    };

    if (selectedPost) {
        return (
            <div className="pt-32 pb-24 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={handleBack}
                        className="flex items-center text-gray-500 hover:text-blue-600 font-bold mb-12 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al Blog
                    </motion.button>

                    <article>
                        <header className="mb-12">
                            <div className="flex items-center space-x-4 text-xs font-black text-blue-600 uppercase tracking-widest mb-6">
                                <span className="bg-blue-50 px-3 py-1 rounded-lg">{selectedPost.category}</span>
                                <span className="text-gray-300">•</span>
                                <time dateTime={selectedPost.dateISO} className="text-gray-500">{selectedPost.date}</time>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                {selectedPost.title}
                            </h1>
                            <div className="flex items-center justify-between py-6 border-y border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                        <img src={`./logo.png`} alt={selectedPost.author} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{selectedPost.author}</p>
                                        <p className="text-xs text-gray-500">{selectedPost.readTime} de lectura</p>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </header>

                        <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
                            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p className="text-xl font-medium text-gray-900">{selectedPost.excerpt}</p>
                            <div className="content-area whitespace-pre-line">
                                {selectedPost.content}
                            </div>
                        </div>

                        <footer className="mt-20 pt-12 border-t border-gray-100">
                            <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 text-center md:text-left">
                                    <h3 className="text-2xl font-bold mb-2">¿Quieres vender como un pro?</h3>
                                    <p className="text-blue-100">Crea tu propia tienda hoy mismo en 5 minutos.</p>
                                </div>
                                <a href="https://wa.me/+51917794918?text=Quiero%20vender%20como%20un%20pro" target="_blank" className="px-8 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-colors shadow-lg">
                                    Empezar Gratis
                                </a>
                            </div>
                        </footer>
                    </article>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                            Blog de <span className="text-blue-600">TiendaX</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-xl font-medium">
                            Estrategias, consejos y guías para hacer crecer tu negocio digital en el mercado peruano.
                        </p>
                    </div>

                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Buscar artículos..."
                            className="pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all w-full md:w-80"
                        />
                    </div>
                </div>

                {/* Categories Bar */}
                <div className="flex overflow-x-auto space-x-4 mb-12 pb-4 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-200'
                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handlePostClick(post)}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm border border-gray-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2">
                                    <span className="inline-flex items-center text-blue-600 text-sm font-black group-hover:translate-x-1 transition-transform">
                                        Leer artículo <ChevronRight className="w-4 h-4 ml-1" />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
