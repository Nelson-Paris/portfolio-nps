import booki from '@/assets/booki.png'
import nina from '@/assets/nina.png'
import kasa from '@/assets/kasa.png'
import logistique from '@/assets/logistique.png'

export const projects = [
  {
    id: 1,
    title: 'Booki — Intégration maquette responsive (HTML/CSS)',
    year: 2025,
    tags: ['Front-end','HTML/CSS','Responsive'],
    stack: ['HTML5','CSS3'],
    summary: 'Intégration responsive fidèle à la maquette, bonnes pratiques SEO.',
    cover: booki,
    alt: 'Page projet Booki',
    links: {
      github: 'https://github.com/Nelson-Paris/Booki-ocr',
      demo: 'https://nelson-paris.github.io/Booki-ocr/'
    },
    details: {
      contexte:
        "Intégration d’une maquette Figma pour un site de recherche d’hébergements. Objectif : structure sémantique propre, styles modulaires et rendu fidèle.",
      enjeux: [
        "Respect strict de la maquette (typos, espacements, couleurs)",
        "Responsive mobile → desktop sans régression visuelle",
        "Accessibilité de base (structure, focus, contrastes)"
      ],
      realisations: [
        "HTML sémantique (header/main/footer, sections, titres hiérarchisés)",
        "Grid/Flex pour les cartes",
        "Mobile-first, images fluides, conteneur max",
        "États : hover/focus accessibles, boutons & filtres cohérents"
      ],
      resultats: [
        "Rendu fidèle à la maquette",
        "Code lisible & maintenable"
      ],
      axes: [
        "Passer toutes les images en WebP + srcset/sizes",
        "Passage en React pour réutiliser les composants",
        "Amélioration du CSS en SASS"
      ]
    }
  },

  {
    id: 2,
    title: 'Nina Carducci — SEO & Performance',
    year: 2025,
    tags: ['SEO','Performance'],
    stack: ['Lighthouse','WebP','Lazy-loading'],
    summary: 'Optimisations SEO/perf : images WebP, lazy, metas, schémas.',
    cover: nina,
    alt: 'Page projet SEO Nina Carducci',
    links: {
      github: 'https://github.com/Nelson-Paris/SEO-Nina-OCR',
      demo: 'https://nelson-paris.github.io/SEO-Nina-OCR/'
    },
    details: {
      contexte:
        "Amélioration SEO/Perf d’un site vitrine de photographe : corrections techniques, accessibilité, optimisation Core Web Vitals.",
      enjeux: [
        "Référencement naturel (balises, sémantique, contenu)",
        "Performance perçue (LCP/CLS) et poids des assets",
        "Accessibilité (contrastes, alt, focus)"
      ],
      realisations: [
        "Méta-balises & titres hiérarchisés, attributs alt pertinents",
        "Optimisation images (WebP, dimensions, lazy)",
        "Nettoyage CSS/JS, réduction du rendu bloquant",
        "Correctifs A11y (labels, tab order, contrastes)"
      ],
      resultats: [
        "Scores Lighthouse en nette hausse (Perf, A11y, SEO)",
        "Stabilité visuelle (CLS maîtrisé)",
        "Indexabilité et lisibilité améliorées"
      ],
      axes: [
        "Données structurées (JSON-LD)",
        "Plan éditorial (FAQ, portfolio, avis)",
        "Monitoring Search Console & suivi mots-clés"
      ]
    }
  },

  {
    id: 3,
    title: 'Kasa — Application de locations (React)',
    year: 2025,
    tags: ['React','Routing'],
    stack: ['React','Vite','Sass','React Router'],
    summary: 'App React modulaire, routes, composants réutilisables.',
    cover: kasa,
    alt: 'Page projet Kasa',
    links: {
      github: 'https://github.com/Nelson-Paris/react-kasa',
      
    },
    details: {
      contexte:
        "SPA front-end de locations. Architecture composants robuste, navigation fluide, intégration fidèle.",
      enjeux: [
        "Routage déclaratif & pages dynamiques",
        "Gestion d’états locaux sans suringénierie",
        "Accessibilité & responsive dès la conception"
      ],
      realisations: [
        "Routing avec paramètres d’URL (fiche logement / 404)",
        "Composants réutilisables (Slideshow, Collapse, Rating)",
        "Gestion des assets + images responsives",
        "Sass modulaire (variables/mixins)"
      ],
      resultats: [
        "UX fluide mobile/desktop",
        "Code component-driven, maintenable",
        "Bonnes pratiques A11y (nav clavier, focus visible, sémantique)"
      ],
      axes: [
        "Lighthouse CI & budgets images",
        "Internationalisation (i18n)"
      ]
    }
  },

  {
    id: 4,
    title: 'Logistique',
    year: '2023–2024',
    tags: ['Expérience','Amélioration continue'],
    stack: ['Process','KPI','Traçabilité'],
    summary: 'Pilotage logistique : flux, stocks, sécurité, traçabilité et routines.',
    cover: logistique,
    alt: 'Page projet Logistique',
    links: { demo: '/logistique' },
    details: {
      contexte:
        "Site industriel (réception → production → stockage → expéditions). Mission : réduire les pertes, fiabiliser la traçabilité, sécuriser les opérations.",
      enjeux: [
        "Stocks fiables & traçabilité bout-en-bout",
        "Organisation d’entrepôt (5S, emplacements, marquage)",
        "Animation d’équipe & sécurité (parc > 50 équipements)"
      ],
      realisations: [
        "Cartographie des flux (VSM), réaménagement zones prod/stockage",
        "Dashboard pertes (Excel/VBA), routines d’animation",
        "Formations ~150 collaborateurs ; backup management (17 pers.)"
      ],
      resultats: [
        "Baisse des coûts liés aux pertes",
        "Écarts d’inventaire réduits, lisibilité des flux",
        "Auditabilité & disponibilité des équipements accrues"
      ],
      axes: [
        "BI temps réel sur les KPIs",
        "Standardisation élargie des SOP",
        "Intégration TMS/transporteurs"
      ]
    }
  }
]
