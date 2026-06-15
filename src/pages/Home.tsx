import Hero from '@/components/home/Hero';
import ProductCategories from '@/components/home/ProductCategories';
import Stats from '@/components/home/Stats';
import CaseShowcase from '@/components/home/CaseShowcase';
import CTASection from '@/components/home/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCategories />
      <Stats />
      <CaseShowcase />
      <CTASection />
    </div>
  );
};

export default Home;
