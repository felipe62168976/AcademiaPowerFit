import { Check } from 'lucide-react'
import { plans } from '../data/siteData'
import SectionTitle from './SectionTitle'
import Button from './Button'

export default function Planos({ onSelectPlan }) {
  return (
    <section id="planos" className="bg-steel py-20" aria-labelledby="planos-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="planos-title" title="Planos" subtitle="Escolha o plano que combina com o seu ritmo. Valores ilustrativos, sujeitos a confirmação." />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`relative flex flex-col p-8 transition duration-200 hover:-translate-y-1 ${
                p.featured ? 'border-2 border-brand bg-ink md:-mt-4 md:pb-12' : 'border border-white/15 bg-ink'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 bg-brand px-3 py-1 font-display text-sm font-bold uppercase tracking-wide">
                  Mais recomendado
                </span>
              )}
              <h3 className="font-display text-3xl font-bold uppercase">{p.name}</h3>
              <p className="mt-4">
                <span className="font-display text-5xl font-extrabold">{p.price}</span>
                <span className="text-zinc-400">{p.period}</span>
              </p>
              <p className="mt-1 text-xs text-zinc-400">Valor de exemplo, editável.</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-zinc-200">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {f}
                  </li>
                ))}
                <li className="flex gap-3 text-zinc-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {p.highlight}
                </li>
              </ul>
              <Button
                href="#contato"
                variant={p.featured ? 'primary' : 'outline'}
                className="mt-8"
                onClick={() => onSelectPlan(p.id)}
                aria-label={`Tenho interesse no ${p.name}`}
              >
                Tenho interesse
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
