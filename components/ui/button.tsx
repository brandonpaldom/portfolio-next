import clsx from 'clsx'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  className?: string
  icon?: JSX.Element
  children: React.ReactNode
}

export default function Button({
  type = 'button',
  variant = 'primary',
  className,
  icon,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-300',
        variant === 'primary' && 'bg-white text-black hover:bg-neutral-100',
        variant === 'secondary' &&
          'bg-neutral-800 text-white hover:bg-neutral-700',
        variant === 'outline' &&
          'bg-transparent text-white ring-1 ring-neutral-800 hover:bg-neutral-800',
        variant === 'ghost' && 'bg-transparent text-white hover:bg-neutral-800',
        className,
      )}
    >
      {icon}
      {children}
    </button>
  )
}
