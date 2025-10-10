import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Scroll(){
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return true }
      return false
    }
    if (!tryScroll()) requestAnimationFrame(() => { tryScroll() || setTimeout(tryScroll, 50) })
  }, [pathname, hash])

  useEffect(() => { if (!hash) window.scrollTo({ top: 0 }) }, [pathname, hash])

  return null
}
