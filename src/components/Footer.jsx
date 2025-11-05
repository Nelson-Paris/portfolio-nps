import { profile } from '@/data/profile'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Nelson — Portfolio</span>
        <span>React + Vite + Sass</span>
        <nav aria-label="Réseaux" className="footer-social">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              className="icon icon--linkedin"
              aria-label="LinkedIn"
              target="_blank" rel="me noopener noreferrer"
              title="LinkedIn"
            />
          )}
          {profile.github && (
            <a
              href={profile.github}
              className="icon icon--github"
              aria-label="GitHub"
              target="_blank" rel="me noopener noreferrer"
              title="GitHub"
            />
          )}
        </nav>
      </div>
      
    </footer>
  )
}
