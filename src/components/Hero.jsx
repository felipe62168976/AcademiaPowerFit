import { images } from '../data/siteData'
import Button from './Button'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center pt-16" aria-labelledby="hero-title">
      <img src={images.hero} alt="Ambiente de academia com equipamentos de musculação (imagem ilustrativa)" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <h1 id="hero-title" className="hero-in max-w-4xl font-display text-6xl font-extrabold uppercase leading-[0.9] sm:text-8xl lg:text-9xl">
          Seu próximo nível <span className="text-brand">começa aqui.</span>
        </h1>
        <p className="hero-in-delay mt-6 max-w-xl text-lg text-zinc-200 sm:text-xl">
          Inicie sua jornada fitness na Power Fit: treino de verdade, ambiente que motiva e um plano para cada objetivo.
        </p>
        <div className="hero-in-delay mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#planos">Conheça nossos planos</Button>
          <Button href="#contato" variant="outline">Fale conosco</Button>
        </div>
      </div>
    </section>
  )
}
