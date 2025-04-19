"use client";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <title>LCN | Homepage</title>
      <link rel="icon" href="/favicon.ico" />

      <div className="min-h-screen flex flex-col">
        <NavBar className="flex justify-between items-center p-4 bg-[var(--secondary)]" />
        <main className="flex-1 flex items-center justify-center px-2">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center">
              Welcome to LostCauseNetwork
            </h1>
            <p className="text-sm md:text-lg text-center max-w-xl">
              LostCauseNetwork is a community-driven platform for sharing and
              discovering content related to Dungeons & Dragons, gaming, and
              creative projects. Join me in my journey to build a vibrant online
              community!
            </p>
          </div>
        </main>
        <footer className="text-center py-4 text-xs md:text-base">
          @2025 LostCauseNetwork | All rights reserved | made by xmaniaxz
        </footer>
      </div>
    </>
  );
}