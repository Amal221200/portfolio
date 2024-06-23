"use server";

import { InfoType, ProjectType, SkillType } from "./interface";
import { client } from "./sanity";

const projectsQuery = `*[ _type=="project" ] {_id,title,overview, _createdAt, "image":image.asset->url,link} | order(createdAt asc)`;
const skillsQuery = `*[ _type=="skill" ] {_id,title,overview, _createdAt, "image":image.asset->url} | order(createdAt asc)`;
const infoQuery = `*[ _type=="info" ][0] {_id, name, description,"resume":resume.asset->url, _createdAt, "profile":profile.asset->url}`;

export async function fetcthProjects(): Promise<Array<ProjectType>> {
    const data = await client.fetch(projectsQuery);
    return data;
}

export async function fetcthSkills(): Promise<Array<SkillType>> {
    const data = await client.fetch(skillsQuery);
    return data;
}

export async function fetchInfo(): Promise<InfoType> {
    const data = await client.fetch(infoQuery);
    return data;
}

