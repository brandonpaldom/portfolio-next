import ProjectGrid from '@/components/projects/project-grid'
import { getProjects } from '@/actions/projects/get-projects'

export default async function Page() {
  const projects = await getProjects()

  return (
    <>
      <h1>Portafolio</h1>
      <ProjectGrid className="mt-4" projects={projects} />
    </>
  )
}
