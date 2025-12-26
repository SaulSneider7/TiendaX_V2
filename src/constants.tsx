
import type { FAQItem, FeatureItem, BlogPost } from './types';
import {
    MessageCircle,
    ShieldCheck,
    ShoppingBag,
    Zap,
    UserPlus,
    CloudUpload,
    TrendingUp,
    Rocket,
    Store,
    Building2
} from 'lucide-react';

export const WHATSAPP_NUMBER = "+51917794918";
export const INSTAGRAM_URL = "https://www.instagram.com/tiendax.oficial";
export const WHATSAPP_LINK = `https://wa.me/51917794918?text=Hola%20TiendaX!%20Quiero%20información%20sobre%20mi%20tienda%20virtual.`;

export const FEATURES: FeatureItem[] = [
    {
        title: "Venta Directa por WhatsApp",
        description: "Recibe los pedidos de tus clientes directamente en tu chat de WhatsApp, sin intermediarios.",
        icon: <MessageCircle className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Sin Comisiones por Venta",
        description: "El 100% de las ganancias son tuyas. No cobramos ni un sol por cada venta que realices.",
        icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Catálogo Autoadministrable",
        description: "Sube productos, cambia precios y gestiona tu stock de forma súper sencilla desde tu celular.",
        icon: <ShoppingBag className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Configuración Relámpago",
        description: "Tu tienda estará lista en minutos. Sin complicaciones técnicas ni programación.",
        icon: <Zap className="w-6 h-6 text-blue-500" />
    }
];

export const HOW_IT_WORKS = [
    {
        step: "01",
        title: "Regístrate",
        description: "Crea tu cuenta en segundos y elige el nombre de tu tienda personalizada.",
        icon: <UserPlus className="w-8 h-8" />
    },
    {
        step: "02",
        title: "Sube tus Productos",
        description: "Carga fotos, descripción y precios. Organiza todo por categorías inteligentes.",
        icon: <CloudUpload className="w-8 h-8" />
    },
    {
        step: "03",
        title: "Vende por WhatsApp",
        description: "Comparte tu link y recibe pedidos listos para procesar en tu chat personal.",
        icon: <TrendingUp className="w-8 h-8" />
    }
];

export const SEGMENTS = [
    {
        title: "Emprendedores",
        target: "Para quienes empiezan",
        description: "Digitaliza tu negocio local y deja de anotar pedidos en papel. Rapidez y orden total.",
        features: ["Catálogo simple", "Link en Bio", "Gestión desde App"],
        icon: <Rocket className="w-7 h-7" />
    },
    {
        title: "Pymes",
        target: "Negocios en crecimiento",
        description: "Centraliza tus ventas de Instagram y Facebook en un solo catálogo profesional con stock.",
        features: ["Control de Inventario", "Múltiples Categorías", "Análisis de Ventas"],
        icon: <Store className="w-7 h-7" />
    },
    {
        title: "Grandes Empresas",
        target: "Corporativos y Franquicias",
        description: "Escala tu operación con integraciones personalizadas y soporte dedicado para altos volúmenes.",
        features: ["API de Integración", "Soporte VIP", "Reportes Avanzados"],
        icon: <Building2 className="w-7 h-7" />
    }
];

export const FAQS: FAQItem[] = [
    {
        question: "¿Necesito conocimientos técnicos para crear mi tienda?",
        answer: "¡Para nada! TiendaX está diseñada para ser intuitiva. Si sabes usar WhatsApp, sabes usar TiendaX."
    },
    {
        question: "¿Cómo recibo los pagos?",
        answer: "Tus clientes te pagan directamente a ti (Yape, Plin, transferencia o efectivo). Nosotros no retenemos tu dinero."
    },
    {
        question: "¿Es escalable para empresas grandes?",
        answer: "Totalmente. Contamos con infraestructura en la nube que soporta miles de visitas simultáneas y herramientas de gestión masiva de productos."
    },
    {
        question: "¿Realmente no cobran comisiones?",
        answer: "Correcto. Solo pagas tu suscripción fija. Cero comisiones por transacciones, sin importar cuánto vendas."
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        slug: "vender-por-whatsapp-peru-guia-2024",
        title: "Cómo vender por WhatsApp en Perú: Guía Definitiva 2024",
        excerpt: "Descubre las mejores estrategias para convertir tu WhatsApp en una máquina de ventas imparable este año.",
        content: "Vender por WhatsApp en Perú se ha convertido en la estrategia número uno para emprendedores locales. En esta guía exploramos cómo configurar tu catálogo en TiendaX, usar mensajes de bienvenida efectivos y cerrar ventas usando Yape o Plin de forma integrada. La clave del éxito en el ecommerce peruano es la inmediatez y la confianza que genera el trato directo por chat.",
        category: "Guías",
        author: "Equipo TiendaX",
        date: "15 May, 2024",
        dateISO: "2024-05-15",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "2",
        slug: "ventajas-catalogo-digital-vs-pdf",
        title: "5 Ventajas de usar un Catálogo Digital vs. un PDF estático",
        excerpt: "Deja de enviar archivos pesados. Pásate al link interactivo y mejora la experiencia de tus clientes.",
        content: "Muchos negocios en Lima siguen usando PDFs pesados que los clientes no quieren descargar. Un catálogo digital como el de TiendaX carga en menos de 1 segundo, permite búsquedas inteligentes y, lo más importante, tiene botones de compra que envían el pedido estructurado a tu celular. Descubre por qué el 90% de los usuarios prefiere links a archivos adjuntos.",
        category: "E-commerce",
        author: "Ana Lizárraga",
        date: "12 May, 2024",
        dateISO: "2024-05-12",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "3",
        slug: "digitalizacion-pymes-gamarra-consejos",
        title: "Digitalización de Pymes: Por dónde empezar en Gamarra",
        excerpt: "Consejos prácticos para los textileros y comerciantes de Gamarra que quieren dar el salto al mundo online.",
        content: "El emporio de Gamarra es el corazón comercial de Perú, pero la digitalización aún es un reto. En este artículo detallamos cómo los textileros pueden usar TiendaX para mostrar sus colecciones de temporada sin necesidad de una web costosa, facilitando que clientes de provincia vean sus productos y hagan pedidos mayoristas por WhatsApp de forma segura.",
        category: "Emprendimiento",
        author: "Roberto Tapia",
        date: "10 May, 2024",
        dateISO: "2024-05-10",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    }
];
