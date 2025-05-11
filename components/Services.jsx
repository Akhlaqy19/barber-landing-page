"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import SourceLink from "./SourceLink";

const Services = () => {
  const [selectedBtn, setSelectedBtn] = useState({
    id: 1,
    srcImg: "barber1.jpg",
    title: "BREAD AND MUSTACHE TRIM",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text. Duis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  });
  const [servicesInfo, setServicesInfo] = useState([
    {
      id: 1,
      srcImg: "barber1.jpg",
      title: "BREAD AND MUSTACHE TRIM",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text. Duis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      id: 2,
      srcImg: "barber2.jpg",
      title: "ROYAL SHAVE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed.",
    },
    {
      id: 3,
      srcImg: "barber3.jpg",
      title: "HAIR COLORING",
      text: "Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.",
    },
    {
      id: 4,
      srcImg: "barber4.jpg",
      title: "CUTS AND FADES",
      text: "Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim.",
    },
  ]);

  return (
    <>
      <section
        id="services"
        className="main-container py-12 bg-stone-900 space-y-4"
      >
        <div className="space-y-12 text-center">
          <SectionTitle customWidth={"max-w-4xl"}>
            We provide premium class services
          </SectionTitle>

          <div
            className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-4
      lg:grid-cols-4 gap-3 max-w-7xl mx-auto"
          >
            {servicesInfo.map((service) => (
              <React.Fragment key={service.id}>
                <button
                  onClick={() => setSelectedBtn({ ...service })}
                  className={`py-4 px-5 text-lg text-center font-medium uppercase rounded-sm transition-colors border-none outline-none ${
                    selectedBtn.id === service.id
                      ? "bg-primary text-black"
                      : "bg-gray-primary text-white"
                  }
                   
                  `}
                >
                  {service.title}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* service info */}
        <div className="flex flex-col items-center gap-y-4 py-10 px-10 md:px-30 text-center bg-white">
          <div className="mid:w-50 mid:h-50 md:w-64 md:h-64 w-76 h-76">
            <Image
              src={`/images/barbers-img/${selectedBtn.srcImg}`}
              alt="Service Image"
              width={200}
              height={200}
              onMouseDown={(e) => e.preventDefault()}
              className="w-full h-full object-cover bg-no-repeat rounded-full"
            />
          </div>

          <div className="text-xl md:text-lg space-y-4">
            <p className="font-bold">{selectedBtn.text}</p>
            <p>{selectedBtn.text}</p>
          </div>
        </div>

        <SourceLink />
      </section>
    </>
  );
};

export default Services;
