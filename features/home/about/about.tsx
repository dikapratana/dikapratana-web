import { Code2, Gauge, Puzzle, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <div id="about" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">
              👤 ABOUT ME
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Who Am I?
          </h2>
        </div>

        <div className="gap-8 md:gap-12 items-center">
          <div className="bg-linear-to-br from-orange-400 via-pink-400 to-purple-500 rounded-3xl p-1.5">
            <div className="bg-white rounded-[22px] p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Hi, I&apos;m Dika Pratana 👋
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Frontend Developer with over 5 years of experience in building
                web applications using React.js and Next.js, and more than 1
                year of experience developing mobile applications with Flutter
                and React Native. Experienced in delivering projects across the
                education, public services, and small-to-medium business
                sectors, working both independently and within Agile teams.
                Focused on building scalable and maintainable frontend solutions
                through effective UI implementation, REST API integration, and
                performance optimization to deliver high-quality digital
                products.
              </p>
              <div className="space-y-4 grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Fast Learner */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Fast Learner</p>
                    <p className="text-sm text-gray-600">
                      Quickly adapt to new technologies and tools
                    </p>
                  </div>
                </div>

                {/* Clean Code */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Clean & Maintainable Code</p>
                    <p className="text-sm text-gray-600">
                      Scalable, readable, and well-structured code
                    </p>
                  </div>
                </div>

                {/* Team Collaboration */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Team Collaboration</p>
                    <p className="text-sm text-gray-600">
                      Experienced working in Agile & cross-functional teams
                    </p>
                  </div>
                </div>

                {/* Performance */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Performance-Oriented</p>
                    <p className="text-sm text-gray-600">
                      Optimized for speed, efficiency, and user experience
                    </p>
                  </div>
                </div>

                {/* Problem Solving */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-red-400 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Puzzle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Problem Solving</p>
                    <p className="text-sm text-gray-600">
                      Analytical thinking and effective solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
