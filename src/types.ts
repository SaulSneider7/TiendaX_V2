
import React from 'react';

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Contenido extendido para el detalle del post
    category: string;
    author: string;
    date: string;
    dateISO: string; // Para SEO Schema
    readTime: string;
    image: string;
}
