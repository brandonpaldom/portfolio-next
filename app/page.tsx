import ProjectGrid from '@/components/projects/project-grid'
import { projects } from '@/data'

export default async function Page() {
  return (
    <>
      <h1>Portafolio</h1>
      <ProjectGrid className="mt-4" projects={projects} />
    </>
  )
}
