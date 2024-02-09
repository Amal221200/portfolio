import { fetcthSkills } from "@/lib/actions";
import Image from "next/image";

export const revalidate = 120;

async function SkillsPage() {
    const skills = await fetcthSkills();

    return (
        <div className="divide-y divide-gray-500 dark:divide-gray-700 pb-6">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm sm:leading-10 md:text-6xl md:leading-[3rem]">Skills</h1>
            </div>
            <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                {
                    skills.map(skill => (
                        <article key={skill._id} className="overflow-hidden space-y-3 border border-gray-100 dark:border-zinc-600 rounded-lg bg-white dark:bg-black shadow-lg shadow-teal-100 dark:shadow-gray-700">
                            <div className="relative h-56 w-full">
                                <Image src={skill.image} alt="p" fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
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