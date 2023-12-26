'use client'

import Modal from '../ui/modal'
import ProjectContent from './project-content'
import { Project } from '@/interfaces/project'

interface Props {
  project: Project
}

export default function ProjectModal({ project }: Props) {
  return (
    <Modal>
      <ProjectContent project={project} />
    </Modal>
  )
}
