export const skillCategories = [
  {
    id: 'frontend',
    title: 'Front-End',
    description:
      "Interfaces modernes en React avec Vite et Sass. Focus accessibilité, performance et SEO.",
    skills: [
      { name: 'HTML5', level: 3, keywords: ['sémantique', 'landmarks'] },
      { name: 'CSS3 / Sass', level: 3, keywords: ['responsive', 'Grid/Flex'] },
      { name: 'JavaScript', level: 3, keywords: ['modules', 'async/await'] },
      { name: 'React', level: 3, keywords: ['hooks', 'router', 'context'] },
      { name: 'Vite', level: 3, keywords: ['build'] },
    ],
  },
  {
    id: 'quality',
    title: 'SEO',
    description:
      "Conformité WCAG, SEO technique et performances mesurées (Lighthouse).",
    skills: [
      { name: 'Accessibilité', level: 3, keywords: ['ARIA', 'contraste', 'clavier'] },
      { name: 'SEO technique', level: 3, keywords: ['meta', 'sitemap', 'schema.org'] },
      { name: 'Performance Web', level: 3, keywords: ['WebP', 'lazy'] },
    ],
  },
  {
    id: 'tooling',
    title: 'Outils & Dev',
    description: "Outils du quotidien pour coder et collaborer.",
    skills: [
      { name: 'Git & GitHub', level: 3, keywords: ['branches'] },
    ],
  },
  {
    id: 'soft',
    title: 'Méthodes & Soft skills',
    description:
      "Expérience industrie/logistique, amélioration continue et travail en équipe.",
    skills: [
      { name: 'Gestion de planning', level: 4, keywords: ['workflow', 'priorisation'] },
      { name: 'Communication', level: 4, keywords: ['clarté', 'synthèse'] },
      { name: 'Amélioration continue', level: 4, keywords: ['5S', 'PDCA', 'VSM'] },
    ],
  },


  {
    id: 'logistics',
    title: 'Logistique & Supply Chain',
    description:
      "Pilotage des flux, traçabilité des co-produits/pertes et optimisation des implantations. Gestion de parc et coordination d’équipe.",
    skills: [
      { name: 'Planification & ordonnancement', level: 5, keywords: ['flux', 'priorisation', 'charge/capacité'] },
      { name: 'Stocks & inventaires', level: 5, keywords: ['FIFO', 'inventaires tournants', 'réappro'] },
      { name: 'Traçabilité co-produits & pertes', level: 5, keywords: ['ERP', 'indicateurs', 'suivi dérives'] },
      { name: 'Parc chariots & nacelles', level: 5, keywords: ['+50 équipements', 'coûts', 'prévention'] },
      { name: 'Réception / Expédition', level: 3, keywords: ['préparation', 'documents', 'remplacements'] },
      { name: 'Implantation & flux internes', level: 5, keywords: ['layout', 'réaménagement zones'] },
    ],
  },
  {
    id: 'production',
    title: 'Production industrielle',
    description:
      "Conduite de lignes, qualité/hygiène (HACCP) et résolution de problèmes en environnement agroalimentaire.",
    skills: [
      { name: 'Conduite de ligne', level: 5, keywords: ['pilotage multi-lignes', 'paramétrage'] },
      { name: 'HACCP & hygiène', level: 4, keywords: ['sécurité alimentaire', 'contrôles'] },
      { name: 'Standards & SOP', level: 4, keywords: ['5S', 'GEMBA WALK'] },
      { name: 'Résolution de problèmes', level: 5, keywords: ['PDCA', '5 Why'] },
      { name: 'Maintenance 1er niveau', level: 5, keywords: ['diagnostic', 'signalement pannes'] },
      { name: 'Formation & tutorat', level: 4, keywords: ['onboarding', 'transfert savoir'] },
    ],
  },
]
