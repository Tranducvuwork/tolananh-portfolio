import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySpotlight from '@/components/CategorySpotlight';
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
      <CategorySpotlight />
      <TiktokShowcase />
      <CaseStudies />
      <ScrapbookExperience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
