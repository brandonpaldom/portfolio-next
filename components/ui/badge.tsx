import clsx from 'clsx'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  icon?: JSX.Element
  children: React.ReactNode
}

export default function Badge({
  variant = 'primary',
  className,
  icon,
  children,
}: Props) {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium',
        variant === 'primary' && 'bg-white text-black',
        variant === 'secondary' && 'bg-neutral-800 text-white',
        variant === 'outline' &&
          'bg-transparent text-white ring-1 ring-neutral-800',
        className,
      )}
    >
      {icon}
      <p>{children}</p>
    </div>
  )
}
