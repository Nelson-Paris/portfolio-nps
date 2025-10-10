import profil from '@/assets/profil.jpg' 
import chariot from '@/assets/chariot.png'
import equipe from '@/assets/equipe.png'

export default function Logistique(){
  return (
    <>
      {/* HERO */}
      <section id="hero" className="hero">
        <div>
          <h1 className="hero-title">
            Gestionnaire <span className="highlight">Logistique</span>
          </h1>
          <p className="lead">Réduction et traçabilité des pertes.</p>
        </div>

        <div className="section-alt card hero-visual">
          <img
            src={profil}
            alt="Icône d'un camion"
            className="split-img"
            width="600" height="450" loading="eager" decoding="async"
          />
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section id="about" className="section">
        <h2>Présentation du projet</h2>

        {/* 1 — Texte gauche / Image droite */}
        <article className="card split">
          <div className="split-text">
          <h3>Contexte & objectifs</h3>
          <p>
              Pilotage d’un plan d’amélioration continue orienté <strong>terrain</strong>, avec des routines claires
              et des indicateurs suivis. J’ai assuré un rôle de relais/backup sur la partie <strong>management</strong>.
          </p>
        <ul className="bullets">
          <li>Cartographie des flux (VSM), <strong>redéploiement</strong> des zones et marquage au sol.</li>
          <li>Mise en place d’un <strong>dashboard Excel/VBA</strong> : pertes, rebut, immobilisations, actions.</li>
          <li><strong>Plan de prévention</strong> parc chariots & nacelles (<strong>+50 équipements</strong>).</li>
          <li><strong>Formations</strong> aux nouvelles procédures (~<strong>150 collaborateurs</strong>).</li>
          <li>Backup superviseur & responsable logistique (<strong>17 collaborateurs</strong>).</li>
        </ul>
          </div>
          <div className="split-media">
            <img
              src={chariot}
              alt="Flux logistiques et traçabilité"
              className="project-img"
              width="800" height="600" loading="lazy" decoding="async"
            />
          </div>
        </article>

        {/* 2 — Image gauche / Texte droite */}
        <article className="card split split--reverse">
          <div className="split-text">
            <h3>Actions & résultats</h3>
            <p>
              Formation de 150 collaborateurs aux nouvelles procédures, plan de prévention parc (+50 équipements),
              back-up management (17 pers.). Baisse mesurée des coûts internes.
            </p>
            <ul className="bullets">
              <li>Procédures standardisées (SOP)</li>
              <li>Stock MP reconfiguré</li>
              <li>KPIs hebdo avec plans d’actions</li>
            </ul>
          </div>
          <div className="split-media">
            <img
              src={equipe}
              alt="Indicateurs et réaménagement"
              className="project-img"
              width="800" height="600" loading="lazy" decoding="async"
            />
          </div>
        </article>
      </section>
    </>
  )
}
