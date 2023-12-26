import clsx from 'clsx'
import ProjectItem from './project-item'
import { Project } from '@/interfaces/project'

interface Props {
  className?: string
  projects: Project[]
}

export default function ProjectGrid({ className = '', projects }: Props) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3',
        className,
      )}
    >
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project} />
      ))}
    </div>
  )
}
