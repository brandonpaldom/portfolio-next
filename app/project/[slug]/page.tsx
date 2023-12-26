import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectContent from '@/components/projects/project-content'
import { getProject } from '@/actions/projects/get-project'
import { Project } from '@/interfaces/project'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const project: Project = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/project/${slug}`,
  ).then((res) => res.json())

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
  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects`,
  ).then((res) => res.json())

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }))
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return <ProjectContent project={project} />
}
