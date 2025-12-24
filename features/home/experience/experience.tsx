/* eslint-disable @typescript-eslint/no-explicit-any */
import { DATA_HOME } from "@/data/home";
import { Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-linear-to-br from-white/50 to-blue-50/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-600 font-semibold text-sm">
              💼 EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {DATA_HOME.experiences.map((exp: any, index: number) => (
            <div
              key={index}
              className="relative flex gap-3 sm:gap-6"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center absolute w-full h-full sm:h-auto sm:relative sm:w-20 md:w-8  shrink-0">
                <div className="h-full w-0.5 bg-linear-to-b from-orange-300 via-pink-300 to-purple-300" />

                {/* Dot (desktop only) */}
                <div
                  className={`hidden sm:block w-5 h-5 md:w-6 md:h-6 bg-linear-to-br ${exp.color} rounded-full border-4 border-white shadow-lg z-10 my-2`}
                />

                <div className="h-full w-0.5 bg-linear-to-b from-purple-300 via-pink-300 to-orange-300" />
              </div>

              {/* Card */}
              <div
                className={`
                 bg-white sm:bg-white/90 rounded-2xl md:rounded-3xl relative z-5
                  p-5 sm:p-6 md:p-8
                  border-2 border-orange-100
                  hover:border-orange-300 hover:shadow-2xl/30 hover:shadow-orange-200
                  transition-all w-full
                  ${index === 0 ? "mt-0" : "mt-6 sm:mt-8"}
                  ${index + 1 === DATA_HOME.experiences.length ? "mb-0" : "mb-6 sm:mb-8"}
                `}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-orange-600 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {exp.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-orange-50 px-3 sm:px-4 py-2 rounded-full self-start shrink-0">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-xs sm:text-sm font-medium text-orange-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map(
                    (achievement: string, i: number) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm sm:text-base text-gray-600"
                      >
                        <span className="text-orange-500 mt-1 shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
