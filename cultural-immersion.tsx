import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const philosophersData = [
  {
    name: "Johann Wolfgang von Goethe",
    years: "1749-1832",
    description: "One of Germany's greatest literary figures, Goethe was a poet, novelist, playwright, and natural philosopher. His works include 'Faust', 'The Sorrows of Young Werther', and numerous poems that shaped German literature."
  },
  {
    name: "Franz Kafka",
    years: "1883-1924",
    description: "Though born in Prague (then part of Austria-Hungary), Kafka wrote in German and is considered one of the most influential writers of the 20th century. His works like 'The Metamorphosis' and 'The Trial' explore themes of alienation and existential anxiety."
  },
  {
    name: "Immanuel Kant",
    years: "1724-1804",
    description: "A central figure in modern philosophy, Kant's 'Critique of Pure Reason' revolutionized epistemology and metaphysics. His work on ethics, aesthetics, and political theory continues to influence thought today."
  },
  {
    name: "Friedrich Nietzsche",
    years: "1844-1900",
    description: "A philosopher who challenged traditional values and Christian morality. His concepts of the 'Übermensch', 'will to power', and 'eternal recurrence' have had a profound impact on Western philosophy and culture."
  }
];

const historyTimelineData = [
  {
    period: "Medieval Germany (800-1500)",
    events: [
      "Establishment of the Holy Roman Empire under Charlemagne",
      "Rise of powerful principalities and free imperial cities",
      "Development of Gothic architecture and universities"
    ]
  },
  {
    period: "Reformation Era (1517-1648)",
    events: [
      "Martin Luther's 95 Theses and Protestant Reformation",
      "Translation of the Bible into German, standardizing the language",
      "Thirty Years' War devastates German territories"
    ]
  },
  {
    period: "Rise of Prussia (1701-1871)",
    events: [
      "Frederick the Great expands Prussian influence",
      "Age of Enlightenment and cultural flourishing",
      "Wars of German Unification under Otto von Bismarck"
    ]
  },
  {
    period: "German Empire to Weimar Republic (1871-1933)",
    events: [
      "Rapid industrialization and scientific advancement",
      "World War I and the Treaty of Versailles",
      "Establishment of the democratic Weimar Republic"
    ]
  },
  {
    period: "Third Reich and World War II (1933-1945)",
    events: [
      "Rise of National Socialism under Adolf Hitler",
      "Persecution of minorities and the Holocaust",
      "Germany's defeat and occupation by Allied powers"
    ]
  },
  {
    period: "Divided Germany (1945-1990)",
    events: [
      "Division into West Germany (FRG) and East Germany (GDR)",
      "Economic miracle (Wirtschaftswunder) in West Germany",
      "Berlin Wall symbolizes Cold War division"
    ]
  },
  {
    period: "Reunified Germany (1990-Present)",
    events: [
      "Fall of the Berlin Wall and German Reunification",
      "Integration into the European Union",
      "Germany emerges as Europe's economic powerhouse"
    ]
  }
];

export default function CulturalImmersion() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          German Philosophers & Literary Giants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {philosophersData.map((philosopher) => (
            <motion.div
              key={philosopher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <CardContent>
                    <h3 className="text-xl font-bold mb-1">{philosopher.name}</h3>
                    <p className="text-primary text-sm mb-3">{philosopher.years}</p>
                    <p className="text-gray-600">{philosopher.description}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">
          German History Timeline
        </h2>

        <div className="space-y-6 mb-16">
          {historyTimelineData.map((timelineItem) => (
            <motion.div
              key={timelineItem.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{timelineItem.period}</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {timelineItem.events.map((event, index) => (
                      <li key={index} className="text-gray-600">{event}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cultural Activities</h3>
                <ul className="list-disc pl-4 space-y-2 text-gray-600">
                  <li>Virtual tours of German museums and landmarks</li>
                  <li>German film screenings and discussions</li>
                  <li>Traditional festival celebrations</li>
                  <li>Language exchange meetups</li>
                  <li>German cuisine workshops</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}