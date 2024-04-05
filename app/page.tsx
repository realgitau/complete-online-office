import HeroSection from "@/components/Hero/HeroSection";
import About from "@/components/About/About";
import Write from "@/components/WhyWrite/Write";
import Awards from "@/components/Awards/Awards";
import Books from "@/components/Books/Books";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className=" mt-20">
      <HeroSection />
      <About />
      <Write />
      <Awards />
      <Books />
      <Contact />
    </main>
  );
}
