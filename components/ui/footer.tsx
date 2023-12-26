import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex items-center justify-center">
      <p className="text-neutral-700">
        Construido con{' '}
        <Link href="https://nextjs.org/" className="underline">
          Next.js
        </Link>
      </p>
    </div>
  )
}
