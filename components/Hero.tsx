import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundLines } from "./ui/background-lines";
import { ColorHighlight } from "./ui/colorHighlight";

const Hero = () => {
  const openResume = () => {
    window.open("/Sridhar'sResume.pdf", "_blank");
  };

  return (
    <div>
      <div className="pb-20 pt-40" id="hero">
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
           absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
             bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <BackgroundLines className="flex items-center justify-center w-full flex-col px-2 pt-20">
          <div className="flex justify-center relative my-20 z-30">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
              <div className="w-full md:w-4/12 flex justify-center">
                <img src="/mainImg.png" alt="Description of image" className="max-w-full h-auto" />
              </div>
              <div className="w-full md:w-8/12 flex flex-col items-start justify-center md:pl-4"> {/* Added padding here */}
                <p className="uppercase tracking-widest text-[30px] md:text-2xl lg:text-2xl whitespace-nowrap text-left text-blue-100 max-w-80 mb-4">
                  Welcome to my portfolio
                </p>
                <ColorHighlight
                  words="Hello, I am Sridhar Patel"
                  className="text-left text-[30px] md:text-4xl lg:text-5xl mb-4"
                />
                <div className="flex items-center justify-start mb-4" style={{ height: '1.2em', whiteSpace: 'nowrap' }}>
                  <p className="text-left text-[30px] md:text-4xl lg:text-5xl mb-4">
                    I am a&nbsp;
                  </p>
                  <div className="text-left text-[30px] md:text-4xl lg:text-5xl whitespace-nowrap overflow-hidden mb-4">
                    <TextGenerateEffect
                      words="Full Stack Developer. Software Developer. Backend Developer. ML/AI Developer. "
                    />
                  </div>
                </div>

                <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                  I am a highly motivated and versatile software engineering student with a strong passion for learning and growth. My commitment to delivering exceptional results drives me to tackle new challenges head-on. I have honed my skills in developing impactful digital solutions and analyzing complex data from my experiences. Armed with a positive attitude and a relentless drive for excellence, I am prepared to make significant contributions and achieve outstanding success in every project I undertake.
                </p>

                <MagicButton
                  title="My Resume"
                  icon={<FaLocationArrow />}
                  position="right"
                  handleClick={openResume}
                />
              </div>
            </div>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default Hero;