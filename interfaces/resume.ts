export interface Resume {
  education?:      EducationEntityOrCertificationsEntity[] | null
  experience?:     ExperienceEntity[] | null
  certifications?: EducationEntityOrCertificationsEntity[] | null
}
export interface EducationEntityOrCertificationsEntity {
  image:        string
  title:        string
  organization: string
  date:         string
}
export interface ExperienceEntity {
  image:        string
  title:        string
  organization: string
  date:         string
  summary:      string
}
