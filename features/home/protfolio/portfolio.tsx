"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { DATA_HOME } from "@/data/home";
import clsx from "clsx";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold mb-4">
            📁 PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Worked on {DATA_HOME.portfolios.length}+ Projects
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 12%, rgba(0,0,0,0.7) 22%, black 35%, black 65%, rgba(0,0,0,0.8) 78%, rgba(0,0,0,0.7) 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 12%, rgba(0,0,0,0.7) 22%, black 35%, black 65%, rgba(0,0,0,0.8) 78%, rgba(0,0,0,0.7) 88%, transparent 100%)",
          }}
        >
          <div className="flex gap-6 px-6 py-4">
            {DATA_HOME.portfolios.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_calc(100%/1)] min-w-full sm:flex-[0_0_calc(100%/2)] sm:min-w-[calc(100%/2)] lg:flex-[0_0_calc(100%/3)] lg:min-w-[calc(100%/3)]"
              >
                <div
                  className={clsx(
                    "relative h-full rounded-3xl bg-white shadow-md shadow-neutral-300  transition-shadow duration-300 overflow-hidden"
                  )}
                >
                  {/* Gradient or background placeholder */}
                  <div className="relative h-40 md:h-48 w-full bg-linear-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center overflow-hidden">
                    { project.image ? ( <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      priority
                    /> ) : <ImageIcon className="h-20 w-20 text-neutral-300" /> }
  
                  </div>

                  <div className="relative z-10 flex flex-col gap-3 p-4">
                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <p
                      className="text-gray-600 text-sm md:text-base line-clamp-2"
                      title={project.description}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-3 py-1 rounded-full text-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
