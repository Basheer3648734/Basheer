import Header from "./Header";
import Link from "next/link";
import { useState } from "react";
export default function NavBar(props) {
  const [isNavbarModalOpen, setNavbarModelState] = useState(false);

  return (
    <div
      className={` top-0 left-0  w-[100vw] sm:overflow-hidden sm:w-[100%] z-[10] ${
        isNavbarModalOpen ? "h-[100vh] bg-[black] absolute" : ""
      }`}
    >
      <header
        className={` w-[100%]  flex flex-row flex-wrap flex-1  justify-between items-center px-[20px] py-[10px] sm:p-[20px] sm:px-[0px] ${
          isNavbarModalOpen ? "bg-[black]" : ""
        } sm:z-[10] `}
      >
        <div className={`${isNavbarModalOpen ? "text-[white] z-[20]" : ""}`}>
          <Header />
        </div>
        <button
          className={`text-3xl sm:hidden ${
            isNavbarModalOpen ? "text-[white]" : ""
          }`}
          onClick={() => setNavbarModelState((prevState) => !prevState)}
        >
          {isNavbarModalOpen ? "x" : "="}
        </button>
        <nav
          className={` w-[100%] sm:w-auto sm:block ${
            !isNavbarModalOpen ? "hidden" : ""
          }`}
        >
          <ul className="text-[white] sm:text-[black] flex flex-col sm:flex-row justify-around sm:flex-1 m-[10px] sm:font-[500] sm:text-gray-700 ">
            <li className="p-[10px]  ">
              <Link href="/">
                <a
                  className={`sm:px-[10px] hover:text-blue-500 ${
                    props.page == "home" ? "highlighter" : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <hr className="bg-[gray]  opacity-40 sm:hidden" />
            <li className="p-[10px]  sm:text-[black]">
              <Link href="/about">
                <a
                  className={`sm:px-[10px] ${
                    props.page == "about" ? "highlighter" : ""
                  }`}
                >
                  About Me
                </a>
              </Link>
            </li>
            <hr className="bg-[gray] opacity-40 sm:hidden" />
            <li className="p-[10px]  sm:text-[black]">
              <Link href="/projects">
                <a
                  className={`sm:px-[10px] ${
                    props.page == "projects" ? "highlighter" : ""
                  }`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <hr className="bg-[gray] opacity-40 sm:hidden" />
            <li className="p-[10px]  sm:text-[black]">
              <Link href="/connect">
                <a
                  className={`sm:px-[10px] ${
                    props.page == "connect" ? "highlighter" : ""
                  }`}
                >
                  Connect
                </a>
              </Link>
            </li>
            <hr className="bg-[gray] opacity-40 sm:hidden" />
          </ul>
        </nav>
      </header>
    </div>
  );
}
