export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Nelson — Portfolio</span>
        <span>React + Vite + Sass</span>
      </div>
    </footer>
  )
}
