import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const courses = [
  {
    id: "a1",
    name: "A1 Course",
    level: "Beginner",
    duration: "7 weeks",
    image: "https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c",
    description: "Our A1 course is designed for complete beginners. In this course, you will:",
    syllabus: [
      "Learn basic German pronunciation and phonetics",
      "Master everyday greetings and introductions",
      "Understand basic grammar including present tense, articles, and simple sentence structure",
      "Build vocabulary for daily situations like shopping, ordering food, and asking directions",
      "Practice basic conversation skills through role-play exercises",
      "Learn numbers, days of the week, and basic time expressions",
      "Complete the course with A1 level proficiency according to CEFR standards"
    ]
  },
  {
    id: "a2",
    name: "A2 Course",
    level: "Elementary",
    duration: "7 weeks",
    image: "https://images.unsplash.com/photo-1502207252192-3e376a5b50bf",
    description: "Building on A1, our A2 course develops your language skills further:",
    syllabus: [
      "Expand vocabulary for work, leisure, and travel situations",
      "Learn past tense (Perfekt) and future tense",
      "Master modal verbs and more complex sentence structures",
      "Develop skills to describe experiences and events",
      "Practice writing emails and short texts",
      "Understand and participate in longer conversations",
      "Prepare for the A2 level certification exam"
    ]
  },
  {
    id: "b1",
    name: "B1 Course",
    level: "Intermediate",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1596496356933-9b6e0b186b88",
    description: "Our B1 course takes you to an intermediate level of German:",
    syllabus: [
      "Master complex grammar including passive voice and subjunctive",
      "Learn business German and professional communication",
      "Develop skills for academic writing and presentations",
      "Practice expressing opinions and participating in debates",
      "Study German culture and current affairs",
      "Prepare for university studies or professional work in Germany",
      "Get ready for the B1 certification exam required for many visas"
    ]
  }
];

export default function VirtualRoom() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-[600px]">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className="cursor-pointer h-full"
              onClick={() => setSelectedCourse(course.id)}
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-2">Level: {course.level}</p>
                <p className="text-gray-600">Duration: {course.duration}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <Card
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-6">
                {courses.map(
                  (course) =>
                    course.id === selectedCourse && (
                      <div key={course.id}>
                        <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="space-y-4">
                          <p>
                            <strong>Level:</strong> {course.level}
                          </p>
                          <p>
                            <strong>Duration:</strong> {course.duration}
                          </p>
                          <p className="text-gray-600">{course.description}</p>
                          <ul className="list-disc pl-6 space-y-2">
                            {course.syllabus.map((item, index) => (
                              <li key={index} className="text-gray-600">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6 flex gap-4">
                          <Button
                            onClick={() => window.open("https://wa.me/923498660326", "_blank")}
                            className="flex-1"
                          >
                            Contact via WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setSelectedCourse(null)}
                            className="flex-1"
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    )
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}