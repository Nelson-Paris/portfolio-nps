import { profile } from '@/data/profile'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="card section-alt contact-card">
        <p className="contact-intro">
          Dispo pour un échange (visio/tel) — n’hésite pas à me joindre.
        </p>

        <ul className="contact-list">
          {/* E-mail */}
          {profile.email && (
            <li className="contact-item">
              <span className="icon icon--mail" aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          )}

          {/* Téléphone */}
          {profile.phone && (
            <li className="contact-item">
              <span className="icon icon--phone" aria-hidden="true" />
              <a href={`tel:${profile.phone}`} aria-label="Appeler">
                {profile.phoneDisplay || profile.phone}
              </a>
            </li>
          )}

          {/* Localisation (avec lien Google Maps si fourni) */}
          {profile.location && (
            <li className="contact-item">
              <span className="icon icon--pin" aria-hidden="true" />
              {profile.mapUrl ? (
                <a href={profile.mapUrl} target="_blank" rel="noreferrer">
                  {profile.location}
                </a>
              ) : (
                <span>{profile.location}</span>
              )}
            </li>
          )}

          {/* LinkedIn */}
          {profile.linkedin && (
            <li className="contact-item">
              <span className="icon icon--linkedin" aria-hidden="true" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          )}

          {/* GitHub */}
          {profile.github && (
            <li className="contact-item">
              <span className="icon icon--github" aria-hidden="true" />
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
