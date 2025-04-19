"use client";

import { JSX } from "react";
import ThemeSwitch from "@/components/theme";

interface NavBarProps {
  children?: React.ReactNode;
  className?: string;
}

const NavBar = ({ children, className }: NavBarProps): JSX.Element => {
  return (
    <div className={`${className} flex flex-row flex-wrap items-center`}>
      <a
        className="flex items-center noselect"
        href="/"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
          }
        }}
      >
        <img src="/favicon.ico" alt="Logo" className="h-12 w-12 mr-2" />
        <div className="text-3xl font-bold btn">LostCauseNetwork</div>
      </a>
      <div className="flex flex-row flex-wrap items-center noselect gap-2 md:gap-4 w-full md:w-auto md:ml-auto">
        <a
          href="/dnd"
          onClick={(e) => {
        if (window.location.pathname === "/dnd") {
          e.preventDefault();
        }
          }}
        >
          D&D Tool
        </a>
        <a
          href="https://pelican.lostcausenetwork.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Panel
        </a>
        <a
          href="/portfolio"
          onClick={(e) => {
        if (window.location.pathname === "/portfolio") {
          e.preventDefault();
        }
          }}
        >
          Portfolio
        </a>
        <div className="flex-1" />
        <ThemeSwitch />
      </div>
      {children}
    </div>
  );
};

export default NavBar;
