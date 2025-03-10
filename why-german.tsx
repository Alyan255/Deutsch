
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Briefcase, Globe, Building2, HeartHandshake } from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    icon: <BookOpen className="w-8 h-8 mb-4 text-primary" />,
    title: "Why German Language?",
    summary: "German is the most widely spoken native language in the EU, opening doors to global opportunities.",
    fullDescription: "German is the most widely spoken native language in the European Union and one of the world's major languages. As a key language in science, literature, philosophy, and international business, German opens doors to a world of opportunities. German companies like BMW, Siemens, and Volkswagen are global leaders, making German language skills highly valuable in the business world."
  },
  {
    icon: <GraduationCap className="w-8 h-8 mb-4 text-primary" />,
    title: "Study in Germany",
    summary: "World-class education with minimal tuition fees at public universities.",
    fullDescription: "Germany offers world-class education with many programs taught in English and German. With minimal or no tuition fees at public universities, excellent research facilities, and internationally recognized degrees, Germany is an ideal destination for international students. The country's rich academic heritage, combined with its innovative research environment, makes it a top choice for higher education."
  },
  {
    icon: <Building2 className="w-8 h-8 mb-4 text-primary" />,
    title: "Living in Germany",
    summary: "High quality of life with excellent public services and rich cultural scene.",
    fullDescription: "Germany offers an exceptional quality of life with its efficient public transportation, excellent healthcare system, and rich cultural scene. Cities like Berlin, Munich, and Hamburg blend historical charm with modern amenities. The country's central location in Europe makes it perfect for exploring other European destinations. Germans value work-life balance, offering generous vacation time and social benefits."
  },
  {
    icon: <Briefcase className="w-8 h-8 mb-4 text-primary" />,
    title: "Work in Germany",
    summary: "Excellent career opportunities in engineering, IT, healthcare, and more.",
    fullDescription: "Germany's robust economy and shortage of skilled workers create excellent career opportunities. With knowledge of German, you can access jobs in engineering, IT, healthcare, and many other sectors. German companies are known for good working conditions, competitive salaries, and excellent benefits. The country's strong economy and low unemployment rate make it an attractive destination for international professionals."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 mb-4 text-primary" />,
    title: "Integration Support",
    summary: "Comprehensive integration programs and support for newcomers.",
    fullDescription: "Germany welcomes international talent with various integration programs and support services. The country offers integration courses, cultural orientation programs, and language support for newcomers. Many cities have international communities and support networks to help you settle in. German society values diversity and offers equal opportunities regardless of background."
  },
  {
    icon: <Globe className="w-8 h-8 mb-4 text-primary" />,
    title: "Why Choose Us?",
    summary: "Expert native speakers, small classes, and comprehensive exam preparation.",
    fullDescription: "Our experienced native speakers use modern teaching methods and authentic materials. Small class sizes ensure personalized attention, while our cultural integration programs help you understand German society and customs. We provide comprehensive exam preparation for Goethe-Zertifikat, helping you achieve your language goals efficiently. Join us for a comprehensive learning experience that prepares you for success in Germany."
  }
];

export default function WhyGerman() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Germany?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {reason.icon}
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-600">
                    {expandedCard === index ? reason.fullDescription : reason.summary}
                  </p>
                  <button
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="mt-4 text-primary hover:underline"
                  >
                    {expandedCard === index ? "Show Less" : "Read More"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
