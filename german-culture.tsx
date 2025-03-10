import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const culturalInfo = [
  {
    title: "Rich History & Heritage",
    description: "Germany's history spans over two millennia, from Roman times through the Holy Roman Empire to modern day, leaving behind remarkable architectural and cultural treasures."
  },
  {
    title: "Academic Excellence",
    description: "Home to some of the world's oldest universities and research institutions, Germany continues to be a global leader in education and innovation."
  },
  {
    title: "Virtual Library & Learning Resources",
    description: `Our comprehensive digital library provides access to:
• German literature classics and modern works
• Audio books and language learning podcasts
• Practice materials for all CEFR levels (A1-C2)
• German news resources and magazines
• Interactive grammar exercises and vocabulary builders
• Mock Goethe-Institut exam papers
• Cultural and historical documentaries
• Virtual tours of German museums and landmarks`
  },
  {
    title: "Goethe-Institut Certification",
    description: `The Goethe-Zertifikat is your passport to German opportunities:
• Required for university admission in Germany
• Essential for work permits and visa applications
• Recognized globally by employers and institutions
• Shows your proficiency in reading, writing, speaking, and listening
• Valid indefinitely once obtained
• Accredited by the Association of Language Testers in Europe (ALTE)`
  },
  {
    title: "Cultural Integration Program",
    description: `Beyond language acquisition, our curriculum emphasizes cultural immersion and understanding of German society, traditions, and contemporary life, preparing you for seamless integration and meaningful opportunities with German natives`
  }
];

export default function GermanCulture() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience German Culture
        </h2>

        <div className="space-y-6">
          {culturalInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}