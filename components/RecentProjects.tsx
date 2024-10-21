import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleClickLink = (link: string) => {
    const fullLink = link.startsWith('http') ? link : `https://${link}`;
    window.open(fullLink, '_blank');
  };

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20" onClick={(e) => handleClick(e, "#projects")}>
      <div className="py-20">
        <h1 className="heading" style={{ marginBottom: "10rem"}}>
          My <span className="text-purple">Projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-10">
          {projects.map((item) => {
            const isExpanded = expandedCard === item.id;

            return (
              <div
                className={`relative transition-all duration-500 ${isExpanded ? "row-span-2" : "min-h-[25rem]"}`}
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                style={{
                  cursor: "pointer",
                  height: isExpanded ? "25rem" : "25rem",
                  width: "100%",
                  marginBottom: "auto",
                  marginTop: "6rem",
                }}
              >
                <PinContainer>
                  <div
                    className={`relative flex items-center justify-center w-full overflow-hidden ${isExpanded ? "h-[50vh]" : "h-[30vh]"} mb-10`}
                  >
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img
                        src="/bg.png"
                        alt="bgimg"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 object-contain w-full h-full"
                    />
                  </div>
                  <h1
                    className={`font-bold transition-all duration-500 ${isExpanded ? "lg:text-4xl md:text-3xl text-xl" : "lg:text-2xl md:text-xl text-base"} ${isExpanded ? "whitespace-normal" : "line-clamp-1"}`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`lg:text-xl lg:font-normal font-light text-sm ${isExpanded ? "line-clamp-none" : "line-clamp-2"}`}
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div
                    className="flex justify-center items-center mt-4"
                    onClick={() => handleClickLink(item.link)}
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      View Code
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </PinContainer>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
