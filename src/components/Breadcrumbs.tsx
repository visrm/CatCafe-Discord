import Link from 'next/link'

export type Crumb = {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-mono text-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-primary font-medium' : ''}>{item.label}</span>
              )}
              {!isLast && <span className="text-subtle">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
