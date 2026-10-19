import { Clock, Info } from 'lucide-react'
import { schedule } from '../data/siteData'
import SectionTitle from './SectionTitle'

export default function Horarios() {
  return (
    <section id="horarios" className="py-20" aria-labelledby="horarios-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="horarios-title" title="Horários" subtitle="Treine no horário que cabe na sua rotina." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schedule.map((s) => (
            <div
              key={s.day}
              className={`border-l-4 bg-steel p-6 transition duration-200 hover:-translate-y-1 ${s.special ? 'border-brand' : 'border-white/30'}`}
            >
              <Clock className="mb-3 text-brand" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold uppercase">{s.day}</h3>
              <p className="mt-1 text-xl text-zinc-200">{s.hours}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 flex items-start gap-3 text-zinc-300" role="note">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
          Horários demonstrativos. Confirme os horários de funcionamento diretamente com a academia.
        </p>
      </div>
    </section>
  )
}
