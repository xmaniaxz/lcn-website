"use client";

import { JSX } from "react";
import ThemeSwitch from "@/components/theme";

interface NavBarProps {
  children?: React.ReactNode;
  className?: string;
}

const NavBar = ({ children, className }: NavBarProps): JSX.Element => {
  return (
    <div className={className}>
      <a className="flex items-center noselect"
        href="/"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
          }
        }}>
        <img src="/favicon.ico" alt="Logo" className="h-12 w-12 mr-2" />
        <div
          className="text-3xl font-bold btn"
        
        >
          LostCauseNetwork
        </div>
      </a>
      <div className="flex space-x-4 items-center flex-wrap md:flex-nowrap noselect">
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
        {/* <a
          href="/communities"
          onClick={(e) => {
            if (window.location.pathname === "/communities") {
              e.preventDefault();
            }
          }}
        >
          Communities
        </a> */}
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
        <ThemeSwitch />
      </div>
      {children}
    </div>
  );
};

export default NavBar;
