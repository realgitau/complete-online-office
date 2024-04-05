import HeroSection from "@/components/Hero/HeroSection";
import About from "@/components/About/About";
import Write from "@/components/WhyWrite/Write";
import Awards from "@/components/Awards/Awards";
import Books from "@/components/Books/Books";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className=" mt-20 p-10 rounded-md">
      <HeroSection />
      <About />
      <Write />
      <Awards />
      <Books />
      <Services />
      <Contact />
    </main>
  );
}
