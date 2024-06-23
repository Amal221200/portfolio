import { fetcthProjects } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 120;// revalidate at most every hour

async function ProjectsPage() {
    const projects = await fetcthProjects()

    return (
        <div className="divide-y divide-gray-500 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="sm text-3xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-[3rem]">All Projects</h1>
            </div>
            <div className="grid gap-y-8 pt-8 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:grid-cols-3 lg:gap-10">
                {
                    projects.map(project => (
                        <article key={project._id} className="space-y-3 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg shadow-teal-100 dark:border-zinc-600 dark:bg-black dark:shadow-gray-700">
                            <div className="relative h-56 w-full">
                                <Image src={project.image} alt="p" fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <Link href={project.link} target="_blank">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h4>
                                </Link>
                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {project.overview}
                                </p>
                                <Link href={project.link} target="_blank" className="group mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
                                    Learn More!
                                    <span className="block transition-all group-hover:ms-0.5">
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectsPage;