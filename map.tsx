
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const vocabularyWords = [
  { german: "Hallo", english: "Hello" },
  { german: "Auf Wiedersehen", english: "Goodbye" },
  { german: "Danke", english: "Thank you" },
  { german: "Bitte", english: "Please/You're welcome" },
  { german: "Ja", english: "Yes" },
  { german: "Nein", english: "No" },
  { german: "Entschuldigung", english: "Excuse me/Sorry" },
  { german: "Guten Morgen", english: "Good morning" },
  { german: "Guten Tag", english: "Good day" },
  { german: "Guten Abend", english: "Good evening" }
];

export default function VocabularySection() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const quizQuestions = [
    {
      question: "What does 'Hallo' mean?",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
      answer: "Hello"
    },
    {
      question: "What does 'Danke' mean?",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
      answer: "Thank you"
    },
    {
      question: "What does 'Auf Wiedersehen' mean?",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
      answer: "Goodbye"
    },
    {
      question: "What does 'Guten Morgen' mean?",
      options: ["Good morning", "Good day", "Good evening", "Good night"],
      answer: "Good morning"
    },
    {
      question: "What does 'Entschuldigung' mean?",
      options: ["Excuse me/Sorry", "Thank you", "Please", "Yes"],
      answer: "Excuse me/Sorry"
    }
  ];
  
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };
  
  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Essential German Vocabulary</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Learn these common German words and phrases to get started on your language journey
          </p>
          
          {!showQuiz ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {vocabularyWords.map((word, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="font-bold text-xl mb-1">{word.german}</div>
                      <div className="text-gray-600">{word.english}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={() => setShowQuiz(true)}
                className="mt-4"
              >
                Test Your Knowledge
              </Button>
            </>
          ) : (
            <Card className="max-w-2xl mx-auto p-6">
              {!quizCompleted ? (
                <>
                  <h3 className="text-xl font-bold mb-4">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </h3>
                  <p className="text-lg mb-6">{quizQuestions[currentQuestion].question}</p>
                  
                  <div className="space-y-3 mb-6">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === option ? "default" : "outline"}
                        className="w-full justify-start text-left p-4"
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                    className="w-full mt-4"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
                  </Button>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                  <p className="text-xl mb-6">Your score: {score} out of {quizQuestions.length}</p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={restartQuiz}>Try Again</Button>
                    <Button variant="outline" onClick={() => {
                      setShowQuiz(false);
                      restartQuiz();
                    }}>
                      Back to Vocabulary
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}
