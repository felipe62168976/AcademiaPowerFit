import { useEffect, useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, CircleCheck } from 'lucide-react'
import { plans, contactInfo } from '../data/siteData'
import SectionTitle from './SectionTitle'
import Button from './Button'

const empty = { nome: '', email: '', telefone: '', plano: '', mensagem: '' }

function validate(v) {
  const e = {}
  if (v.nome.trim().length < 3) e.nome = 'Informe seu nome completo.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Informe um e-mail válido, como nome@exemplo.com.'
  const digits = v.telefone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) e.telefone = 'Informe o telefone com DDD (10 ou 11 dígitos).'
  if (!v.plano) e.plano = 'Escolha um plano de interesse.'
  return e
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-medium">
        {label} {required && <span className="text-brand" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p id={`${id}-erro`} className="mt-1.5 text-sm font-medium text-red-400">{error}</p>}
    </div>
  )
}

const inputCls = 'w-full border border-white/25 bg-ink px-4 py-3 text-white placeholder:text-zinc-500'

export default function Contato({ selectedPlan }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (selectedPlan) setValues((v) => ({ ...v, plano: selectedPlan }))
  }, [selectedPlan])

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setSent(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      // Envio ILUSTRATIVO: nenhum dado é enviado ou armazenado.
      setSent(true)
      setValues(empty)
    } else {
      setSent(false)
    }
  }

  const props = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    className: inputCls,
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${name}-erro` : undefined,
  })

  const { whatsappDigits } = contactInfo

  return (
    <section id="contato" className="py-20" aria-labelledby="contato-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionTitle id="contato-title" title="Contato" subtitle="Quer se matricular? Preencha o formulário e fale com a gente." />
          <ul className="space-y-5 text-lg">
            <li className="flex gap-3"><Phone className="shrink-0 text-brand" aria-hidden="true" /><span>Telefone: {contactInfo.phone}</span></li>
            <li className="flex gap-3">
              <MessageCircle className="shrink-0 text-brand" aria-hidden="true" />
              {whatsappDigits ? (
                <a className="underline" href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noopener noreferrer">WhatsApp: {contactInfo.whatsapp}</a>
              ) : (
                <span>WhatsApp: {contactInfo.whatsapp}</span>
              )}
            </li>
            <li className="flex gap-3"><MapPin className="shrink-0 text-brand" aria-hidden="true" /><span>{contactInfo.address}</span></li>
            <li className="flex gap-3"><Clock className="shrink-0 text-brand" aria-hidden="true" /><span>Atendimento: {contactInfo.serviceHours}</span></li>
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Redes sociais">
            {contactInfo.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 transition hover:border-brand hover:text-brand">
                  {s.label} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zinc-400">Dados de contato de exemplo, editáveis em src/data/siteData.js.</p>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-5 bg-steel p-6 sm:p-8" aria-label="Formulário de contato">
          <Field id="nome" label="Nome completo" required error={errors.nome}>
            <input type="text" autoComplete="name" {...props('nome')} />
          </Field>
          <Field id="email" label="E-mail" required error={errors.email}>
            <input type="email" autoComplete="email" {...props('email')} />
          </Field>
          <Field id="telefone" label="Telefone ou WhatsApp" required error={errors.telefone}>
            <input type="tel" autoComplete="tel" placeholder="(00) 00000-0000" {...props('telefone')} />
          </Field>
          <Field id="plano" label="Plano de interesse" required error={errors.plano}>
            <select {...props('plano')}>
              <option value="">Selecione um plano</option>
              {plans.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </Field>
          <Field id="mensagem" label="Mensagem">
            <textarea rows="4" {...props('mensagem')} />
          </Field>
          <Button type="submit" className="w-full">Enviar mensagem</Button>
          <p className="text-sm text-zinc-400">Campos com * são obrigatórios. O envio é apenas ilustrativo: não há backend e nenhum dado é enviado ou armazenado.</p>
          {sent && (
            <p role="status" className="flex items-start gap-2 border border-green-500/50 bg-green-950/40 p-4 text-green-300">
              <CircleCheck className="mt-0.5 shrink-0" aria-hidden="true" />
              Formulário validado com sucesso. Como este é um site demonstrativo, sua mensagem não foi enviada.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
