
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  type: 'listening' | 'speaking' | 'writing' | 'reading';
  question: string;
  options: string[];
  correctAnswer: string;
  level: 'basic' | 'intermediate' | 'proficient';
}

const sampleQuestions: Question[] = [
  // Basic Level Questions (1-50)
  {
    id: 1,
    type: 'reading',
    question: 'Was bedeutet "Guten Morgen"?',
    options: ['Good Morning', 'Good Night', 'Good Evening', 'Good Afternoon'],
    correctAnswer: 'Good Morning',
    level: 'basic'
  },
  {
    id: 2,
    type: 'writing',
    question: 'Complete the sentence: "Ich ___ Student."',
    options: ['bin', 'ist', 'sind', 'bist'],
    correctAnswer: 'bin',
    level: 'basic'
  },
  {
    id: 3,
    type: 'reading',
    question: 'Was bedeutet "Danke"?',
    options: ['Hello', 'Please', 'Thank you', 'Sorry'],
    correctAnswer: 'Thank you',
    level: 'basic'
  },
  {
    id: 4,
    type: 'writing',
    question: 'Complete: "Wie ___ du?"',
    options: ['heißt', 'heißen', 'heiße', 'heißest'],
    correctAnswer: 'heißt',
    level: 'basic'
  },
  {
    id: 5,
    type: 'reading',
    question: 'What does "Auf Wiedersehen" mean?',
    options: ['Good morning', 'Hello', 'Goodbye', 'Good night'],
    correctAnswer: 'Goodbye',
    level: 'basic'
  },
  {
    id: 6,
    type: 'writing',
    question: 'Fill in: "Er ___ aus Deutschland."',
    options: ['kommt', 'kommst', 'kommen', 'komme'],
    correctAnswer: 'kommt',
    level: 'basic'
  },
  {
    id: 7,
    type: 'reading',
    question: 'What is "Entschuldigung"?',
    options: ['Excuse me', 'Thank you', 'Please', 'You\'re welcome'],
    correctAnswer: 'Excuse me',
    level: 'basic'
  },
  {
    id: 8,
    type: 'writing',
    question: 'Complete: "Wir ___ Deutsch."',
    options: ['lernen', 'lernt', 'lerne', 'lernst'],
    correctAnswer: 'lernen',
    level: 'basic'
  },
  {
    id: 9,
    type: 'reading',
    question: 'Was bedeutet "Ja"?',
    options: ['No', 'Maybe', 'Yes', 'Sometimes'],
    correctAnswer: 'Yes',
    level: 'basic'
  },
  {
    id: 10,
    type: 'writing',
    question: 'Fill in: "Sie ___ eine Katze."',
    options: ['hat', 'hast', 'haben', 'habe'],
    correctAnswer: 'hat',
    level: 'basic'
  },
  {
    id: 11,
    type: 'reading',
    question: 'What does "Nein" mean?',
    options: ['Yes', 'No', 'Maybe', 'Please'],
    correctAnswer: 'No',
    level: 'basic'
  },
  {
    id: 12,
    type: 'writing',
    question: 'Fill in: "Du ___ ein Auto."',
    options: ['hast', 'hat', 'haben', 'habe'],
    correctAnswer: 'hast',
    level: 'basic'
  },
  {
    id: 13,
    type: 'reading',
    question: 'What does "Bitte" mean?',
    options: ['Please/You\'re welcome', 'Thank you', 'Sorry', 'Hello'],
    correctAnswer: 'Please/You\'re welcome',
    level: 'basic'
  },
  {
    id: 14,
    type: 'writing',
    question: 'Complete: "Ich ___ Kaffee."',
    options: ['trinke', 'trinkst', 'trinkt', 'trinken'],
    correctAnswer: 'trinke',
    level: 'basic'
  },
  {
    id: 15,
    type: 'reading',
    question: 'What does "Gute Nacht" mean?',
    options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    correctAnswer: 'Good night',
    level: 'basic'
  },
  {
    id: 16,
    type: 'writing',
    question: 'Fill in: "Wir ___ nach Berlin."',
    options: ['fahren', 'fährst', 'fahrt', 'fahre'],
    correctAnswer: 'fahren',
    level: 'basic'
  },
  {
    id: 17,
    type: 'reading',
    question: 'What does "Tschüss" mean?',
    options: ['Hello', 'Welcome', 'Bye', 'Thank you'],
    correctAnswer: 'Bye',
    level: 'basic'
  },
  {
    id: 18,
    type: 'writing',
    question: 'Complete: "Sie (plural) ___ aus Österreich."',
    options: ['kommen', 'kommt', 'kommst', 'komme'],
    correctAnswer: 'kommen',
    level: 'basic'
  },
  {
    id: 19,
    type: 'reading',
    question: 'What does "Willkommen" mean?',
    options: ['Goodbye', 'Welcome', 'Thank you', 'Please'],
    correctAnswer: 'Welcome',
    level: 'basic'
  },
  {
    id: 20,
    type: 'writing',
    question: 'Fill in: "Er ___ ein Buch."',
    options: ['liest', 'lesen', 'lest', 'lese'],
    correctAnswer: 'liest',
    level: 'basic'
  },
  {
    id: 21,
    type: 'reading',
    question: 'What does "Wie geht es dir?" mean?',
    options: ['What\'s your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
    correctAnswer: 'How are you?',
    level: 'basic'
  },
  {
    id: 22,
    type: 'writing',
    question: 'Complete: "Ich ___ 25 Jahre alt."',
    options: ['bin', 'ist', 'sind', 'bist'],
    correctAnswer: 'bin',
    level: 'basic'
  },
  {
    id: 23,
    type: 'reading',
    question: 'What does "Guten Tag" mean?',
    options: ['Good morning', 'Good day/Hello', 'Good evening', 'Good night'],
    correctAnswer: 'Good day/Hello',
    level: 'basic'
  },
  {
    id: 24,
    type: 'writing',
    question: 'Fill in: "Wir ___ im Restaurant."',
    options: ['essen', 'isst', 'esse', 'esst'],
    correctAnswer: 'essen',
    level: 'basic'
  },
  {
    id: 25,
    type: 'reading',
    question: 'What does "Wo" mean?',
    options: ['What', 'When', 'Where', 'Why'],
    correctAnswer: 'Where',
    level: 'basic'
  },
  {
    id: 26,
    type: 'writing',
    question: 'Complete: "Du ___ sehr nett."',
    options: ['bist', 'bin', 'ist', 'sind'],
    correctAnswer: 'bist',
    level: 'basic'
  },
  {
    id: 27,
    type: 'reading',
    question: 'What does "Wasser" mean?',
    options: ['Water', 'Wine', 'Bread', 'Coffee'],
    correctAnswer: 'Water',
    level: 'basic'
  },
  {
    id: 28,
    type: 'writing',
    question: 'Fill in: "Er ___ Fußball."',
    options: ['spielt', 'spielst', 'spiele', 'spielen'],
    correctAnswer: 'spielt',
    level: 'basic'
  },
  {
    id: 29,
    type: 'reading',
    question: 'What does "Wie heißt du?" mean?',
    options: ['How are you?', 'What\'s your name?', 'Where are you from?', 'How old are you?'],
    correctAnswer: 'What\'s your name?',
    level: 'basic'
  },
  {
    id: 30,
    type: 'writing',
    question: 'Complete: "Wir ___ eine Wohnung."',
    options: ['haben', 'hat', 'hast', 'habe'],
    correctAnswer: 'haben',
    level: 'basic'
  },
  {
    id: 31,
    type: 'reading',
    question: 'What does "Freund" mean?',
    options: ['Friend', 'Family', 'Father', 'Freedom'],
    correctAnswer: 'Friend',
    level: 'basic'
  },
  {
    id: 32,
    type: 'writing',
    question: 'Fill in: "Ich ___ gern Musik."',
    options: ['höre', 'hörst', 'hört', 'hören'],
    correctAnswer: 'höre',
    level: 'basic'
  },
  {
    id: 33,
    type: 'reading',
    question: 'What does "Frau" mean?',
    options: ['Friend', 'Man', 'Woman/Mrs', 'Family'],
    correctAnswer: 'Woman/Mrs',
    level: 'basic'
  },
  {
    id: 34,
    type: 'writing',
    question: 'Complete: "Er ___ in Berlin."',
    options: ['wohnt', 'wohnst', 'wohnen', 'wohne'],
    correctAnswer: 'wohnt',
    level: 'basic'
  },
  {
    id: 35,
    type: 'reading',
    question: 'What does "Herr" mean?',
    options: ['Here', 'Hear', 'Man/Mr', 'Hero'],
    correctAnswer: 'Man/Mr',
    level: 'basic'
  },
  {
    id: 36,
    type: 'writing',
    question: 'Fill in: "Sie ___ eine neue Arbeit."',
    options: ['sucht', 'suchst', 'suchen', 'suche'],
    correctAnswer: 'sucht',
    level: 'basic'
  },
  {
    id: 37,
    type: 'reading',
    question: 'What does "Apfel" mean?',
    options: ['Apple', 'Orange', 'Banana', 'Pear'],
    correctAnswer: 'Apple',
    level: 'basic'
  },
  {
    id: 38,
    type: 'writing',
    question: 'Complete: "Wir ___ nach Hause."',
    options: ['gehen', 'gehst', 'geht', 'gehe'],
    correctAnswer: 'gehen',
    level: 'basic'
  },
  {
    id: 39,
    type: 'reading',
    question: 'What does "Haus" mean?',
    options: ['Hand', 'Hat', 'House', 'Head'],
    correctAnswer: 'House',
    level: 'basic'
  },
  {
    id: 40,
    type: 'writing',
    question: 'Fill in: "Du ___ sehr gut Deutsch."',
    options: ['sprichst', 'spricht', 'spreche', 'sprechen'],
    correctAnswer: 'sprichst',
    level: 'basic'
  },
  {
    id: 41,
    type: 'reading',
    question: 'What does "Brot" mean?',
    options: ['Brother', 'Bread', 'Breakfast', 'Book'],
    correctAnswer: 'Bread',
    level: 'basic'
  },
  {
    id: 42,
    type: 'writing',
    question: 'Complete: "Ich ___ meine Hausaufgaben."',
    options: ['mache', 'machst', 'macht', 'machen'],
    correctAnswer: 'mache',
    level: 'basic'
  },
  {
    id: 43,
    type: 'reading',
    question: 'What does "Familie" mean?',
    options: ['Famous', 'Familiar', 'Family', 'Female'],
    correctAnswer: 'Family',
    level: 'basic'
  },
  {
    id: 44,
    type: 'writing',
    question: 'Fill in: "Er ___ gern Bücher."',
    options: ['liest', 'lest', 'lese', 'lesen'],
    correctAnswer: 'liest',
    level: 'basic'
  },
  {
    id: 45,
    type: 'reading',
    question: 'What does "Schule" mean?',
    options: ['Shoe', 'School', 'Shop', 'Ship'],
    correctAnswer: 'School',
    level: 'basic'
  },
  {
    id: 46,
    type: 'writing',
    question: 'Complete: "Wir ___ ins Kino."',
    options: ['gehen', 'gehst', 'geht', 'gehe'],
    correctAnswer: 'gehen',
    level: 'basic'
  },
  {
    id: 47,
    type: 'reading',
    question: 'What does "Buch" mean?',
    options: ['Book', 'Beach', 'Bench', 'Bush'],
    correctAnswer: 'Book',
    level: 'basic'
  },
  {
    id: 48,
    type: 'writing',
    question: 'Fill in: "Sie (plural) ___ Deutsch."',
    options: ['sprechen', 'spricht', 'sprichst', 'spreche'],
    correctAnswer: 'sprechen',
    level: 'basic'
  },
  {
    id: 49,
    type: 'reading',
    question: 'What does "Kaffee" mean?',
    options: ['Cake', 'Cafe', 'Coffee', 'Candy'],
    correctAnswer: 'Coffee',
    level: 'basic'
  },
  {
    id: 50,
    type: 'writing',
    question: 'Complete: "Ich ___ einen Brief."',
    options: ['schreibe', 'schreibst', 'schreibt', 'schreiben'],
    correctAnswer: 'schreibe',
    level: 'basic'
  },
  
  // Intermediate Level Questions (51-100)
  {
    id: 51,
    type: 'reading',
    question: 'What does "Entschuldigung für die Verspätung" mean?',
    options: ['Excuse me for being late', 'Thank you for waiting', 'Sorry for the inconvenience', 'Please be patient'],
    correctAnswer: 'Excuse me for being late',
    level: 'intermediate'
  },
  {
    id: 52,
    type: 'writing',
    question: 'Complete: "Wir ___ gestern ins Kino gegangen."',
    options: ['sind', 'haben', 'werden', 'würden'],
    correctAnswer: 'sind',
    level: 'intermediate'
  },
  {
    id: 53,
    type: 'reading',
    question: 'What does "Sehenswürdigkeiten" mean?',
    options: ['Sightseeing', 'Landmarks/Sights', 'Viewpoints', 'Tourism'],
    correctAnswer: 'Landmarks/Sights',
    level: 'intermediate'
  },
  {
    id: 54,
    type: 'writing',
    question: 'Fill in: "Ich ___ morgen nach Berlin fahren."',
    options: ['werde', 'werden', 'wird', 'wirst'],
    correctAnswer: 'werde',
    level: 'intermediate'
  },
  {
    id: 55,
    type: 'reading',
    question: 'What does "Lebenslauf" mean?',
    options: ['Lifestyle', 'Life path', 'Curriculum Vitae/Resume', 'Biography'],
    correctAnswer: 'Curriculum Vitae/Resume',
    level: 'intermediate'
  },
  {
    id: 56,
    type: 'writing',
    question: 'Complete: "Er ___ schon seit drei Jahren in Deutschland."',
    options: ['lebt', 'leben', 'lebst', 'lebet'],
    correctAnswer: 'lebt',
    level: 'intermediate'
  },
  {
    id: 57,
    type: 'reading',
    question: 'What does "Verabredung" mean?',
    options: ['Meeting', 'Appointment/Date', 'Arrangement', 'Schedule'],
    correctAnswer: 'Appointment/Date',
    level: 'intermediate'
  },
  {
    id: 58,
    type: 'writing',
    question: 'Fill in: "Wenn ich Zeit ___, würde ich dich besuchen."',
    options: ['hätte', 'habe', 'haben', 'hatte'],
    correctAnswer: 'hätte',
    level: 'intermediate'
  },
  {
    id: 59,
    type: 'reading',
    question: 'What does "Ausbildung" mean?',
    options: ['Output', 'Training/Education', 'Experience', 'Outlook'],
    correctAnswer: 'Training/Education',
    level: 'intermediate'
  },
  {
    id: 60,
    type: 'writing',
    question: 'Complete: "Das Buch ___ von meinem Freund geschrieben."',
    options: ['wurde', 'war', 'würde', 'wäre'],
    correctAnswer: 'wurde',
    level: 'intermediate'
  },
  {
    id: 61,
    type: 'reading',
    question: 'What does "Vorstellungsgespräch" mean?',
    options: ['Introduction', 'Presentation', 'Job interview', 'First impression'],
    correctAnswer: 'Job interview',
    level: 'intermediate'
  },
  {
    id: 62,
    type: 'writing',
    question: 'Fill in: "Ich ___ gerne mehr Zeit zum Lesen."',
    options: ['hätte', 'habe', 'hatte', 'haben'],
    correctAnswer: 'hätte',
    level: 'intermediate'
  },
  {
    id: 63,
    type: 'reading',
    question: 'What does "Führerschein" mean?',
    options: ['Leadership', 'Tour guide', 'Driver\'s license', 'Pilot license'],
    correctAnswer: 'Driver\'s license',
    level: 'intermediate'
  },
  {
    id: 64,
    type: 'writing',
    question: 'Complete: "Bevor ich zur Arbeit gehe, ___ ich Frühstück."',
    options: ['esse', 'essen', 'isst', 'aß'],
    correctAnswer: 'esse',
    level: 'intermediate'
  },
  {
    id: 65,
    type: 'reading',
    question: 'What does "Krankenversicherung" mean?',
    options: ['Hospital', 'Health insurance', 'Sick leave', 'Medical treatment'],
    correctAnswer: 'Health insurance',
    level: 'intermediate'
  },
  {
    id: 66,
    type: 'writing',
    question: 'Fill in: "Sie ___ sehr gut Klavier spielen."',
    options: ['kann', 'können', 'kannst', 'könnt'],
    correctAnswer: 'kann',
    level: 'intermediate'
  },
  {
    id: 67,
    type: 'reading',
    question: 'What does "Arbeitserlaubnis" mean?',
    options: ['Employment', 'Work experience', 'Work permit', 'Job application'],
    correctAnswer: 'Work permit',
    level: 'intermediate'
  },
  {
    id: 68,
    type: 'writing',
    question: 'Complete: "Nachdem er die Prüfung bestanden ___, feierte er mit Freunden."',
    options: ['hatte', 'hat', 'haben', 'hätte'],
    correctAnswer: 'hatte',
    level: 'intermediate'
  },
  {
    id: 69,
    type: 'reading',
    question: 'What does "Aufenthaltsgenehmigung" mean?',
    options: ['Tourist visa', 'Residence permit', 'Travel document', 'Passport'],
    correctAnswer: 'Residence permit',
    level: 'intermediate'
  },
  {
    id: 70,
    type: 'writing',
    question: 'Fill in: "Wir ___ uns seit Jahren nicht gesehen."',
    options: ['haben', 'hatten', 'hätten', 'habten'],
    correctAnswer: 'haben',
    level: 'intermediate'
  },
  {
    id: 71,
    type: 'reading',
    question: 'What does "Waschmaschine" mean?',
    options: ['Dishwasher', 'Washing machine', 'Dryer', 'Vacuum cleaner'],
    correctAnswer: 'Washing machine',
    level: 'intermediate'
  },
  {
    id: 72,
    type: 'writing',
    question: 'Complete: "Er fragte mich, ob ich Zeit ___."',
    options: ['hätte', 'habe', 'hatte', 'haben'],
    correctAnswer: 'hätte',
    level: 'intermediate'
  },
  {
    id: 73,
    type: 'reading',
    question: 'What does "Bewerbung" mean?',
    options: ['Evaluation', 'Rating', 'Application', 'Assessment'],
    correctAnswer: 'Application',
    level: 'intermediate'
  },
  {
    id: 74,
    type: 'writing',
    question: 'Fill in: "Wenn ich du ___, würde ich das nicht tun."',
    options: ['wäre', 'bin', 'war', 'sei'],
    correctAnswer: 'wäre',
    level: 'intermediate'
  },
  {
    id: 75,
    type: 'reading',
    question: 'What does "Versicherung" mean?',
    options: ['Assurance', 'Insurance', 'Security', 'Certainty'],
    correctAnswer: 'Insurance',
    level: 'intermediate'
  },
  {
    id: 76,
    type: 'writing',
    question: 'Complete: "Sie ___ mir versprochen, pünktlich zu sein."',
    options: ['hat', 'haben', 'hatte', 'hatten'],
    correctAnswer: 'hat',
    level: 'intermediate'
  },
  {
    id: 77,
    type: 'reading',
    question: 'What does "Termin" mean?',
    options: ['Terminal', 'Term', 'Appointment', 'Deadline'],
    correctAnswer: 'Appointment',
    level: 'intermediate'
  },
  {
    id: 78,
    type: 'writing',
    question: 'Fill in: "Es ___ besser, wenn du früher kommst."',
    options: ['wäre', 'ist', 'war', 'sein'],
    correctAnswer: 'wäre',
    level: 'intermediate'
  },
  {
    id: 79,
    type: 'reading',
    question: 'What does "Mietvertrag" mean?',
    options: ['Contract worker', 'Purchase agreement', 'Rental contract', 'Service agreement'],
    correctAnswer: 'Rental contract',
    level: 'intermediate'
  },
  {
    id: 80,
    type: 'writing',
    question: 'Complete: "Ich ___ dir bei den Hausaufgaben helfen."',
    options: ['kann', 'kannst', 'können', 'könnt'],
    correctAnswer: 'kann',
    level: 'intermediate'
  },
  {
    id: 81,
    type: 'reading',
    question: 'What does "Verkehrsmittel" mean?',
    options: ['Traffic rules', 'Transportation', 'Traffic jam', 'Roadmap'],
    correctAnswer: 'Transportation',
    level: 'intermediate'
  },
  {
    id: 82,
    type: 'writing',
    question: 'Fill in: "Sie ___ die Antwort nicht gewusst."',
    options: ['hat', 'hatten', 'hatte', 'hast'],
    correctAnswer: 'hat',
    level: 'intermediate'
  },
  {
    id: 83,
    type: 'reading',
    question: 'What does "Lebensmittel" mean?',
    options: ['Lifestyle', 'Means of living', 'Groceries/Food', 'Necessities'],
    correctAnswer: 'Groceries/Food',
    level: 'intermediate'
  },
  {
    id: 84,
    type: 'writing',
    question: 'Complete: "Wir ___ morgen ins Theater gehen."',
    options: ['werden', 'wird', 'werde', 'wirst'],
    correctAnswer: 'werden',
    level: 'intermediate'
  },
  {
    id: 85,
    type: 'reading',
    question: 'What does "Muttersprache" mean?',
    options: ['Mother language', 'Native language', 'Mother tongue', 'First language'],
    correctAnswer: 'Native language',
    level: 'intermediate'
  },
  {
    id: 86,
    type: 'writing',
    question: 'Fill in: "Ich ___ dich angerufen, aber du warst nicht da."',
    options: ['habe', 'hatte', 'hätte', 'bin'],
    correctAnswer: 'habe',
    level: 'intermediate'
  },
  {
    id: 87,
    type: 'reading',
    question: 'What does "Geburtstag" mean?',
    options: ['Birth certificate', 'Birthday', 'Birth city', 'Birth date'],
    correctAnswer: 'Birthday',
    level: 'intermediate'
  },
  {
    id: 88,
    type: 'writing',
    question: 'Complete: "Er ___ gerne mehr Zeit mit seiner Familie."',
    options: ['verbringt', 'verbringen', 'verbringst', 'verbringst'],
    correctAnswer: 'verbringt',
    level: 'intermediate'
  },
  {
    id: 89,
    type: 'reading',
    question: 'What does "Wohnsitz" mean?',
    options: ['Living room', 'House', 'Residence/Domicile', 'Apartment'],
    correctAnswer: 'Residence/Domicile',
    level: 'intermediate'
  },
  {
    id: 90,
    type: 'writing',
    question: 'Fill in: "Die Kinder ___ im Garten spielen."',
    options: ['dürfen', 'darf', 'darfst', 'durfte'],
    correctAnswer: 'dürfen',
    level: 'intermediate'
  },
  {
    id: 91,
    type: 'reading',
    question: 'What does "Staatsbürgerschaft" mean?',
    options: ['State visit', 'Government', 'Citizenship', 'National identity'],
    correctAnswer: 'Citizenship',
    level: 'intermediate'
  },
  {
    id: 92,
    type: 'writing',
    question: 'Complete: "Sie ___ nicht, was sie sagen sollte."',
    options: ['wusste', 'weiß', 'wissen', 'wussten'],
    correctAnswer: 'wusste',
    level: 'intermediate'
  },
  {
    id: 93,
    type: 'reading',
    question: 'What does "Feierabend" mean?',
    options: ['Holiday', 'Party evening', 'Celebration', 'End of work day'],
    correctAnswer: 'End of work day',
    level: 'intermediate'
  },
  {
    id: 94,
    type: 'writing',
    question: 'Fill in: "Wir ___ schon lange Freunde."',
    options: ['sind', 'haben', 'waren', 'würden'],
    correctAnswer: 'sind',
    level: 'intermediate'
  },
  {
    id: 95,
    type: 'reading',
    question: 'What does "Arbeitszeit" mean?',
    options: ['Work permit', 'Working hours', 'Work experience', 'Job time'],
    correctAnswer: 'Working hours',
    level: 'intermediate'
  },
  {
    id: 96,
    type: 'writing',
    question: 'Complete: "Er ___ mir seine Hilfe angeboten."',
    options: ['hat', 'hatte', 'haben', 'hätte'],
    correctAnswer: 'hat',
    level: 'intermediate'
  },
  {
    id: 97,
    type: 'reading',
    question: 'What does "Anmeldung" mean?',
    options: ['Announcement', 'Registration', 'Notification', 'Application'],
    correctAnswer: 'Registration',
    level: 'intermediate'
  },
  {
    id: 98,
    type: 'writing',
    question: 'Fill in: "Wir ___ uns auf den Urlaub."',
    options: ['freuen', 'freut', 'freue', 'freust'],
    correctAnswer: 'freuen',
    level: 'intermediate'
  },
  {
    id: 99,
    type: 'reading',
    question: 'What does "Entscheidung" mean?',
    options: ['Excuse', 'Decision', 'Determination', 'Choice'],
    correctAnswer: 'Decision',
    level: 'intermediate'
  },
  {
    id: 100,
    type: 'writing',
    question: 'Complete: "Ich ___ mein Bestes getan."',
    options: ['habe', 'hatte', 'bin', 'war'],
    correctAnswer: 'habe',
    level: 'intermediate'
  },
  
  // Proficient Level Questions (101-150)
  {
    id: 101,
    type: 'reading',
    question: 'What does "Auseinandersetzung" mean?',
    options: ['Separation', 'Confrontation/Dispute', 'Analysis', 'Exhibition'],
    correctAnswer: 'Confrontation/Dispute',
    level: 'proficient'
  },
  {
    id: 102,
    type: 'writing',
    question: 'Fill in: "Diese Theorie ___ noch bewiesen werden."',
    options: ['muss', 'musst', 'müssen', 'müsst'],
    correctAnswer: 'muss',
    level: 'proficient'
  },
  {
    id: 103,
    type: 'reading',
    question: 'What does "Zusammenhang" mean?',
    options: ['Cooperation', 'Context/Connection', 'Coherence', 'Combination'],
    correctAnswer: 'Context/Connection',
    level: 'proficient'
  },
  {
    id: 104,
    type: 'writing',
    question: 'Complete: "Es ist wichtig, dass er pünktlich ___."',
    options: ['kommt', 'komme', 'kommen', 'kommst'],
    correctAnswer: 'kommt',
    level: 'proficient'
  },
  {
    id: 105,
    type: 'reading',
    question: 'What does "Voraussetzung" mean?',
    options: ['Prediction', 'Prerequisite', 'Preference', 'Presumption'],
    correctAnswer: 'Prerequisite',
    level: 'proficient'
  },
  {
    id: 106,
    type: 'writing',
    question: 'Fill in: "Die Regierung ___ neue Maßnahmen ergreifen."',
    options: ['sollte', 'sollten', 'soll', 'sollt'],
    correctAnswer: 'sollte',
    level: 'proficient'
  },
  {
    id: 107,
    type: 'reading',
    question: 'What does "Wahrnehmung" mean?',
    options: ['Truth', 'Perception', 'Reality', 'Awareness'],
    correctAnswer: 'Perception',
    level: 'proficient'
  },
  {
    id: 108,
    type: 'writing',
    question: 'Complete: "Er behauptet, er ___ nichts davon gewusst."',
    options: ['habe', 'hätte', 'hat', 'hatte'],
    correctAnswer: 'habe',
    level: 'proficient'
  },
  {
    id: 109,
    type: 'reading',
    question: 'What does "Vorgehensweise" mean?',
    options: ['Procedure/Approach', 'Precedent', 'Progress', 'Processing'],
    correctAnswer: 'Procedure/Approach',
    level: 'proficient'
  },
  {
    id: 110,
    type: 'writing',
    question: 'Fill in: "Obwohl sie krank war, ___ sie zur Arbeit gegangen."',
    options: ['ist', 'war', 'wäre', 'würde'],
    correctAnswer: 'ist',
    level: 'proficient'
  },
  {
    id: 111,
    type: 'reading',
    question: 'What does "Angelegenheit" mean?',
    options: ['Anxiety', 'Concern', 'Matter/Affair', 'Attachment'],
    correctAnswer: 'Matter/Affair',
    level: 'proficient'
  },
  {
    id: 112,
    type: 'writing',
    question: 'Complete: "Sie bat darum, dass wir sie nicht ___."',
    options: ['stören', 'stört', 'störten', 'störe'],
    correctAnswer: 'stören',
    level: 'proficient'
  },
  {
    id: 113,
    type: 'reading',
    question: 'What does "Nachhaltigkeit" mean?',
    options: ['Aftermath', 'Sustainability', 'Persistence', 'Continuation'],
    correctAnswer: 'Sustainability',
    level: 'proficient'
  },
  {
    id: 114,
    type: 'writing',
    question: 'Fill in: "Es ___ besser gewesen, wenn wir früher angefangen hätten."',
    options: ['wäre', 'würde', 'war', 'ist'],
    correctAnswer: 'wäre',
    level: 'proficient'
  },
  {
    id: 115,
    type: 'reading',
    question: 'What does "Ausschreibung" mean?',
    options: ['Exclusion', 'Description', 'Tender/Advertisement', 'Selection'],
    correctAnswer: 'Tender/Advertisement',
    level: 'proficient'
  },
  {
    id: 116,
    type: 'writing',
    question: 'Complete: "Ich bezweifle, dass er die Wahrheit ___."',
    options: ['sagt', 'sage', 'sagte', 'sagen'],
    correctAnswer: 'sagt',
    level: 'proficient'
  },
  {
    id: 117,
    type: 'reading',
    question: 'What does "Bewusstsein" mean?',
    options: ['Knowledge', 'Consciousness/Awareness', 'Cognition', 'Understanding'],
    correctAnswer: 'Consciousness/Awareness',
    level: 'proficient'
  },
  {
    id: 118,
    type: 'writing',
    question: 'Fill in: "Die Situation ___ sich in den letzten Jahren deutlich verbessert."',
    options: ['hat', 'ist', 'hatte', 'war'],
    correctAnswer: 'hat',
    level: 'proficient'
  },
  {
    id: 119,
    type: 'reading',
    question: 'What does "Überzeugung" mean?',
    options: ['Persuasion', 'Conviction/Belief', 'Certainty', 'Opinion'],
    correctAnswer: 'Conviction/Belief',
    level: 'proficient'
  },
  {
    id: 120,
    type: 'writing',
    question: 'Complete: "Die Ergebnisse ___ noch nicht veröffentlicht worden."',
    options: ['sind', 'haben', 'wurden', 'werden'],
    correctAnswer: 'sind',
    level: 'proficient'
  },
  {
    id: 121,
    type: 'reading',
    question: 'What does "Rücksicht" mean?',
    options: ['Consideration', 'Retrospect', 'Respect', 'Review'],
    correctAnswer: 'Consideration',
    level: 'proficient'
  },
  {
    id: 122,
    type: 'writing',
    question: 'Fill in: "Sie ___ behauptet, dass sie unschuldig sei."',
    options: ['hat', 'ist', 'hatte', 'wäre'],
    correctAnswer: 'hat',
    level: 'proficient'
  },
  {
    id: 123,
    type: 'reading',
    question: 'What does "Gerechtigkeit" mean?',
    options: ['Rightness', 'Justice', 'Equality', 'Fairness'],
    correctAnswer: 'Justice',
    level: 'proficient'
  },
  {
    id: 124,
    type: 'writing',
    question: 'Complete: "Ohne seine Hilfe ___ wir das nicht geschafft."',
    options: ['hätten', 'haben', 'hatten', 'würden'],
    correctAnswer: 'hätten',
    level: 'proficient'
  },
  {
    id: 125,
    type: 'reading',
    question: 'What does "Zuständigkeit" mean?',
    options: ['Status', 'Agreement', 'Responsibility/Jurisdiction', 'Association'],
    correctAnswer: 'Responsibility/Jurisdiction',
    level: 'proficient'
  },
  {
    id: 126,
    type: 'writing',
    question: 'Fill in: "Es ist wichtig, dass alle Beteiligten ___ werden."',
    options: ['informiert', 'informieren', 'informiere', 'informierst'],
    correctAnswer: 'informiert',
    level: 'proficient'
  },
  {
    id: 127,
    type: 'reading',
    question: 'What does "Ausnahme" mean?',
    options: ['Exclusion', 'Exception', 'Extraction', 'Exemption'],
    correctAnswer: 'Exception',
    level: 'proficient'
  },
  {
    id: 128,
    type: 'writing',
    question: 'Complete: "Das Gebäude ___ vor hundert Jahren erbaut."',
    options: ['wurde', 'war', 'ist', 'hat'],
    correctAnswer: 'wurde',
    level: 'proficient'
  },
  {
    id: 129,
    type: 'reading',
    question: 'What does "Missverständnis" mean?',
    options: ['Mistake', 'Misunderstanding', 'Misconception', 'Misinterpretation'],
    correctAnswer: 'Misunderstanding',
    level: 'proficient'
  },
  {
    id: 130,
    type: 'writing',
    question: 'Fill in: "Er ___ behauptet, dass er zu Hause war."',
    options: ['hat', 'hatte', 'ist', 'wäre'],
    correctAnswer: 'hat',
    level: 'proficient'
  },
  {
    id: 131,
    type: 'reading',
    question: 'What does "Auswirkung" mean?',
    options: ['Effect/Impact', 'Outcome', 'Result', 'Consequence'],
    correctAnswer: 'Effect/Impact',
    level: 'proficient'
  },
  {
    id: 132,
    type: 'writing',
    question: 'Complete: "Falls er anrufen ___, sag ihm bitte Bescheid."',
    options: ['sollte', 'würde', 'könnte', 'möchte'],
    correctAnswer: 'sollte',
    level: 'proficient'
  },
  {
    id: 133,
    type: 'reading',
    question: 'What does "Vorwurf" mean?',
    options: ['Forward', 'Prejudice', 'Reproach/Accusation', 'Proposal'],
    correctAnswer: 'Reproach/Accusation',
    level: 'proficient'
  },
  {
    id: 134,
    type: 'writing',
    question: 'Fill in: "Ich wünschte, ich ___ mehr Zeit."',
    options: ['hätte', 'habe', 'hatte', 'haben'],
    correctAnswer: 'hätte',
    level: 'proficient'
  },
  {
    id: 135,
    type: 'reading',
    question: 'What does "Untersuchung" mean?',
    options: ['Analysis', 'Investigation/Examination', 'Research', 'Study'],
    correctAnswer: 'Investigation/Examination',
    level: 'proficient'
  },
  {
    id: 136,
    type: 'writing',
    question: 'Complete: "Der Bericht ___ bis morgen fertig sein."',
    options: ['muss', 'musste', 'müsste', 'müssen'],
    correctAnswer: 'muss',
    level: 'proficient'
  },
  {
    id: 137,
    type: 'reading',
    question: 'What does "Einschätzung" mean?',
    options: ['Input', 'Insertion', 'Assessment/Estimation', 'Influence'],
    correctAnswer: 'Assessment/Estimation',
    level: 'proficient'
  },
  {
    id: 138,
    type: 'writing',
    question: 'Fill in: "Sie ___, dass sie nicht kommen kann."',
    options: ['sagte', 'sagt', 'sage', 'sagen'],
    correctAnswer: 'sagte',
    level: 'proficient'
  },
  {
    id: 139,
    type: 'reading',
    question: 'What does "Voraussicht" mean?',
    options: ['Foresight', 'Provision', 'Forecast', 'Precaution'],
    correctAnswer: 'Foresight',
    level: 'proficient'
  },
  {
    id: 140,
    type: 'writing',
    question: 'Complete: "Wir ___ uns auf die Prüfung vorbereitet."',
    options: ['haben', 'sind', 'hatten', 'waren'],
    correctAnswer: 'haben',
    level: 'proficient'
  },
  {
    id: 141,
    type: 'reading',
    question: 'What does "Auffassung" mean?',
    options: ['Perception', 'View/Opinion', 'Conception', 'Understanding'],
    correctAnswer: 'View/Opinion',
    level: 'proficient'
  },
  {
    id: 142,
    type: 'writing',
    question: 'Fill in: "Es ist wichtig, dass er pünktlich ___."',
    options: ['ist', 'sein', 'wäre', 'sei'],
    correctAnswer: 'ist',
    level: 'proficient'
  },
  {
    id: 143,
    type: 'reading',
    question: 'What does "Beziehung" mean?',
    options: ['Reference', 'Relationship', 'Correlation', 'Connection'],
    correctAnswer: 'Relationship',
    level: 'proficient'
  },
  {
    id: 144,
    type: 'writing',
    question: 'Complete: "Das Konzert ___ bereits ausverkauft."',
    options: ['ist', 'hat', 'wird', 'soll'],
    correctAnswer: 'ist',
    level: 'proficient'
  },
  {
    id: 145,
    type: 'reading',
    question: 'What does "Gewissen" mean?',
    options: ['Certainty', 'Knowledge', 'Conscience', 'Consciousness'],
    correctAnswer: 'Conscience',
    level: 'proficient'
  },
  {
    id: 146,
    type: 'writing',
    question: 'Fill in: "Der Film ___ von einem berühmten Regisseur gedreht."',
    options: ['wurde', 'war', 'ist', 'hat'],
    correctAnswer: 'wurde',
    level: 'proficient'
  },
  {
    id: 147,
    type: 'reading',
    question: 'What does "Verantwortung" mean?',
    options: ['Response', 'Accountability', 'Responsibility', 'Liability'],
    correctAnswer: 'Responsibility',
    level: 'proficient'
  },
  {
    id: 148,
    type: 'writing',
    question: 'Complete: "Ich ___ mich schon immer für Sprachen interessiert."',
    options: ['habe', 'hatte', 'bin', 'war'],
    correctAnswer: 'habe',
    level: 'proficient'
  },
  {
    id: 149,
    type: 'reading',
    question: 'What does "Entschlossenheit" mean?',
    options: ['Resolution', 'Determination', 'Decision', 'Conclusion'],
    correctAnswer: 'Determination',
    level: 'proficient'
  },
  {
    id: 150,
    type: 'writing',
    question: 'Fill in: "Die neue Methode ___ sich als sehr effektiv erwiesen."',
    options: ['hat', 'ist', 'hatte', 'war'],
    correctAnswer: 'hat',
    level: 'proficient'
  }
];

export default function GermanQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'basic' | 'intermediate' | 'proficient'>('basic');

  const filteredQuestions = sampleQuestions.filter(q => q.level === selectedLevel);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (filteredQuestions[parseInt(questionIndex)].correctAnswer === answer) {
        correct++;
      }
    });
    return (correct / filteredQuestions.length) * 100;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">German Language Quiz</h2>
          {!showResults && (
            <div className="mb-8">
              <Button
                variant={selectedLevel === 'basic' ? 'default' : 'outline'}
                onClick={() => setSelectedLevel('basic')}
                className="mx-2"
              >
                Basic (50 Questions)
              </Button>
              <Button
                variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                onClick={() => setSelectedLevel('intermediate')}
                className="mx-2"
              >
                Intermediate (50 Questions)
              </Button>
              <Button
                variant={selectedLevel === 'proficient' ? 'default' : 'outline'}
                onClick={() => setSelectedLevel('proficient')}
                className="mx-2"
              >
                Proficient (50 Questions)
              </Button>
            </div>
          )}
          
          {!showResults ? (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">
                Question {currentQuestion + 1} of {filteredQuestions.length}
              </h3>
              <p className="text-lg mb-4">
                {filteredQuestions[currentQuestion]?.question}
              </p>
              <div className="space-y-3 mb-6">
                {filteredQuestions[currentQuestion]?.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={answers[currentQuestion] === option ? "default" : "outline"}
                    className="w-full justify-start text-left p-4"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (currentQuestion > 0) {
                      setCurrentQuestion(currentQuestion - 1);
                    }
                  }}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => {
                    if (currentQuestion < filteredQuestions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setShowResults(true);
                    }
                  }}
                  disabled={!answers[currentQuestion]}
                >
                  {currentQuestion === filteredQuestions.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
              <p className="text-4xl font-bold mb-6">{Math.round(calculateScore())}%</p>
              <p className="mb-4">
                You answered {Object.keys(answers).filter(index => 
                  filteredQuestions[parseInt(index)].correctAnswer === answers[parseInt(index)]
                ).length} out of {filteredQuestions.length} correctly.
              </p>
              <Button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="w-full"
              >
                Try Again
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
