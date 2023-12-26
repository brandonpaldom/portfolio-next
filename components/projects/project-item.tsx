import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/interfaces/project'

interface Props {
  project: Project
}

export default function ProjectItem({ project }: Props) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="rounded-lg bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
      scroll={false}
    >
      <Image
        src={project.coverImage}
        width={600}
        height={400}
        alt=""
        className="rounded-t-lg"
        priority={false}
      />
      <div className="px-4 py-3">
        <p className="font-semibold">{project.name}</p>
      </div>
    </Link>
  )
}
