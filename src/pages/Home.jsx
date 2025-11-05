import { Link } from 'react-router-dom'
import { projects } from '../data/project'
import profil from '../assets/profil.jpg'
import { skillCategories } from '../data/skills'

export default function Home(){
  return (
    <>

      {/* HERO */}
      <section id="hero" className="hero">
        <div>
          <h1 className="hero-title">
            Développeur <span className="highlight">Front-End</span>
          </h1>
          <p className="lead">
            Realisation de site web.
          </p>
          <div className="actions">
            <Link to="/#projects" className="btn-primary">Voir mes projets</Link>
            <Link to="/contact" className="card">Me contacter</Link>
          </div>
        </div>

        <div className="section-alt card hero-visual">
          <img
            src={profil}
            alt="Aperçu de mes projets et interfaces"
            className="hero-img"
            width="600"
            height="450"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </section>

      {/* A PROPOS */}
<section id="about" className="section">
  <h2>À propos</h2>
  <div className="card section-alt about">
    <p>
      Je viens du terrain : d’abord <span className="blue-about">conducteur de ligne</span>, puis <span className="blue-about">technicien amélioration continue</span> et enfin <span className="blue-about">gestionnaire logistique</span>.
      Ce parcours m’a appris à <span className="blue-about">structurer</span>, <span className="blue-about">mesurer</span> et <span className="blue-about">améliorer en continu</span>, avec une vraie <span className="blue-about">culture du résultat</span>.
      J’aime <span className="blue-about">analyser un flux</span>, identifier les <span className="blue-about">points de friction</span> et mettre en place des <span className="blue-about">solutions simples et robustes</span>.
      <span className="blue-about"> Autonome</span>, je sais <span className="blue-about">prioriser</span> et avancer sans supervision constante, tout en gardant le <span className="blue-about">sens du collectif</span>.
      On me dit <span className="blue-about">à l’aise à l’oral et à l’écrit</span>, ce qui m’aide à embarquer les équipes et à <span className="blue-about">documenter clairement</span>.
      <span className="blue-about"> Passionné d’informatique</span> depuis des années, j’ai choisi de me spécialiser en <span className="blue-about">développement web</span>.
      Aujourd’hui, je conçois des interfaces <span className="blue-about">claires</span>, <span className="blue-about">rapides</span> et <span className="blue-about">accessibles</span>.
      Mes pages sont pensées <span className="blue-about">mobile responsive</span>, <span className="blue-about">SEO-friendly</span> et optimisées pour la <span className="blue-about">performance</span>.
      J’accorde une attention particulière à l’<span className="blue-about">accessibilité</span> (<span className="blue-about">sémantique</span>, <span className="blue-about">focus</span>, <span className="blue-about">contrastes</span>) pour que chaque utilisateur compte.
      En bref, je combine <span className="blue-about">rigueur industrielle</span> et <span className="blue-about">curiosité tech</span> pour livrer des front-ends <span className="blue-about">fiables</span>, <span className="blue-about">élégants</span> et <span className="blue-about">utiles</span>.
    </p>
  </div>
</section>


      {/* COMPÉTENCES */}
      <section id="skills" className="section">
        <h2>Compétences</h2>

        <div className="accordion">
          {skillCategories.map((cat, i) => (
            <details key={cat.id} className="collapse" {...(i === 0 ? { open: true } : {})}>
              <summary>
                <span className="collapse-title"><strong>{cat.title}</strong></span>
                <span className="chevron" aria-hidden="true" />
              </summary>
              <div className="collapse-content">
                <p className="resume">{cat.description}</p>

                <ul className="skills-list">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="skill-chip">
                      <div className="skill-head">
                        <span className="skill-name">{s.name}</span>
                       
                      </div>
                      {s.keywords?.length > 0 && (
                        <small className="skill-tags">{s.keywords.join(' • ')}</small>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="section">
        <h2>Projets</h2>

        <div className="grid">
          {projects.map(p => (
            <article key={p.id} className="card">
              <div className="project-header">
                <h3 style={{marginTop:0}}>{p.title}</h3>
                <small className="project-year">{p.year}</small>
              </div>

              {p.cover && (
                <img
                  src={p.cover}
                  alt={p.alt || p.title}
                  className={`project-img ${p.fit === 'contain' ? 'project-img--contain' : ''}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}

              <p className="project-meta">{(p.stack||[]).join(' · ')}</p>
              <p>{p.summary}</p>

              <div className="card-actions">
                {p.links?.demo && (
                  p.links.demo.startsWith('/')
                    ? <Link to={p.links.demo} className="btn-primary">Présentation</Link>
                    : <a href={p.links.demo} className="btn-primary" target="_blank" rel="noreferrer">Présentation</a>
                )}
                {p.links?.github && (
                  <a href={p.links.github} className="card" target="_blank" rel="noreferrer">GitHub</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARCOURS */}
      <section id="timeline" className="section">
        <h2>Parcours</h2>

        <div className="accordion">
          {/* Parcours pro */}
          <details className="collapse" open>
            <summary>
              <span className="collapse-title"><strong>Parcours professionnel</strong></span>
              <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="collapse-content">

              <details className="collapse">
                <summary>
                  <span className="collapse-title">
                    <strong>2023–2024</strong> — Gestionnaire logistique · Barry Callebaut (Louviers)
                  </span>
                  <span className="chevron" aria-hidden="true" />
                </summary>
                <div className="collapse-content">
                  <p className="resume">Pilotage logistique, amélioration continue et gestion d’équipe.</p>
                  <ul className="bullets">
                    <li>Réaménagement zones de production & stockage.</li>
                    <li>Gestion co-produits & pertes, analyses de dérives.</li>
                    <li>Parc chariots & nacelles <strong>(+50 équipements)</strong> : baisse coût, plan de prévention.</li>
                    <li>Backup superviseur & responsable logistique <strong>(17 collaborateurs)</strong>.</li>
                    <li>Nouveau stock matières premières.</li>
                  </ul>
                </div>
              </details>

              <details className="collapse">
                <summary>
                  <span className="collapse-title">
                    <strong>2021–2023</strong> — Technicien amélioration continue · Barry Callebaut
                  </span>
                  <span className="chevron" aria-hidden="true" />
                </summary>
                <div className="collapse-content">
                  <p className="resume">Traçabilité, réduction des pertes, conduite du changement.</p>
                  <ul className="bullets">
                    <li>Mise en place traçabilité des co-produits.</li>
                    <li>Outils Excel/VBA & indicateurs pour suivre/diminuer les pertes.</li>
                    <li>Formations aux nouvelles procédures (<strong>150 collaborateurs</strong>).</li>
                  </ul>
                </div>
              </details>

              <details className="collapse">
                <summary>
                  <span className="collapse-title">
                    <strong>2014–2021</strong> — Conducteur de ligne · Barry Callebaut
                  </span>
                  <span className="chevron" aria-hidden="true" />
                </summary>
                <div className="collapse-content">
                  <ul className="bullets">
                    <li>Conduite simultanée de <strong>4 lignes</strong> de production.</li>
                    <li>HACCP, GEMBA WALK, sécurité & hygiène.</li>
                    <li>Formation de conducteurs de ligne.</li>
                  </ul>
                </div>
              </details>

              <details className="collapse">
                <summary>
                  <span className="collapse-title">
                    <strong>2013–2014</strong> — Serveur / Barman · Woolshed, Cairns (Australie)
                  </span>
                  <span className="chevron" aria-hidden="true" />
                </summary>
                <div className="collapse-content">
                  <ul className="bullets">
                    <li>Relation client, rythme soutenu, encaissement.</li>
                    <li>Polyvalence & esprit d’équipe ; anglais opérationnel.</li>
                  </ul>
                </div>
              </details>

              <details className="collapse">
                <summary>
                  <span className="collapse-title">
                    <strong>2011–2013</strong> — Opérateur de production · Barry Callebaut
                  </span>
                  <span className="chevron" aria-hidden="true" />
                </summary>
                <div className="collapse-content">
                  <ul className="bullets">
                    <li>Approvisionnement des machines (plan de prod).</li>
                    <li>Vérification, diagnostic et signalement des pannes.</li>
                  </ul>
                </div>
              </details>

            </div>
          </details>

          {/* Formations */}
          <details className="collapse">
            <summary>
              <span className="collapse-title"><strong>Formations</strong></span>
              <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="collapse-content">
              <article className="card">
                <strong>2025 — Développeur informatique</strong> (RNCP 38415) · OpenClassrooms
                <ul className="bullets" style={{marginTop:'.5rem'}}>
                  <li>Projets : Booki (HTML/CSS), Nina Carducci (SEO/Perf), Kasa (React/Vite/Sass).</li>
                  <li>Compétences : HTML, CSS, JavaScript, React, Vite, Sass, SEO, Perf, Git/GitHub.</li>
                </ul>
              </article>

              <article className="card">
                <strong>2021–2022 — Licence Pro Gestion de la Performance Industrielle</strong> · IUT Blois
                <ul className="bullets" style={{marginTop:'.5rem'}}>
                  <li>Lean, VSM, PDCA, 5S, pilotage d’indicateurs & amélioration continue.</li>
                </ul>
              </article>

              <article className="card">
                <strong>2015–2017 — BTSA Sciences & Technologies des Aliments</strong> · LEGTA Yvetot
              </article>

              <article className="card">
                <strong>2010–2011 — Bac STG Gestion des systèmes d’information</strong> · Lycée Les Fontenelles
              </article>
            </div>
          </details>
        </div>
      </section>

    </>
  )
}
