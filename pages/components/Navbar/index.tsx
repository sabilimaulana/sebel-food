import { useState } from "react";
import cx from "classnames";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const svgVariants: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const menuClass = cx({
    "text-sm": true,
    "mt-6": !isShowMenu,
    hidden: !isShowMenu,
    "md:block": true
  });

  return (
    <nav className="text-right">
      <div className="flex justify-between justify-items-end items-center">
        <h1 className="font-bold uppercase px-4 py-6 border-b border-gray-100 text-xl md:text-4xl">
          <Link href="/">
            <a className="hover:text-gray-700">
              Sebel <span className="text-red-500">Food</span>
            </a>
          </Link>
        </h1>
        <div
          className="px-4 cursor-pointer md:hidden"
          onClick={() => setIsShowMenu((c) => !c)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>
      </div>
      <ul className={menuClass}>
        <li className="text-gray-700 font-bold py-1">
          <Link href="/">
            <a className="px-4 flex justify-end gap-2 border-r-4 text-lg items-center border-primary">
              <span>Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li className="py-1">
          <Link href="/">
            <a className="px-4 flex justify-end gap-2 border-r-4 text-lg items-center border-white">
              <span>About</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li className="py-1">
          <Link href="/">
            <a className="px-4 flex justify-end gap-2 border-r-4 text-lg items-center border-white">
              <span>Contact</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
