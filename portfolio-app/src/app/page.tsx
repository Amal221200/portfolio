import { fetchInfo } from "@/lib/actions";
import { PortableText } from "@portabletext/react";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const info = await fetchInfo()

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-5 md:space-x-5">
        <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-[2.75rem]">
          Home
        </h1>
      </div>
      <div className="items-center gap-x-2 space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image src={info.profile} alt="Amal Murikkoli" width={192} height={192} className="rounded-full object-cover object-top" />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{info.name}</h3>
          <p className="text-center text-gray-500 dark:text-gray-300">{info.overview}</p>
          <div className="flex gap-x-5 pt-6">
            <Link title="GitHub Profile" href="https://github.com/Amal221200" target="_blank">
              <Github className="h-8 w-8 text-teal-500 hover:text-teal-600" />
            </Link>
            <Link title="Email ID" href="mailto:amalmurikkoli2000@gmail.com" target="_blank">
              <Mail className="h-8 w-8 text-teal-500 hover:text-teal-600" />
            </Link>
            <Link title="LinkedIn Profile" href="https://www.linkedin.com/in/amal-murikkoli" target="_blank">
              <Linkedin className="h-8 w-8 text-teal-500 hover:text-teal-600" />
            </Link>
            <Link title="Download Resume" href={info.resume} target="_blank" download="amal_murikkoli_resume">
              <FileDown className="h-8 w-8 text-teal-500 hover:text-teal-600" />
            </Link>
          </div>
        </div>
        <div className="prose prose-lg max-w-none pb-7 pt-8 dark:prose-invert xl:col-span-2">
          <PortableText value={info.description} />
        </div>
      </div>
    </div>
  )
}
