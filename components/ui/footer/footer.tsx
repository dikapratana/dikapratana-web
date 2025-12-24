import {
  Box,
  Code2Icon,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      <div id="contact" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-linear-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-8 md:p-16 text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
            <Box
              className="absolute top-10 left-10 w-16 h-16 text-white/20 animate-spin hidden md:block"
              style={{ animationDuration: "10s" }}
            />
            <Layers className="absolute bottom-10 right-10 w-20 h-20 text-white/20 animate-pulse hidden md:block" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
                Let&apos;s collaborate and turn your vision into reality
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:dikapratana11@gmail.com" className="bg-white/20 backdrop-blur text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold hover:bg-white/30 transition-all flex items-center justify-center gap-3 border-2 border-white/30 max-w-full w-87.5">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                  Start Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="bg-linear-to-br from-gray-50 to-purple-50 border-t border-orange-200 pb-8 pt-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Code2Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  MDPP
                </span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Building modern web and mobile applications with high
                performance, clean architecture, and scalable code. Focused on
                delivering polished user interfaces and real-world products that
                are efficient, maintainable, and user-friendly.
              </p>
            </div>

            <div>
              <h4 className="text-gray-800 font-bold text-lg mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3 text-gray-600">
                <a href="mailto:dikapratana11@gmail.com" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-sm">dikapratana11@gmail.com</span>
                </a>
                <a className="flex items-center gap-2"  href="https://wa.me/6281456188966" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-sm">+62 814 5618 8966</span>
                </a>
                <a href="#" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-sm">Bojonegoro, Indonesia</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gray-800 font-bold text-lg mb-4">
                Follow Me
              </h4>
               <div className="flex gap-4">
                <a
                  href="github.com/dikapratana"
                  target="_blank"
                  className="w-12 h-12 bg-linear-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="linkedin.com/in/dika-pratana-456730172"
                  target="_blank"
                  className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 DikaPratana. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-600 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
