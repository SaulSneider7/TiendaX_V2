// Import React to provide the React namespace for type definitions like React.ReactNode
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