import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const levels = [
  {
    level: "A1 - Beginner",
    description: "Basic communication in everyday situations",
    details: [
      "Can understand and use familiar everyday expressions",
      "Can introduce themselves and others",
      "Can interact in a simple way if the other person talks slowly",
      "Vocabulary: ~500-1000 words",
      "Duration: Usually 7-8 weeks of intensive study",
      "Required for spouse visa applications"
    ]
  },
  {
    level: "A2 - Elementary",
    description: "Enhanced basic communication and simple texts",
    details: [
      "Can understand sentences about familiar topics",
      "Can communicate in simple and routine tasks",
      "Can describe aspects of their background and environment",
      "Vocabulary: ~1000-2000 words",
      "Duration: 7-8 weeks after A1",
      "Helpful for basic job positions in Germany"
    ]
  },
  {
    level: "B1 - Intermediate",
    description: "Independent communication in most situations",
    details: [
      "Can deal with most situations while traveling",
      "Can produce simple connected text on familiar topics",
      "Can describe experiences, events, dreams, and ambitions",
      "Required for student visa and many jobs",
      "Vocabulary: ~2000-3500 words",
      "Duration: 8-10 weeks after A2",
      "Mandatory for German citizenship"
    ]
  },
  {
    level: "B2 - Upper Intermediate",
    description: "Fluent interaction with native speakers",
    details: [
      "Can understand complex texts on concrete and abstract topics",
      "Can interact with native speakers with fluency and spontaneity",
      "Can produce clear, detailed text on a wide range of subjects",
      "Required for university studies in Germany",
      "Vocabulary: ~3500-5000 words",
      "Duration: 10-12 weeks after B1",
      "Preferred for professional positions"
    ]
  },
  {
    level: "C1 - Advanced",
    description: "Professional language mastery",
    details: [
      "Can understand demanding, longer texts",
      "Can express ideas fluently and spontaneously",
      "Can use language flexibly for social, academic and professional purposes",
      "Required for academic staff and many professional positions",
      "Vocabulary: ~5000-10000 words",
      "Duration: 12-16 weeks after B2",
      "Ideal for academic careers"
    ]
  },
  {
    level: "C2 - Mastery",
    description: "Complete mastery of the German language",
    details: [
      "Can understand virtually everything heard or read",
      "Can summarize information from different spoken and written sources",
      "Can express themselves spontaneously, very fluently and precisely",
      "Can render subtle shades of meaning even in complex situations",
      "Vocabulary: >10000 words",
      "Duration: 16-20 weeks after C1",
      "Equal to native speaker proficiency",
      "Required for high-level academic positions and specialized professions"
    ]
  }
];

export default function LanguageLevels() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          German Language Proficiency Levels
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {levels.map((level, index) => (
                  <AccordionItem key={level.level} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {level.level}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4 text-primary font-medium">
                        {level.description}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        {level.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}