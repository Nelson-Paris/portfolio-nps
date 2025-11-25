# Portfolio – Nelson (React / Vite / Sass)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)](https://portfolio-nps.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-1.x-CC6699?logo=sass&logoColor=fff)](https://sass-lang.com/)

> Site personnel **full‑code** orienté **UX**, **accessibilité**, **performance** et **mise en valeur de projets**.  
> Déployé sur **Vercel** : https://portfolio-nps.vercel.app/

---

## Aperçu

> Remplacez l’image ci‑dessous par une capture d’écran du Hero si besoin.


---

## Fonctionnalités clés

- **Architecture** claire : Hero, À propos, Compétences (catégories en *collapses*), Projets (cartes + “En savoir plus”), Parcours (Pro/Formation), Contact.
- **Navigation** : header sticky + ancres, footer sticky avec espace réservé.
- **Pages** : `/` (Home), `/contact`, `/logistique`.
- **Design System** (Sass) : `card`, `grid`, `btn-primary`, `collapse`, `skills-list`.
- **Accessibilité** : composants natifs focusables, focus visibles, `details/summary` clavier, contrastes OK.
- **Performance** : images légères (lazy, `aspect-ratio` pour limiter le CLS), build Vite minifié.
- **Déploiement** continu sur **Vercel**.

## Stack & prérequis

- **React 19**, **React Router 7**, **Vite 7**, **Sass**
- **Node.js ≥ 20** (cf. `package.json "engines"`)

## Démarrer en local

```bash
# 1) Installer
npm install

# 2) Lancer le serveur de dev
npm run dev
# → http://localhost:5173

# 3) Build production
npm run build

# 4) Prévisualiser la build
npm run preview
# → http://localhost:4173
```

## Scripts npm

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
*(Vous pouvez ajouter `"start": "vite"` si vous voulez lancer avec `npm start`.)*

## Architecture du projet

```
src/
  assets/            # images (.png/.jpg/.webp)
  components/
    Header.jsx
    Footer.jsx
    ScrollToHash.jsx
    ScrollOnDetailsOpen.jsx   # auto-scroll des <details> ouverts
  data/
    project.js       # liste des projets (cover, stack, détails)
    skills.js        # catégories & compétences
    profile.js       # coordonnées + liens sociaux
  pages/
    Home.jsx
    Contact.jsx
    Logistique.jsx
  styles/
    _variables.scss  # couleurs, rayons, espaces
    _mixins.scss     # container, bouton, etc.
    index.scss       # styles globaux (DS, layout, responsive)
  App.jsx
  main.jsx
vite.config.js
```

## Contenu éditable (data)

- **Projets** : `src/data/project.js`  
  Chaque projet peut inclure `details` pour “Contexte, Enjeux, Réalisations, Résultats, Axes d’amélioration”.  
  Les liens `links.demo` et `links.github` pilotent les boutons.

- **Compétences** : `src/data/skills.js`  
  Catégories (ex. `id: 'frontend'`) + liste de skills & mots‑clés.

- **Profil / Contact** : `src/data/profile.js`
  ```js
  export const profile = {
    name: 'Nelson',
    email: 'nommail@gmail.com',
    phone: '+33600000000',
    phoneDisplay: '+33 6 00 00 00 00',
    location: 'Louviers, Normandie',
    linkedin: 'https://www.linkedin.com/in/…',
    github: 'https://github.com/Nelson-Paris'
  }
  ```

## Design System & Styles

- **Palette** (CV) :  
  - Primaire (teal) `#76A5AF` – texte noir  
  - Charcoal `#484B4B` – texte blanc  
  - Accent bleu `#5CADDD`  
  - Fond clair `#F0F1ED` / Blanc `#FFFFFF`
- **Variables Sass** (`_variables.scss`) : couleurs, rayons (ex. `$radius-2xl`), espacements.  
- **Mixins** (`_mixins.scss`) : `container`, `btn-primary`, `elevation`.  
- **Layout sticky** :
  - Variables CSS : `--header-h`, `--footer-h`, `--footer-gap`
  - Réserve via `.site::after` pour éviter que le footer masque le contenu.
- **Focus visible** (clavier) :
  ```scss
  :focus-visible { outline: 3px solid $color-accent; outline-offset: 3px; border-radius: 8px; }
  ```
- **Collapses** : focus

## SEO & Performance

- Maillage clair (ancrages), métadonnées (OG/Twitter à compléter).  
- Images avec dimensions explicites et `aspect-ratio` pour limiter le **CLS**.  
- Build Vite minifié.  
- Pistes : JSON‑LD, Lighthouse CI.

## Déploiement

### Vercel (recommandé)
- **Root Directory** : `./`
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **SPA rewrite** (si besoin) `vercel.json` :
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
  ```

Chaque `git push` sur `main` déclenche un déploiement.  

## Roadmap

- [ ] JSON‑LD (logo, person, project)
- [ ] Dark mode (`prefers-color-scheme`)
- [ ] Tests (RTL) sur composants (Collapse/Rating/Slideshow)
- [ ] Page Blog/Veille + flux RSS
- [ ] Lighthouse CI & budgets images

## JSON
<details>

```jsonc
// Gestion des "projects"
{
  id: ,
  title: 'Titre du projet',
  year: Année de création,
  tags: ['Front-end','HTML/CSS','Responsive'], // exemple
  stack: ['HTML5','CSS3'],                      // exemple
  summary: 'introduction rapide',
  cover: 'project', // ajout de la cover sans le nom de l'extension (ex: "project")
  alt: 'Page projet "xxxx"',
  links: {
    github: 'https://github.com/Nelson-Paris/project',
    demo: 'lien du site'
  },
  details: {
    contexte: "contextextualiser le projet",
    enjeux: [
      "Enjeux 1",
      "Enjeux 2",
      "Enjeux etc"
    ],
    realisations: [
      "présentation des différentes réalisations",
      "réalisation 2",
      "réalisation 3",
      "réalisation etc"
    ],
    resultats: [
      "résultat 1",
      "résultat 2"
    ],
    axes: [
      "future amélioration 1",
      "future amélioration 2",
      "future amélioration 3"
    ]
  }
}

// Gestion des "skills"
{
  id: 'catégorie',
  title: 'titre',
  description: "élements qui ont permis l'apprentissage et l'amélioration des skills",
  skills: [
    { name: 'nom du skill 1', level: x/5, keywords: ['listings des compétences, .. ,..'] },
    { name: 'nom du skill 2', level: x/5, keywords: ['listings des compétences, .. ,..'] },
    { name: 'nom du skill 3', level: x/5, keywords: ['listings des compétences, .. ,..'] }
  ],

  level: x/5 // pour le moment pas encore déployer car attente d'une meilleur connaissances de dev pour donner un niveau objectif.
}
```
</details>




- Images avec dimensions explicites et `aspect-ratio`.  
- Build Vite minifié.  
- Pistes : JSON‑LD, Lighthouse CI.

