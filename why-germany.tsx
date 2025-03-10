import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

export default function WhyGermany() {
  const universities = [
    {
      name: "Technical University of Munich (TUM)",
      description: "Leading technical university, ranked among top 50 worldwide. Excellent programs in engineering and computer science.",
      ranking: "Top 50 worldwide",
      location: "Munich",
      fees: "No tuition fees",
      programs: "Engineering, Computer Science, Natural Sciences"
    },
    {
      name: "Heidelberg University",
      description: "Germany's oldest university, founded in 1386. Known for excellence in medicine and sciences.",
      ranking: "Top 60 worldwide",
      location: "Heidelberg",
      fees: "No tuition fees",
      programs: "Medicine, Sciences, Humanities"
    },
    {
      name: "Technical University Berlin",
      description: "Renowned for engineering and technology programs.",
      ranking: "Top 100 worldwide",
      location: "Berlin",
      fees: "No tuition fees",
      programs: "Engineering, Technology, Architecture"
    },
    {
      name: "Freie Universität Berlin",
      description: "Excellence in humanities and social sciences.",
      ranking: "Top 120 worldwide",
      location: "Berlin",
      fees: "No tuition fees",
      programs: "Social Sciences, Humanities"
    },
    {
      name: "University of Cologne",
      description: "One of the oldest and largest universities in Germany.",
      ranking: "Top 150 worldwide",
      location: "Cologne",
      fees: "No tuition fees",
      programs: "Business, Law, Medicine"
    },
    {
      name: "Frankfurt University",
      description: "Strong focus on business and economics.",
      ranking: "Top 200 worldwide",
      location: "Frankfurt",
      fees: "No tuition fees",
      programs: "Economics, Business, Social Sciences"
    },
    {
      name: "Leuphana University Lüneburg",
      description: "Known for sustainability and innovative teaching methods.",
      ranking: "Top Regional",
      location: "Lüneburg",
      fees: "No tuition fees",
      programs: "Sustainability, Business, Cultural Studies"
    },
    {
      name: "OTH Amberg-Weiden",
      description: "Technical university of applied sciences.",
      ranking: "Top Regional",
      location: "Amberg/Weiden",
      fees: "No tuition fees",
      programs: "Engineering, Business Engineering"
    },
    {
      name: "University of Hamburg",
      description: "Major public research university in northern Germany.",
      ranking: "Top 150 worldwide",
      location: "Hamburg",
      fees: "No tuition fees",
      programs: "Economics, Law, Medicine"
    },
    {
      name: "Technical University Nuremberg",
      description: "Excellence in engineering and technology.",
      ranking: "Top Regional",
      location: "Nuremberg",
      fees: "No tuition fees",
      programs: "Engineering, IT, Business"
    },
    {
      name: "RWTH Aachen",
      description: "Germany's largest technical university.",
      ranking: "Top 100 worldwide",
      location: "Aachen",
      fees: "No tuition fees",
      programs: "Engineering, Technology, Natural Sciences"
    },
    {
      name: "University of Stuttgart",
      description: "Known for engineering excellence.",
      ranking: "Top 150 worldwide",
      location: "Stuttgart",
      fees: "No tuition fees",
      programs: "Engineering, Architecture"
    },
    {
      name: "University of Mannheim",
      description: "Renowned for business education.",
      ranking: "Top 200 worldwide",
      location: "Mannheim",
      fees: "No tuition fees",
      programs: "Business, Economics, Social Sciences"
    },
    {
      name: "University of Bremen",
      description: "Strong in marine sciences and space technology.",
      ranking: "Top Regional",
      location: "Bremen",
      fees: "No tuition fees",
      programs: "Marine Sciences, Space Technology"
    },
    {
      name: "TU Dresden",
      description: "Excellence in microelectronics and engineering.",
      ranking: "Top 200 worldwide",
      location: "Dresden",
      fees: "No tuition fees",
      programs: "Engineering, Computer Science"
    },
    {
      name: "University of Bonn",
      description: "One of Germany's leading research universities.",
      ranking: "Top 150 worldwide",
      location: "Bonn",
      fees: "No tuition fees",
      programs: "Mathematics, Physics, Medicine"
    },
    {
      name: "Ludwig Maximilian University",
      description: "Second-largest university by enrollment in Germany.",
      ranking: "Top 50 worldwide",
      location: "Munich",
      fees: "No tuition fees",
      programs: "Medicine, Law, Business"
    },
    {
      name: "University of Göttingen",
      description: "Known for research excellence in natural sciences.",
      ranking: "Top 150 worldwide",
      location: "Göttingen",
      fees: "No tuition fees",
      programs: "Natural Sciences, Humanities"
    },
    {
      name: "University of Freiburg",
      description: "One of the oldest and most prestigious universities.",
      ranking: "Top 150 worldwide",
      location: "Freiburg",
      fees: "No tuition fees",
      programs: "Medicine, Law, Engineering"
    },
    {
      name: "University of Münster",
      description: "Large public university with comprehensive programs.",
      ranking: "Top 200 worldwide",
      location: "Münster",
      fees: "No tuition fees",
      programs: "Business, Law, Medicine"
    },
    {
      name: "University of Kiel",
      description: "Specializes in marine sciences and medicine.",
      ranking: "Top Regional",
      location: "Kiel",
      fees: "No tuition fees",
      programs: "Marine Sciences, Medicine"
    },
    {
      name: "University of Jena",
      description: "Historic university with strong research focus.",
      ranking: "Top Regional",
      location: "Jena",
      fees: "No tuition fees",
      programs: "Physics, Chemistry, Biology"
    },
    {
      name: "University of Würzburg",
      description: "Known for excellence in science and medicine.",
      ranking: "Top 200 worldwide",
      location: "Würzburg",
      fees: "No tuition fees",
      programs: "Medicine, Science, Engineering"
    }
  ];

  const workInfo = [
    {
      title: "Job Market Overview",
      description: "Germany has Europe's largest economy with numerous opportunities in engineering, IT, healthcare, and research sectors.",
      icon: <Building2 className="w-8 h-8 text-primary" />
    },
    {
      title: "Work Permit Benefits",
      description: "International students can work 20 hours/week during studies and get 18-month job-seeker visa after graduation.",
      icon: <Briefcase className="w-8 h-8 text-primary" />
    },
    {
      title: "Career Prospects",
      description: "High demand for skilled workers with competitive salaries and excellent work-life balance.",
      icon: <GraduationCap className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Study in Germany</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Germany offers world-class education with no tuition fees at public universities, combined with excellent career opportunities and high quality of life.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Work Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {workInfo.map((info) => (
              <Card key={info.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Top German Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <Card key={uni.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                  <p className="text-gray-600 mb-4">{uni.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-primary font-semibold">{uni.ranking}</span>
                      <span className="text-gray-500">{uni.location}</span>
                    </div>
                    <div className="text-gray-600">
                      <span className="font-semibold">Key Programs: </span>
                      {uni.programs}
                    </div>
                    <div className="text-green-600 font-semibold">{uni.fees}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}