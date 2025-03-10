
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LanguageTest() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Test Your German Level</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our free placement test to determine your current German language proficiency level
          </p>
        </motion.div>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Online Placement Test</h3>
              <p className="text-gray-600 mb-6">
                This 30-minute test will help you find the right course level for your German language journey
              </p>
              <Button 
                size="lg"
                onClick={() => window.location.href = '/quiz'}
              >
                Start Test Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
