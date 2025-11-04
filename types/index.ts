// Core data types for Haluk Akakçe website
// TODO: Replace with types from your CMS/API schema

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions?: string;
  image: string;
  category: 'painting' | 'drawing' | 'video' | 'installation' | 'public-project';
  description: string;
  collection?: string;
  exhibition?: string;
  relatedProducts?: string[]; // Product IDs
  featured?: boolean;
}

export interface Exhibition {
  id: string;
  slug: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  startDate: string;
  endDate?: string;
  year: number;
  type: 'solo' | 'group' | 'biennial' | 'public';
  description: string;
  images: string[];
  artworks: string[]; // Artwork IDs
  featured?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: 'print' | 'phone-case' | 'apparel' | 'accessory' | 'book';
  image: string;
  images?: string[];
  artworkId?: string; // Reference to related artwork
  options?: ProductOption[];
  inStock: boolean;
  featured?: boolean;
  limitedEdition?: boolean;
}

export interface ProductOption {
  name: string;
  values: string[];
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'education' | 'exhibition' | 'award' | 'project' | 'milestone';
}

export interface LicensingInquiry {
  name: string;
  company: string;
  email: string;
  region: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  reason: 'general' | 'shop' | 'licensing' | 'press';
  message: string;
}
