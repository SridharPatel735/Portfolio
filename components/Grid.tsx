import React from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="skills" className="py-20" onClick={(e) => handleClick(e, "#skills")}>
      <BentoGrid className="w-full py-20 px-4 md:px-8 lg:px-16">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            skills={item.skills}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;