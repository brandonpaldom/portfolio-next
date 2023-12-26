import Link from 'next/link'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import Badge from './badge'

export default function About() {
  return (
    <div className="card flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/profile.jpg"
          width={96}
          height={96}
          alt="Brandon Palmeros"
          priority={false}
          className="rounded-full"
        />
      </Link>
      <p className="mt-4 text-lg font-bold">Brandon Palmeros</p>
      <p className="text-sm">Desarrollo front-end</p>
      <Badge
        variant="outline"
        icon={<FaLocationDot size={16} />}
        className="mt-4"
      >
        Veracruz, México
      </Badge>
    </div>
  )
}
