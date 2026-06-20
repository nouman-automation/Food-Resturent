import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import FeaturedMenu from '@/components/sections/FeaturedMenu';
import FullMenu from '@/components/sections/FullMenu';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutUs from '@/components/sections/AboutUs';
import CustomerReviews from '@/components/sections/CustomerReviews';
import Gallery from '@/components/sections/Gallery';
import DeliveryArea from '@/components/sections/DeliveryArea';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg overflow-hidden">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <FullMenu />
      <WhyChooseUs />
      <AboutUs />
      <CustomerReviews />
      <Gallery />
      <DeliveryArea />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
