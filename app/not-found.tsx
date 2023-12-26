import Link from 'next/link'
import Button from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex h-64 flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p className="mt-2">Could not find requested resource</p>
      <Link href="/" className="mt-4">
        <Button variant="secondary">Return Home</Button>
      </Link>
    </div>
  )
}
