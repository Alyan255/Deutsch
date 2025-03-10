import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide high-quality German language education that empowers learners to achieve their personal and professional goals. We are committed to creating a supportive and inclusive environment where every student can thrive.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading German language institute that sets the standard for excellence in language education, recognized globally for our innovative teaching methods and outstanding student success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
