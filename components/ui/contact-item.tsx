import Link from 'next/link'

interface Props {
  href: string
  icon: JSX.Element
}

export default function ContactItem({ href, icon }: Props) {
  return (
    <Link
      href={href}
      className="flex size-10 items-center justify-center rounded-full bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}
