"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { DATA_HOME } from "@/data/home";
import clsx from "clsx";
import Image from "next/image";

export const Skills = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [
      AutoScroll({
        speed: 1.1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-100 text-purple-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            💻 TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Skills & Technologies
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 12%, rgba(0,0,0,0.7) 22%, black 35%, black 65%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.4) 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 12%, rgba(0,0,0,0.7) 22%, black 35%, black 65%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.4) 88%, transparent 100%)",
          }}
        >
          <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 py-4">
            {DATA_HOME.skills.map((skill, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_33.333%] 
                  min-w-[33.333%]
                  sm:flex-[0_0_25%] 
                  sm:min-w-[25%]
                  md:flex-[0_0_calc(100%/8)]
                  md:min-w-[calc(100%/8)]
                "
              >
                <div
                  className={clsx(
                    "relative h-full rounded-2xl p-3 sm:p-4",
                    "transition-all duration-300"
                  )}
                >
                  {/* Gradient accent */}
                  <div
                    className={clsx(
                      "absolute inset-0 rounded-2xl opacity-10",
                      "bg-linear-to-br",
                      skill.color
                    )}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                    <Image
                      src={skill.icon}
                      alt="skill-logo"
                      width={40}
                      height={40}
                      className="h-9 w-9 sm:h-10 sm:w-10"
                    />
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
