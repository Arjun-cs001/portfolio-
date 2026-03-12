import React from 'react';

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}