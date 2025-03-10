
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface CourseCardProps {
  level: string;
  title: string;
  duration: string;
  description: string;
}

export function CourseCard({ level, title, duration, description }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="perspective-1000"
    >
      <Card className="p-6 h-full border-2 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="text-3xl font-bold text-primary">{level}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{duration}</p>
          <p className="text-gray-700">{description}</p>
          <button
            onClick={() => window.open(`https://wa.me/923498660326?text=Hi! I'm interested in the ${level} German Course. Please share details!`, "_blank")}
            className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Enroll via WhatsApp
          </button>
        </div>
      </Card>
    </motion.div>
  );
}
