
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SuccessStories() {
  const stories = [
    {
      name: "Ali Hassan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      story: "Successfully enrolled in TU Berlin for Computer Science",
      level: "Completed B2 in 8 months"
    },
    {
      name: "Sara Ahmad",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      story: "Got scholarship at University of Munich",
      level: "Achieved C1 certification"
    },
    {
      name: "Muhammad Usman",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      story: "Working as Software Engineer in Frankfurt",
      level: "Started from A1, now at B2"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students are achieving their dreams in Germany
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.name} className="overflow-hidden">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{story.name}</h3>
                <p className="text-gray-600 mb-2">{story.story}</p>
                <p className="text-sm text-primary">{story.level}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
