import { Metadata } from 'next'
import ProjectContent from '@/components/projects/project-content'
import { Project } from '@/interfaces/project'
import { getProjectBySlug } from '@/helpers/projects'
import { projects } from '@/data'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const project: Project = getProjectBySlug(slug)

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }))
}

export default function Page({ params }: Props) {
  const { slug } = params
  const project = getProjectBySlug(slug)

  return <ProjectContent project={project} />
}
