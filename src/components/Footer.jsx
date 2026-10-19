import { ArrowUp } from 'lucide-react'
import { siteInfo, contactInfo } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-steel py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-extrabold uppercase">Power<span className="text-brand">Fit</span></p>
          <p className="mt-2 text-zinc-400">Academia Power Fit</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2">
            {siteInfo.navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="text-zinc-300 hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-zinc-300">
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.address}</p>
          <ul className="flex gap-4 pt-2">
            {contactInfo.socials.map((s) => (
              <li key={s.label}><a href={s.href} className="underline hover:text-white">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-4 pt-6 text-sm text-zinc-400 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Academia Power Fit. Todos os direitos reservados.</p>
        <a href="#inicio" className="inline-flex items-center gap-2 hover:text-white">
          Voltar ao topo <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
