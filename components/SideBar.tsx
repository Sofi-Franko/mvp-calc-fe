import React from "react";
import Link from "next/link";
import Image from "next/image";
import {NavLinks} from "@/constants";
import AuthProviders from "@/components/AuthProviders";

const BORDER = {border: "2px", borderStyle: "solid", borderColor: "lavenderblush", borderRadius: "25px"}

const SideBar = () => {
  const session = null;

  return (
    <div className="flex flex-col gap-huge p-3" style={BORDER}>
      <div className="ml-2">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={115}
            height={43}
          />
          {session ? (
            <Image
              src="/hearth-purple.svg" // TODO user's avatar
              alt="Avatar"
              className="rounded-full"
              width={30}
              height={30}
            />
          ) : (<span className="bold">X</span>)}

        </Link>
      </div>
      <menu className="">
        <ul className="xl:flex flex-col hidden gap-medium">
          {NavLinks.map((link) => <Link href={link.href} key={link.key}>{link.text}</Link>)}
        </ul>
      </menu>
    </div>



  );
};

export default SideBar;
