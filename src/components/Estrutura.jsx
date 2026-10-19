import { Dumbbell, HeartPulse, Zap, ShowerHead, UserCheck } from 'lucide-react'
import { structure, images } from '../data/siteData'
import SectionTitle from './SectionTitle'

const icons = { Dumbbell, HeartPulse, Zap, ShowerHead, UserCheck }

export default function Estrutura() {
  return (
    <section id="estrutura" className="bg-steel py-20" aria-labelledby="estrutura-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="estrutura-title" title="Estrutura" subtitle="Conteúdo demonstrativo: confirme os equipamentos e serviços antes de publicar." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {structure.map((item) => {
            const Icon = icons[item.icon]
            return (
              <article key={item.title} className="group overflow-hidden bg-ink transition duration-200 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={images[item.image]} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="flex items-center gap-3 font-display text-2xl font-bold uppercase">
                    <Icon className="text-brand" aria-hidden="true" />
                    {item.title}
                  </h3>
                  <p className="mt-3 text-zinc-300">{item.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
