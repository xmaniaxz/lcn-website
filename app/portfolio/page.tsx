"use client";
import NavBar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ToolTip from "@/components/tooltip_wrapper";
import { Type } from "lucide-react";
const PortfolioPage = () => {
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
    <div className="min-w-[750px] h-screen flex flex-col">
      <title>LCN | Portfolio</title>
      <NavBar className="flex justify-between items-center p-4 bg-[var(--secondary)]" />
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        {/* First snap section */}
        <section className="flex items-center justify-between h-screen gap-96 snap-start px-96">
          <Card className="h-[66vh] max-h-[92vh] p-6 flex items-center aspect-square justify-center">
            <div className="aspect-square overflow-hidden">
              <img
                src="./Foto.jpg"
                alt="Image of Wesley"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                className="object-cover w-full h-full rounded-lg noselect"
              />
            </div>
          </Card>
          <Card className="h-[66vh] max-h-[92vh] p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4">
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
        <section className="flex items-center justify-center h-[94vh] snap-start px-96 gap-8">
          {/* Project 404 Card */}
          <Card className="w-1/2 flex flex-col min-h-[66vh] max-h-[92vh]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4">
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
          <div className="flex flex-col w-1/3 h-[66vh] max-h-[92vh] gap-4">
            <Card className="aspect-4/3 overflow-hidden flex-1 flex flex-col">
              <CardContent className="w-full h-full flex items-center justify-center overflow-hidden">
                <iframe
                  id="VZ-iframe"
                  src="https://lostcausenetwork.com/portfolio/vodafoneziggo/"
                  title="Unity WebGL Project"
                  className="w-full h-full overflow-hidden"
                  loading="lazy"
                  onLoad={() => console.log("Unity WebGL project loaded")}
                />
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
              <CardContent className="flex flex-row gap-4 dark:invert">
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Unity.icon}
                      alt="Unity"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.Unity.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Blender.icon}
                      alt="Blender"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.Blender.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons["C#"].icon}
                      alt="Blender"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons["C#"].title}</p>}
                />
                <div className="flex-1" />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Github.icon}
                      alt="Github"
                      className="w-12 h-12 object-contain btn flex-end"
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
        <section className="flex items-center justify-center h-[94vh] snap-start px-96 gap-8">
          {/* VoyagersGuild Card */}
          {/* Iframe + Used Card Column */}
          <div className="flex flex-col w-1/3 h-[66vh] max-h-[92vh] gap-4">
            <Card className="aspect-4/3 overflow-hidden flex-1 flex flex-col">
              <CardContent className="w-full h-full flex items-center justify-center overflow-hidden">
                <iframe
                  id="voyagersguild-iframe"
                  src="https://voyagersguild.net"
                  title="VoyagersGuild Website"
                  className="w-full h-full overflow-hidden"
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
              <CardContent className="flex flex-row gap-4 dark:invert">
                <ToolTip
                  Display={
                    <img
                      src={techIcons.HTML.icon}
                      alt="HTML5"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.HTML.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.React.icon}
                      alt="React"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.React.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.NextJs.icon}
                      alt="NextJs"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.NextJs.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.CSS3.icon}
                      alt="CSS3"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.CSS3.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Tailwind.icon}
                      alt="Tailwind"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.Tailwind.title}</p>}
                />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.TypeScript.icon}
                      alt="TypeScript"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.TypeScript.title}</p>}
                />
                 <ToolTip
                  Display={
                    <img
                      src={techIcons.JavaScript.icon}
                      alt="JavaScript"
                      className="w-12 h-12 object-contain"
                    />
                  }
                  children={<p>{techIcons.JavaScript.title}</p>}
                />
                <div className="flex-1" />
                <ToolTip
                  Display={
                    <img
                      src={techIcons.Github.icon}
                      alt="Github"
                      className="w-12 h-12 object-contain btn flex-end"
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
          <Card className="w-1/2 flex flex-col min-h-[66vh] max-h-[92vh]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4">
                VoyagersGuild
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              The VoyagersGuild is a modded Minecraft community that is expanding to become a general gaming community. They host multiple servers, providing a welcoming environment for players with diverse interests.
              </p>
              <br />
              <p>
              The website was created to serve as a centralized file system for the community. Members can easily download specific server files, such as world saves or additional mods, streamlining the process of joining and enjoying the servers.
              </p>
              <br />
              <p>
              By offering a user-friendly platform for file distribution and community updates, the VoyagersGuild website helps foster collaboration and engagement among its members as the community continues to grow.
              </p>
              <br />
              <br />
              <br />
              This project also made me learn Java and making Discord bots. All of which are different projects here.
            </CardContent>
          </Card>
        </section>

        {/* last snap section */}
        <section className="flex flex-col items-center justify-center h-[94vh] snap-start">
          <h2 className="text-3xl font-bold mb-4">More Coming Soon</h2>
          <p className="text-lg text-center max-w-xl">
            Stay tuned for more updates and projects!
          </p>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
