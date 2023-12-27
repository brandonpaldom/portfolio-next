import { Metadata } from 'next'
import ResumeContent from '@/components/resume/resume-content'
import { getResume } from '@/actions/resume/get-resume'

export const metadata: Metadata = {
  title: 'Currículum | Brandon Palmeros',
  description:
    'Conozca mis habilidades y experiencia profesional en el desarrollo web y el diseño gráfico en mi página de currículum.',
  openGraph: {
    title: 'Currículum | Brandon Palmeros',
    description:
      'Conozca mis habilidades y experiencia profesional en el desarrollo web y el diseño gráfico en mi página de currículum.',
  },
}

export default async function Page() {
  const resume = await getResume()

  return (
    <>
      <h1>Currículum</h1>
      <ResumeContent className="mt-4" resume={resume} />
    </>
  )
}
