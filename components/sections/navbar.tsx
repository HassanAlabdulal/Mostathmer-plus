"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import ModeToggle from "../mode-toggle";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "الصفحة الرئيسية",
  },
  {
    href: "/",
    label: "الإستثمارات",
  },
  {
    href: "/",
    label: "إضافة استثمار",
  },
  //   {
  //     href: "#faq",
  //     label: "FAQ",
  //   },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 py-2 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? " bg-[#ffffff] dark:bg-[#0a0a0b]" : "bg-transparent"
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold  ">
            <a
              href="/"
              className="scroll-m-20 text-2xl max-sm:mr-4 font-bold tracking-tight 
                    lg:text-3xl rounded-xl flex justify-center items-center gap-2"
            >
              <Image
                src="/assets/logo-50.svg"
                width={40}
                height={40}
                alt="Logo"
              />
              مُستثمر بلس
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <Button className="sr-only">Menu Icon</Button>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle
                    className="scroll-m-20 text-2xl font-bold tracking-tight 
                     rounded-xl"
                  >
                    مُستثمر بلس
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`font-semibold hover:text-xl text-lg ${buttonVariants(
                        {
                          variant: "ghost",
                        }
                      )}`}
                    >
                      {label}
                    </a>
                  ))}
                  <Button asChild>
                    <Link href="/"> تسجيل الدخول</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-6">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className=" hover:text-lg transition-all duration-150"
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button asChild>
              <Link href="/sign-in"> تسجيل الدخول</Link>
            </Button>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
