"use client";

import Link from "next/link";
import { Bell, Settings, Heart } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/avatar";
import Image from "next/image";
import nav from "@/assets/nav.svg";
import Search from "@/components/search";

const Navbar = () => {
  return (
    <nav className=" bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-16">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">LOGO</span>
        </Link>

        <div className="ml-8 mr-4 hidden flex-1 sm:block border-[rgba(89,103,128,1)]">
          <Search />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <button className="w-8 h-8 flex items-center border border-[rgba(195,212,233,0.4)] justify-center rounded-full hover:bg-accent">
            <Heart className="h-5 w-5" />
          </button>

          <button className="w-8 h-8 flex items-center border border-[rgba(195,212,233,0.4)]  relative rounded-full p-2 hover:bg-accent">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button className="w-8 h-8 flex items-center border border-[rgba(195,212,233,0.4)]  rounded-full p-2 hover:bg-accent">
            <Settings className="h-5 w-5" />
          </button>

          <Avatar className="h-8 w-8">
            <Image className="h-8 w-auto" src={nav} alt="Nav" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
