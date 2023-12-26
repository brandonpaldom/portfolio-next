export interface Project {
  id:           string
  slug:         string
  coverImage:   string
  name:         string
  tags?:        string[] | null
  description:  string
  client?:      string | null
  url?:         string | null
  github?:      string | null
  images?:      string[] | null
  squareImage?: boolean | null
  offline?:     boolean | null
  projects?:    ProjectEntity[] | null
  order:        number
}
export interface ProjectEntity {
  client:  string
  url:     string
  image:   string
}
