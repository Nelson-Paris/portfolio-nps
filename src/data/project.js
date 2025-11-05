import booki from '@/assets/booki.png'
import nina from '@/assets/nina.png'
import kasa from '@/assets/kasa.png'
import logistique from '@/assets/logistique.png'


export const projects = [
{
id: 1,
title: 'Booki',
year: 2024,
tags: ['Front-end','HTML/CSS','Responsive'],
stack: ['HTML','CSS'],
summary: 'Intégration responsive fidèle à la maquette, bonnes pratiques SEO.',
cover: booki,
links: { github: 'https://github.com/Nelson-Paris/Booki-ocr', demo: 'https://nelson-paris.github.io/Booki-ocr/' },
},
{
id: 2,
title: 'Nina Carducci',
year: 2024,
tags: ['SEO','Performance'],
stack: ['Lighthouse','WebP','Lazy-loading'],
summary: 'Optimisations SEO/perf : images WebP, lazy, metas, schémas.',
cover: nina,
links: { github: 'https://github.com/Nelson-Paris/SEO-Nina-OCR', demo: 'https://nelson-paris.github.io/SEO-Nina-OCR/' },
},
{
id: 3,
title: 'Kasa',
year: 2025,
tags: ['React','Routing'],
stack: ['React','Vite','Sass'],
summary: 'App React modulaire, routes, composants réutilisables.',
cover: kasa,
links: { github: 'https://github.com/Nelson-Paris/react-kasa', demo: '#' },
},
{
id: 4,
title: 'Logistique',
year: "2023-2024",
tags: ['React','Routing'],
stack: ['React','Vite','Sass'],
summary: 'App React modulaire, routes, composants réutilisables.',
cover: logistique,
alt: 'Page projet Logistique',
links: { demo: '/logistique' },
}
]