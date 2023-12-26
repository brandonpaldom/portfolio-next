import Badge from './badge'

const skills: string[] = [
  'Next.js',
  'React',
  'Vue.js',
  'Tailwind CSS',
  'Astro',
  'Maizzle',
  'MongoDB',
  'Express',
]

export default function Skills() {
  return (
    <div className="card flex flex-wrap items-center justify-center gap-2">
      {skills.map((skill) => (
        <Badge variant="secondary" key={skill}>
          {skill}
        </Badge>
      ))}
    </div>
  )
}
