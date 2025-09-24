import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integration from '@/components/Integration';
import Products from '@/components/Products';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import VideoFeature from '@/components/VideoFeature';

export default function Home() {
    return (
        <section>
            <Hero />
            <Products />
            <VideoFeature />
            <Integration />
            <Team />
            <Testimonials />
            <FAQ className="mt-24 lg:mt-64" />
            <Contact />
            <Footer className="mt-24 lg:mt-80" />
        </section>
    );
}
