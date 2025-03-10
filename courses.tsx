import { motion } from "framer-motion";
import VirtualRoom from "@/components/courses/virtual-room";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export default function Courses() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our German Courses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our virtual classrooms and discover the perfect German language course for your needs.
            Click on any course to learn more about the curriculum and requirements.
          </p>
        </div>

        <VirtualRoom />
      </div>
    </motion.div>
  );
}
