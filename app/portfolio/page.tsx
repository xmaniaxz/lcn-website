"use client";
import NavBar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ToolTip from "@/components/tooltip_wrapper";
const PortfolioPage = () => {
  const [showVZ, setShowVZ] = useState(false);
  const [canLoadOnPC, setCanLoadOnPC] = useState(true);

  useEffect(() => {
    // Simple check for mobile/tablet devices
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setCanLoadOnPC(!isMobile);
  }, []);

  const techIcons = {
    Blender: { title: "Blender", icon: "/icons/Blender.svg" },
    "C#": { title: "C#", icon: "/icons/C-sharp.svg" },
    CSS3: { title: "CSS3", icon: "/icons/Css3.svg" },
    Github: { title: "GitHub", icon: "/icons/Github.svg" },
    HTML: { title: "HTML5", icon: "/icons/Html5.svg" },
    JavaScript: { title: "JavaScript", icon: "/icons/Javascript.svg" },
    NextJs: { title: "Next.js", icon: "/icons/NextJS.svg" },
    OOP: { title: "OOP", icon: "/icons/ObjectOrientedProgramming.svg" },
    PHP: { title: "PHP", icon: "/icons/Php.svg" },
    Python: { title: "Python", icon: "/icons/Python.svg" },
    React: { title: "React", icon: "/icons/React.svg" },
    Unity: { title: "Unity", icon: "/icons/Unity.svg" },
    Tailwind: { title: "Tailwind CSS", icon: "/icons/Tailwind.svg" },
    TypeScript: { title: "TypeScript", icon: "/icons/Typescript.svg" },
  };

  return (
    <div className="min-w-full lg:min-w-[750px] h-screen flex flex-col sm:px-6">
      <title>LCN | Portfolio</title>
      <NavBar className="flex justify-between items-center p-2 lg:p-4 bg-[var(--secondary)]" />
      <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
        {/* First snap section */}
        <section className="flex flex-col lg:flex-row lg:items-center items-stretch justify-center min-h-screen lg:h-[92vh] snap-start px-4 lg:px-16 lg:px-32 xl:px-96 py-8 lg:py-0 gap-6">
          <Card className="w-full aspect-square px-4 lg:px-6 flex items-center justify-center mb-0 mx-auto">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                src="./Foto.jpg"
                alt="Image of Wesley"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover rounded-lg noselect"
              />
            </div>
          </Card>
          <Card className="w-full lg:w-auto h-auto lg:h-[66vh] max-h-[92vh] p-4 lg:p-6">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl font-bold mb-4">
                About me
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-scroll">
              <p>
                Wesley (23) is a dedicated individual with a passion for
                problem-solving and technology. He enjoys music, speaks both
                Dutch and English fluently, and has hobbies such as bowling,
                coding, and gaming.
              </p>
              <br />
              <p>
                Wesley has experience in game development, software development,
                and back-office & customer service. For instance, he contributed
                to creating a virtual museum for VodafoneZiggo, where colleagues
                could access information or listen to radio and podcasts.
              </p>
              <br />
              <p>
                Currently, Wesley is seeking new opportunities in the IT field,
                particularly in front-end, back-end, or full-stack development,
                but he is also open to exploring other roles. He is eager to
                learn and grow in his next challenge.
              </p>
              <br />
              <p>Interested? Feel free to reach out!</p>
              <p>
                <a
                  href="mailto:info@LostCauseNetwork.com"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  info@LostCauseNetwork.com
                </a>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Second snap section */}
        <section className="flex flex-col lg:flex-row lg:items-center items-stretch justify-start lg:justify-center min-h-screen lg:h-[92vh] snap-start px-4 lg:px-16 lg:px-32 xl:px-96 py-8 lg:py-0 gap-6">
          {/* Project 404 Card */}
          <Card className="w-full lg:w-full flex flex-col min-h-[40vh] lg:min-h-[66vh] max-h-[92vh] mb-6 lg:mb-0">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl font-bold mb-4">
                Project 404
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-scroll">
              <p>
                I created a virtual museum for VodafoneZiggo, internally, where
                colleagues could retrieve information or listen to radio or
                podcasts. This project primarily utilized Unity's WebGL pipeline
                and C# scripts, along with Unity's version control system and a
                backend system built with PHP.
              </p>
              <br />
              <p>
                My main responsibilities included making the museum interactive
                and user-friendly while ensuring seamless connectivity with the
                backend. The project leveraged JSON for data exchange between
                the frontend and backend.
              </p>
              <br />
              <p>
                This was my first experience where I had to create both the 3D
                assets and the underlying logic, which provided me with
                invaluable insights. Over the course of 8 months, I learned a
                great deal, such as the importance of dynamically loading audio
                files after initializing the scene and understanding the
                limitations of WebGL.
              </p>
              <br />
              <p>
                This project not only honed my technical skills but also
                deepened my appreciation for the intricacies of interactive
                development and cross-functional collaboration.
              </p>
            </CardContent>
          </Card>

          {/* Iframe + Used Card Column */}
          <div className="flex flex-col aspect-video lg:aspect-4/3 h-auto lg:h-[66vh] max-h-[92vh] gap-4">
            <Card className="aspect-video lg:aspect-4/3 overflow-hidden flex-1 flex flex-col">
              <CardContent className="w-full h-full flex items-center justify-center overflow-hidden">
                {!canLoadOnPC ? (
                  <div className="flex justify-center items-center text-lg font-semibold text-red-500 h-full w-full">
                    Sneakpeak can only be viewed on Desktop
                  </div>
                ) : !showVZ ? (
                  <button
                    className="w-full h-full flex items-center justify-center text-lg font-semibold cursor-pointer"
                    onClick={() => setShowVZ(true)}
                  >
                    Click to load Unity WebGL Project
                  </button>
                ) : (
                  <iframe
                    id="VZ-iframe"
                    src="https://lostcausenetwork.com/portfolio/vodafoneziggo/"
                    title="Unity WebGL Project"
                    className="w-full h-full overflow-hidden"
                    loading="lazy"
                    onLoad={() => console.log("Unity WebGL project loaded")}
                  />
                )}
              </CardContent>
              <CardFooter className="gap-4">
                <ToolTip
                  onClick={() => {
                    const iframe = document.getElementById(
                      "VZ-iframe"
                    ) as HTMLIFrameElement | null;
                    if (iframe?.requestFullscreen) {
                      iframe.requestFullscreen();
                    } else if ((iframe as any)?.webkitRequestFullscreen) {
                      (iframe as any).webkitRequestFullscreen();
                    } else if ((iframe as any)?.msRequestFullscreen) {
                      (iframe as any).msRequestFullscreen();
                    }
                  }}
                  className="w-8 h-8 flex items-center justify-center btn hover:scale-[1.4] anim cursor-pointer"
                  Display={<i className="Icon text-[24px]">expand_content</i>}
                  children={<p>Fullscreen</p>}
                ></ToolTip>
                <ToolTip
                  onClick={() => {
                    window.open(
                      "https://lostcausenetwork.com/portfolio/vodafoneziggo/"
                    );
                  }}
                  Display={<i className="Icon text-[24px]">globe</i>}
                  className="w-8 h-8 flex items-center justify-center btn hover:scale-[1.4] anim cursor-pointer"
                  children={<p>Go to website</p>}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="flex flex-row gap-2 lg:gap-4 dark:invert">
                {[techIcons.Unity, techIcons.Blender, techIcons["C#"]].map(
                  (tech) => (
                    <ToolTip
                      key={tech.title}
                      Display={
                        <img
                          src={tech.icon}
                          alt={tech.title}
                          className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                        />
                      }
                      children={<p>{tech.title}</p>}
                    />
                  )
                )}
                <div className="flex-1" />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Github.icon}
                      alt="Github"
                      className="w-8 h-8 lg:w-12 lg:h-12 object-contain btn flex-end"
                      onClick={() => {
                        window.open(
                          "https://github.com/xmaniaxz/Project404",
                          "_blank"
                        );
                      }}
                    />
                  }
                  children={<p>{techIcons.Github.title}</p>}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* third snap section */}
        <section className="flex flex-col lg:flex-row lg:items-center items-stretch justify-start lg:justify-center min-h-screen lg:h-[92vh] snap-start px-4 lg:px-16 lg:px-32 xl:px-96 py-8 lg:py-0 gap-6">
          {/* VoyagersGuild Card */}
          {/* Iframe + Used Card Column */}
          <div className="flex flex-col w-full lg:w-full h-auto lg:h-[66vh] max-h-[92vh] gap-6 mb-6 lg:mb-0">
            <Card className="w-full aspect-[3/4] overflow-hidden flex-1 flex flex-col">
              <CardContent className="w-full full flex items-center justify-center overflow-hidden">
                <iframe
                  id="voyagersguild-iframe"
                  src="https://voyagersguild.net"
                  title="VoyagersGuild Website"
                  className="aspect-[3/4] w-full overflow-hidden"
                  loading="lazy"
                  onLoad={() => console.log("Website loaded")}
                />
              </CardContent>
              <CardFooter className="gap-4">
                <ToolTip
                  onClick={() => {
                    const iframe = document.getElementById(
                      "voyagersguild-iframe"
                    ) as HTMLIFrameElement | null;
                    if (iframe?.requestFullscreen) {
                      iframe.requestFullscreen();
                    } else if ((iframe as any)?.webkitRequestFullscreen) {
                      (iframe as any).webkitRequestFullscreen();
                    } else if ((iframe as any)?.msRequestFullscreen) {
                      (iframe as any).msRequestFullscreen();
                    }
                  }}
                  Display={<i className="Icon text-[24px]">expand_content</i>}
                  className="w-8 h-8 flex items-center justify-center btn hover:scale-[1.4] anim cursor-pointer"
                  children={<p>Expand iframe</p>}
                />
                <ToolTip
                  onClick={() => {
                    window.open("https://voyagersguild.net");
                  }}
                  Display={<i className="Icon text-[24px]">globe</i>}
                  className="w-8 h-8 flex items-center justify-center btn hover:scale-[1.4] anim cursor-pointer"
                  children={<p>Go to website</p>}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="flex flex-row gap-2 lg:gap-4 dark:invert">
                {[
                  techIcons.HTML,
                  techIcons.React,
                  techIcons.NextJs,
                  techIcons.CSS3,
                  techIcons.Tailwind,
                  techIcons.TypeScript,
                  techIcons.JavaScript,
                ].map((tech) => (
                  <ToolTip
                    key={tech.title}
                    Display={
                      <img
                        src={tech.icon}
                        alt={tech.title}
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      />
                    }
                    children={<p>{tech.title}</p>}
                  />
                ))}
                <div className="flex-1" />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Github.icon}
                      alt="Github"
                      className="w-8 h-8 lg:w-12 lg:h-12 object-contain btn flex-end"
                      onClick={() => {
                        window.open(
                          "https://github.com/xmaniaxz/voyagers-guild",
                          "_blank"
                        );
                      }}
                    />
                  }
                  children={<p>{techIcons.Github.title}</p>}
                />
              </CardContent>
            </Card>
          </div>
          <Card className="w-full lg:w-1/2 flex flex-col min-h-[40vh] lg:min-h-[66vh] max-h-[92vh]">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl font-bold mb-4">
                VoyagersGuild
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The VoyagersGuild is a modded Minecraft community that is
                expanding to become a general gaming community. They host
                multiple servers, providing a welcoming environment for players
                with diverse interests.
              </p>
              <br />
              <p>
                The website was created to serve as a centralized file system
                for the community. Members can easily download specific server
                files, such as world saves or additional mods, streamlining the
                process of joining and enjoying the servers.
              </p>
              <br />
              <p>
                By offering a user-friendly platform for file distribution and
                community updates, the VoyagersGuild website helps foster
                collaboration and engagement among its members as the community
                continues to grow.
              </p>
              <br />
              <br />
              <br />
              This project also made me learn Java and making Discord bots. All
              of which are different projects here.
            </CardContent>
          </Card>
        </section>

        {/* last snap section */}
        <section className="flex flex-col items-center justify-center min-h-screen lg:h-screen snap-start px-4 lg:px-16 lg:px-32 xl:px-96 py-8 lg:py-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            More Coming Soon
          </h2>
          <br />
          <p className="text-base lg:text-lg text-center max-w-xl">
            Stay tuned for more updates and projects!
          </p>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
