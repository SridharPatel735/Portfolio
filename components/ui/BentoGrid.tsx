import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  skills,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  skills?: { name: string; icon: string }[];
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const backgroundColors = [
    "bg-blue-900 bg-opacity-50",
    "bg-indigo-900 bg-opacity-50",
    "bg-purple-900 bg-opacity-50",
    "bg-blue-800 bg-opacity-20",
    "bg-indigo-800 bg-opacity-50",
    "bg-purple-800 bg-opacity-50",
  ];

  return (
    <div
      className={cn(
        `relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 ${backgroundColors[id % backgroundColors.length]}`,
        className
      )}
      style={{ minHeight: "200px" }} // Ensure a minimum height
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center rounded-t-3xl"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full rounded-b-3xl"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-300 relative flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {description && (
            <div className="font-sans font-light md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
          )}
          {title && (
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white ${id === 6 ? "whitespace-nowrap" : ""}`}
            >
              {title}
            </div>
          )}

          {skills && skills.length > 0 && (
            <div className="skills-grid mt-4 flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item flex items-center space-x-2 p-2 bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
                >
                  {/* Circular Icon Container */}
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className={`text-white text-sm ${id === 6 ? "whitespace-nowrap" : ""}`}>{skill.name}</span>
                </div>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
