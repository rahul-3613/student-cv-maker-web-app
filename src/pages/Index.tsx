import { Hero } from '@/components/home/Hero';
import { Benefits } from '@/components/home/Benefits';
import { TemplatePreview } from '@/components/home/TemplatePreview';
import { Footer } from '@/components/home/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <TemplatePreview />
      <Footer />
    </main>
  );
};

export default Index;