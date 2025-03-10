import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import WhyGerman from "@/components/home/why-german";
import Map from "@/components/home/map";
import Faculty from "@/components/home/faculty";
import Testimonials from "@/components/home/testimonials";
import LanguageLevels from "@/components/home/language-levels";
import LanguageTest from "@/components/home/language-test";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyGerman />
      <LanguageLevels />
      <LanguageTest />
      <About />
      <Map />
      <Faculty />
      <Testimonials />
    </div>
  );
}