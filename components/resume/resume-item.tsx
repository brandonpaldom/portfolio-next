import Image from 'next/image'
import ResumeImageLoader from './resume-image-loader'
import {
  EducationEntityOrCertificationsEntity,
  ExperienceEntity,
} from '@/interfaces/resume'

interface Props {
  content: EducationEntityOrCertificationsEntity | ExperienceEntity
}

export default function ResumeItem({ content }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        {content.image ? (
          <Image
            src={content.image}
            width={48}
            height={48}
            alt={content.organization}
            className="rounded-lg"
          />
        ) : (
          <ResumeImageLoader />
        )}
        <div>
          <p className="font-semibold">{content.title}</p>
          <p className="text-sm text-neutral-300">
            {content.organization} • {content.date}
          </p>
        </div>
      </div>
      {'summary' in content && (
        <div>
          <p className="text-sm text-neutral-300">{content.summary}</p>
        </div>
      )}
    </div>
  )
}
