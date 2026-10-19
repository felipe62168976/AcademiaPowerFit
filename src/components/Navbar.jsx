import { useEffect, useState } from 'react'
import { Dumbbell, Menu, X } from 'lucide-react'
import { siteInfo } from '../data/siteData'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Navegação principal">
        <a href="#inicio" className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase">
          <Dumbbell className="text-brand" aria-hidden="true" />
          Power<span className="text-brand">Fit</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteInfo.navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-medium text-zinc-300 transition hover:text-white">{l.label}</a>
            </li>
          ))}
          <li>
            <Button href="#contato" className="!px-5 !py-2 !text-base">Matricule-se</Button>
          </li>
        </ul>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-white/10 bg-ink px-4 pb-6 pt-2 md:hidden">
          {siteInfo.navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-lg font-medium">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Button href="#contato" onClick={() => setOpen(false)} className="w-full">Matricule-se</Button>
          </li>
        </ul>
      )}
    </header>
  )
}
