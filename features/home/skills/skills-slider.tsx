/* eslint-disable @typescript-eslint/no-require-imports */
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
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4">
            💻 TECH STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
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
          <div className="flex gap-6 px-4">
            {DATA_HOME.skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[55%] sm:min-w-[38%] md:min-w-[26%] lg:min-w-[22%]"
              >
                <div
                  className={clsx(
                    "relative h-full rounded-2xl p-6 md:p-8",
                    "bg-white/30 backdrop-blur-xl",
                    "border border-white/30",
                    "transition-all duration-300",
                    "hover:bg-white/50 hover:shadow-xl"
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

                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                      <Image
                        src={skill.icon}
                        alt="skill-logo"
                        width={50}
                        height={50}
                        className="h-10 w-10"
                      />
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">
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
