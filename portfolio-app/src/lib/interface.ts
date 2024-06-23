export interface ProjectType {
    _id: string,
    title: string,
    overview: string,
    _createdAt: string,
    image: string,
    link: string
}

export interface SkillType {
    _id: string,
    title: string,
    overview: string,
    _createdAt: string,
    image: string
}

export interface InfoType {
    _id: string,
    name: string,
    overview: string,
    _createdAt: string,
    profile: string,
    resume: string,
    description: any
}
