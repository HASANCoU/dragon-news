"use client";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session,isPending } = authClient.useSession();
  const user = session?.user;
  
  return (
   
    <div className="flex justify-between mt-4 items-center">
      <div></div>
      <ul className="flex gap-4 text-gray-400">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

       {isPending? <h2>Loading</h2> : user ? <div className="flex items-center gap-2">
        <h2 className="font-bold">Hello, {user.name}</h2>
        <Image
          src={ user.image||userAvatar}
          height={40}
          width={40}
          alt="User Avatar"
          className="rounded-full"
        ></Image>
        <button className="btn bg-gray-700 text-white px-15" onClick={async()=>{await authClient.signOut();}}>
          Logout
        </button>
      </div> :<Link href="/login" className="btn bg-gray-700 text-white px-15">
          Login
        </Link>}
      
    </div>
  );
};

export default NavBar;
