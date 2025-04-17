"use client";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <title>LCN | Homepage</title>
      <link rel="icon" href="/favicon.ico" />

      <main className="min-w-[750px]">
        <NavBar className="flex justify-between items-center p-4 bg-[var(--secondary)]"></NavBar>
        <div className="flex flex-col items-center justify-center min-h-[92vh]">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to LostCauseNetwork
          </h1>
          <p className="text-lg text-center max-w-xl">
            LostCauseNetwork is a community-driven platform for sharing and
            discovering content related to Dungeons & Dragons, gaming, and
            creative projects. Join me in my journey to build a vibrant online
            community!
          </p>
        </div>
      </main>
      <footer>
        @2025 LostCauseNetwork | All rights reserved | made by xmaniaxz
      </footer>
    </>
  );
}
