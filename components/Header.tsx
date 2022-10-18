import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  let router = useRouter();
  const routeName = router.pathname;

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <nav
      className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded "
      style={{ background: "rgba(0,0,0,.6)" }}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center" passHref>
          <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white tracking-wider">
            Developer Gram
          </h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${
            openMobileMenu ? "show" : "hidden"
          } w-full md:block md:w-auto font-albert`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
              <Link href="/" aria-current="page">
                <p
                  className={`${
                    router.pathname === "/"
                      ? "bg-red text-white"
                      : "text-gray-400"
                  } cursor-pointer block py-2 pr-4 pl-3 rounded md:bg-transparent   md:p-0`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/workshop" passHref>
                <p
                  className={` ${
                    router.pathname === "/workshop"
                      ? "bg-red text-white"
                      : "text-gray-400"
                  } cursor-pointer block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 `}
                >
                  Workshop
                </p>
              </Link>
            </li>
            <Link href="/style-guide" passHref>
              <p
                className={` ${
                  router.pathname === "/style-guide"
                    ? "bg-red text-white"
                    : "text-gray-400"
                } cursor-pointer block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 `}
              >
                Style Guide
              </p>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
