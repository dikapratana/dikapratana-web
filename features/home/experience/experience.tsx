/* eslint-disable @typescript-eslint/no-explicit-any */
import { DATA_HOME } from "@/data/home";
import { Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="py-16 md:py-24 px-4 md:px-6 bg-linear-to-br from-white/50 to-blue-50/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-600 font-semibold text-sm">
              💼 EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-300 via-pink-300 to-purple-300 hidden sm:block" /> */}

          <div>
            {DATA_HOME.experiences.map((exp: any, index: number) => (
              <div key={index} className="relative flex">
                <div className="flex flex-col items-center justify-center w-20 shrink-0">
                  <div className="h-full w-0.5 bg-linear-to-b from-orange-300 via-pink-300 to-purple-300" />
                  <div
                    className={`left-2.75 md:left-5.75 top-8 w-5 h-5 md:w-6 md:h-6 bg-linear-to-br ${exp.color} rounded-full border-4 border-white shadow-lg hidden sm:block z-10 shrink-0`}
                  />

                  <div className="h-full w-0.5 bg-linear-to-b from-purple-300 via-pink-300 to-orange-300" />
                </div>

                <div className={`bg-white/90 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl/30 hover:shadow-orange-200 transition-all w-full ${index === 0 ? 'mt-0' : index + 1 === DATA_HOME.experiences.length  ? 'mb-0' : ' mt-8 mb-8'}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {exp.position}
                      </h3>
                      <p className="text-base md:text-lg text-orange-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50 px-3 md:px-4 py-2 rounded-full self-start shrink-0">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium whitespace-nowrapv text-orange-500">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-gray-600"
                      >
                        <span className="text-orange-500 mt-1 shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
