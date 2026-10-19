export default function SectionTitle({ id, title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 id={id} className="font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl">
        {title}
      </h2>
      <div className="mt-4 h-1.5 w-20 bg-brand" aria-hidden="true" />
      {subtitle && <p className="mt-5 text-lg text-zinc-300">{subtitle}</p>}
    </div>
  )
}
