
import type { FAQItem, FeatureItem } from './types';
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
