import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "Alyan Haider",
    role: "Head of the Institute",
    bio: "Experienced German language instructor and educational leader",
    germanFlag: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_960_720.png",
    pakistanFlag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
  },
  {
    name: "Abdul Waasy Bhatti",
    role: "German Language Teacher",
    bio: "Certified German language instructor with B2 proficiency",
    germanFlag: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_960_720.png",
    pakistanFlag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
  },
  {
    name: "Urwa Malik",
    role: "German Language Teacher",
    bio: "Certified German language instructor with A level proficiency",
    germanFlag: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_960_720.png",
    pakistanFlag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
  }
];

export default function Faculty() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" 
            alt="Pakistan Flag" 
            className="w-16 h-10 object-cover border border-gray-600"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Faculty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center gap-4 mb-4">
                    <img
                      src={member.germanFlag}
                      alt="German Flag"
                      className="w-8 h-5 object-cover rounded-sm"
                    />
                    <img
                      src={member.pakistanFlag}
                      alt="Pakistan Flag"
                      className="w-8 h-5 object-cover rounded-sm"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-center mb-2">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}