import { useState } from "react";
import { logo } from "../constants/logo";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md max-w-[1440px] mx-auto flex items-center justify-between gap-x-6 py-3 lg:py-5 md:px-16 px-5">
      <div className="flex items-center">
        <figure>
          <img
            src={logo.Logo}
            alt="Logo Duxies"
            className="w-[70px] h-[60px] md:w-[93] md:h-[70px]"
          />
        </figure>
        <nav
          className={`lg:flex gap-x-10 ml-14 text-base font-bold  ${
            isOpen
              ? "absolute top-full right-0 flex flex-col gap-10 p-4 w-full text-center backdrop-blur-md bg-primary"
              : "hidden"
          }`}
        >
          <HashLink smooth to={"#home"}>
            Home
          </HashLink>
          <HashLink smooth to={"#about"}>
            About
          </HashLink>
          <HashLink smooth to={"#experience"}>
            Experiences
          </HashLink>
          <HashLink smooth to={"#project"}>
            Projects
          </HashLink>
        </nav>
      </div>

      <HashLink
        smooth
        to={"#contact"}
        className="border-black border-2 py-2 px-6 hidden lg:inline-block rounded-md font-bold text-sm uppercase"
      >
        Contact
      </HashLink>

      <button
        id="hamburger"
        className={`cursor-pointer lg:hidden ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <svg
          width={31}
          height={20}
          viewBox="0 0 31 20"
          fill="none"
          color="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L29 2"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M2 10L29 10"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M2 18L29 18"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        id="cross"
        className={`cursor-pointer lg:hidden transition-all duration-300 ease-linear ${
          isOpen ? "" : "hidden"
        }`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 23.1422L23 2.14215"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M23.1421 23L2.14209 2"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
