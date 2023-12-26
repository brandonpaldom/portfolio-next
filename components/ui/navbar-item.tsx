'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Button from './button'

interface Props {
  path: string
  pathName: string
}

export default function NavbarItem({ path, pathName }: Props) {
  const pathname = usePathname()

  return (
    <Link href={path}>
      <Button variant={pathname === path ? 'primary' : 'secondary'}>
        {pathName}
      </Button>
    </Link>
  )
}
