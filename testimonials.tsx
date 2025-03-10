import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Umer Hussain",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    course: "B1 Course Graduate",
    text: "The supportive environment and expert instructors helped me achieve my language goals faster than I expected."
  },
  {
    name: "Umair",
    image: "https://images.unsplash.com/photo-1542868796-20f2ddc9d41f",
    course: "A2 Course Graduate",
    text: "I'm now confident in speaking German thanks to the practical approach and immersive learning experience."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-gray-600 italic mb-4 text-center">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}