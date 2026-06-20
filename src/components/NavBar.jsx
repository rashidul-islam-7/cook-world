"use client";

import Link from "next/link";
import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await signOut();
    router.push("/signin");
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Browse Recipes",
      href: "/recipes",
    },
  ];

  const activeClass =
    "border-b-2 border-orange-300 pb-0.5 hover:text-orange-300 font-medium";

  const normalClass =
    "text-base hover:text-orange-300 transition-colors duration-200";

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-2 sm:px-8 md:px-16">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" p-2 mr-2 lg:hidden">
              <RiMenu2Fill size={22} />
            </div>

            <div
              tabIndex={0}
              className="dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-4 shadow"
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        pathname === link.href ? activeClass : normalClass
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {user && (
                  <>
                    <li>
                      <Link
                        href="/dashboard"
                        className={
                          pathname === "/dashboard" ? activeClass : normalClass
                        }
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/profile"
                        className={
                          pathname === "/profile" ? activeClass : normalClass
                        }
                      >
                        Profile
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Logo */}
          <h2 className="text-2xl lg:text-3xl font-extrabold -ml-2 ">
            Cook<span className="text-orange-500">World</span>
          </h2>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? activeClass : normalClass}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {user && (
              <>
                <li>
                  <Link
                    href="/dashboard"
                    className={
                      pathname === "/dashboard" ? activeClass : normalClass
                    }
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    href="/profile"
                    className={
                      pathname === "/profile" ? activeClass : normalClass
                    }
                  >
                    Profile
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <p className="hidden md:block font-medium uppercase">
                {user.name}
              </p>

              <button
                onClick={handleLogout}
                className="border border-orange-300 px-4 py-1.5 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/signin"
                className={`font-medium ${
                  pathname === "/signin" ? "text-orange-400" : "text-[#097d77]"
                }`}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className={`rounded-full px-5 py-1 text-white transition-all bg-orange-400 hover:bg-orange-500
                `}
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
