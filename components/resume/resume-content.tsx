import clsx from 'clsx'
import ResumeItem from './resume-item'
import { Resume } from '@/interfaces/resume'

interface Props {
  className?: string
  resume: Resume
}

export default function ResumeContent({ className, resume }: Props) {
  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <h2>Educación</h2>
      {resume.education?.map((content) => (
        <ResumeItem key={content.organization} content={content} />
      ))}
      <h2>Experiencia</h2>
      {resume.experience?.map((content) => (
        <ResumeItem key={content.organization} content={content} />
      ))}
      <h2>Certificaciones</h2>
      {resume.certifications?.map((content) => (
        <ResumeItem key={content.organization} content={content} />
      ))}
    </div>
  )
}
