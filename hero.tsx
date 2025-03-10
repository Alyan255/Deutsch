import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Globe, GraduationCap, Users } from "lucide-react";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#DD0000]/20 to-[#FFCE00]/10">
      {/* Semi-transparent animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DD0000]/40 via-[#FFCE00]/30 to-black/20 animate-gradient-xy" />

      {/* Semi-transparent animated circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#DD0000]/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FFCE00]/30 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-40 right-40 w-72 h-72 bg-black/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Master German Language & Culture
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join Pakistan's premier German language institute for an immersive learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Expert Learning",
                description: "Certified instructors & proven methodology",
                link: "/courses",
                cta: "View Courses"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Cultural Immersion",
                description: "Experience German culture firsthand",
                link: "/culture",
                cta: "Explore Culture"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Join Community",
                description: "Connect with fellow German learners",
                link: "https://wa.me/923498660326",
                cta: "Contact Us"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-black/5 via-[#DD0000]/5 to-[#FFCE00]/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative">
                    <div className="mb-4 text-[#DD0000] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-[#DD0000] group-hover:text-white border-[#DD0000] transition-colors duration-300"
                      onClick={() =>
                        item.link.startsWith("http")
                          ? window.open(item.link, "_blank")
                          : setLocation(item.link)
                      }
                    >
                      {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics section with German flag colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-gradient-to-r from-[#000000] via-[#DD0000] to-[#FFCE00] p-[3px] rounded-xl shadow-lg"
          >
            <div className="col-span-3 bg-white/95 backdrop-blur-sm rounded-[9px] p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Students Enrolled", value: "150+" },
                { label: "Success Rate", value: "95%" },
                { label: "Years Experience", value: "1+" }
              ].map((stat) => (
                <div key={stat.label} className="p-4">
                  <div className="text-3xl font-bold text-[#DD0000] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}