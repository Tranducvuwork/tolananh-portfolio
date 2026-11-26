import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TiktokShowcase from '@/components/TiktokShowcase';
import CaseStudies from '@/components/CaseStudies';
import ScrapbookExperience from '@/components/ScrapbookExperience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TiktokShowcase />
      <CaseStudies />
      <ScrapbookExperience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
