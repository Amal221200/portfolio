"use client";
import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

const NavLinks = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/skills',
        text: 'Skills'
    },
    {
        href: '/projects',
        text: 'Projects'
    },
]
const Navbar = () => {

    const pathname = usePathname();

    return (
        <Disclosure as={'nav'}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                    <Link href="/">
                                        <h1 className="text-2xl font-medium">
                                            Amal <span className="text-teal-500">Murikkoli</span>
                                        </h1>
                                    </Link>
                                </div>

                                <div className="ml-6 hidden items-center sm:flex sm:space-x-8">
                                    {
                                        NavLinks.map((navLink) => (
                                            <Link key={navLink.href} href={navLink.href} prefetch className={`${pathname === navLink.href ? "border-teal-500 dark:text-white" : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white"} border-b-2 text-sm font-medium h-full inline-flex items-center px-1 pt-1`}>
                                                {navLink.text}
                                            </Link>
                                        ))
                                    }

                                    <ThemeButton />
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center gap-x-1 sm:hidden">
                                <ThemeButton />
                                <Disclosure.Button as="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                                    {open ? (
                                        <X />
                                    ) : (
                                        <Menu />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            {
                                NavLinks.map((navLink) => (
                                    <Link key={navLink.href} href={navLink.href} prefetch className={`${pathname === navLink.href ? "text-teal-500 bg-teal-50 border-teal-500 dark:bg-gray-800" : "border-transparent hover:border-gray-300 text-gray-500 bg-gray-50 dark:bg-gray-700 hover:text-gray-700 dark:hover:text-white"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
                                        {navLink.text}
                                    </Link>
                                ))
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;