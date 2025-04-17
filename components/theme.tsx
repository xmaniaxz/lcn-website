"use client";
import { Switch } from "@/components/ui/switch";
import { JSX, useEffect, useState } from "react";

const ThemeSwitch = (): JSX.Element => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setMode("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setMode("light");
      }
    }
  }, []);

  const handleThemeSwitch = () => {
    if (localStorage != undefined) {
      if (mode === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setMode("light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setMode("dark");
      }
    }
  };

  return (
    <Switch
      className="border-[var(--foreground)]"
      checked={mode === "light"}
      onCheckedChange={handleThemeSwitch}
    />
  );
};

export default ThemeSwitch;
