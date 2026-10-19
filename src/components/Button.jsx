const styles = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-ink',
}

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-lg font-bold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5'
  const cls = `${base} ${styles[variant]} ${className}`
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
