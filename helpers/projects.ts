import { projects } from '@/data'
import { Project } from '@/interfaces/project'

export const getProjectBySlug = (slug: string): Project => {
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    throw new Error(`Project with slug: ${slug} not found`)
  }

  return project
}
