import Link from 'next/link'
import Image from 'next/image'
import { FaEarthAmericas, FaGithub } from 'react-icons/fa6'
import Badge from '../ui/badge'
import Button from '../ui/button'
import { Project } from '@/interfaces/project'
import { json } from 'stream/consumers'
import Alert from '../ui/alert'

interface Props {
  project: Project
}

export default function ProjectContent({ project }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1>{project.name}</h1>
      {project.offline && (
        <Alert>Este proyecto está actualmente fuera de línea.</Alert>
      )}
      {project.tags && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <p>{project.description}</p>
      {project.url && (
        <div className="flex items-center gap-2">
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <Button icon={<FaEarthAmericas />}>Ver proyecto</Button>
          </Link>
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" icon={<FaGithub />}>
              Ver código
            </Button>
          </Link>
        </div>
      )}
      {project.images && (
        <div
          className={
            project.squareImage
              ? 'grid grid-cols-2 gap-4'
              : 'flex flex-col gap-4'
          }
        >
          {project.images.map((image) => (
            <Image
              key={image}
              src={image}
              width={900}
              height={600}
              alt=""
              priority={false}
              className="rounded-lg"
            />
          ))}
        </div>
      )}
      {project.projects && (
        <div className="flex flex-col gap-4">
          {project.projects.map((project) => (
            <div
              key={project.client}
              className="flex flex-col rounded-lg border border-neutral-800 transition-all duration-300 hover:bg-neutral-800"
            >
              <Image
                key={project.image}
                src={project.image}
                width={900}
                height={600}
                alt=""
                priority={false}
                className="rounded-t-lg"
              />
              <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
                <span className="font-bold">{project.client}</span>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button icon={<FaEarthAmericas />}>Ir al sitio web</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
