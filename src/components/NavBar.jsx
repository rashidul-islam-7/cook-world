"use client";

import Link from "next/link";
import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
// import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

const NavBar = () => {
  const pathname = usePathname;
  const router = useRouter();

  const { data, isPending } = useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await signOut();
    router.push("/signin");
  };

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm px-5 sm:px-8 md:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-base ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-base">
                <Link href={"/browse_recipes"}>Browse Recipes</Link>
              </li>
              <li className="text-base">
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li className="text-base">
                <Link href={"profile"}>Profile</Link>
              </li>
            </ul>
          </div>
          {/* Logo  */}
          <div>
            <h2>CookWold</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-base">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-base">
              <Link href={"/recipes"}>Browse Recipes</Link>
            </li>
            <li className="text-base">
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="text-base">
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex justify-center items-center gap-2">
              <p className=" hidden md:inline-block uppercase text-base">
                {user.name}
              </p>

              <button
                onClick={handleLogout}
                className="text-base cursor-pointer hover:text-blue-500  border py-1 px-2 rounded-sm border-blue-600 "
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link href={"/signin"} className="mr-5 text-base px-5 py-1.5  text-[#097d77] font-bold ">
                Login
              </Link>
              <Link
                href={"signup"}
                className=" bg-orange-400 text-white rounded-full px-5 py-1.5 text-base "
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
