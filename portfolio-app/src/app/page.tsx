import { fetchInfo } from "@/lib/actions";
import { PortableText } from "@portabletext/react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
const info  = await fetchInfo()

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-[2.75rem]">
          Home
        </h1>
      </div>
      <div className="items-center gap-x-2 space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image src={info.profile} alt="Amal Murikkoli" width={192} height={192} className="rounded-full object-cover object-top" />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{info.name}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">{info.overview}</p>
          <div className="flex gap-x-5 pt-6">
            <Link href="https://github.com/Amal221200" target="_blank">
              <Github className="w-8 h-8 text-teal-500 hover:text-teal-600" />
            </Link>
            {/* <Link href="https://www.linkedin.com/in/amal-murikkoli-42713a2a0/" target="_blank">
              <Linkedin className="w-8 h-8 text-teal-500 hover:text-teal-600" />
            </Link> */}
            <Link href="mailto:amalmurikkoli2000@gmail.com" target="_blank">
              <Mail className="w-8 h-8 text-teal-500 hover:text-teal-600" />
            </Link>
            <Link href="https://www.instagram.com/amalmurikkoli" target="_blank">
              <Instagram className="w-8 h-8 text-teal-500 hover:text-teal-600" />
            </Link>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
        <PortableText value={info.description} />
        </div>
      </div>
    </div>
  )
}
