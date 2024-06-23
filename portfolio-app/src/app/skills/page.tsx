import { fetcthSkills } from "@/lib/actions";
import Image from "next/image";

export const revalidate = 120;

async function SkillsPage() {
    const skills = await fetcthSkills();

    return (
        <div className="divide-y divide-gray-500 pb-6 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="sm text-3xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-[3rem]">Skills</h1>
            </div>
            <div className="grid gap-y-8 pt-8 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:grid-cols-3 lg:gap-10">
                {
                    skills.map(skill => (
                        <article key={skill._id} className="space-y-3 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg shadow-teal-100 dark:border-zinc-600 dark:bg-black dark:shadow-gray-700">
                            <div className="relative h-56 w-full">
                                <Image src={skill.image} alt="p" fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.title}</h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {skill.overview}
                                </p>
                            </div>
                        </article>
                    ))
                }

            </div>
        </div>
    );
}

export default SkillsPage;