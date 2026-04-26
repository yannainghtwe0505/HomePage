export type Department = 'Backend' | 'Frontend' | 'Mobile' | 'DevOps' | 'Data' | 'Platform'

export type JobLocation = 'Tokyo' | 'Remote' | 'Hybrid'

export type ExperienceLevel = 'Junior' | 'Mid' | 'Senior'

export type JobListItem = {
  id: string
  title: string
  titleJa: string
  department: Department
  location: JobLocation
  employmentType: 'Full-time' | 'Contract'
  employmentTypeJa: string
  summary: string
  summaryJa: string
  tags: string[]
  hot?: boolean
  level: ExperienceLevel
}

export type JobDetail = JobListItem & {
  responsibilities: string[]
  responsibilitiesJa: string[]
  requiredSkills: string[]
  requiredSkillsJa: string[]
  preferredSkills: string[]
  preferredSkillsJa: string[]
  techStack: string[]
  salaryRange?: string
  salaryRangeJa?: string
  growthPath: string
  growthPathJa: string
}
