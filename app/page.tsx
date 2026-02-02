import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import GrantsAwards from '@/components/GrantsAwards';
import Hero from '@/components/Hero';
import Integration from '@/components/Integration';
import News from '@/components/News';
import PartnersLogo from '@/components/PartnersLogo';
import Products from '@/components/Products';
import Publications from '@/components/Publications';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import VideoFeature from '@/components/VideoFeature';

export default function Home() {
    return (
        <section>
            <div id="hero">
                <Hero />
            </div>
            <div id="solutions">
                <Products />
            </div>
            <div id="partners">
                <PartnersLogo />
            </div>
            <div id="partners">
                <GrantsAwards />
            </div>
            <div id="showreel">
                <VideoFeature />
            </div>
            <div id="integration">
                <Integration />
            </div>
            <div id="team">
                <Team />
            </div>
            <div id="testimonials">
                <Testimonials />
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <div id="news">
                <News />
            </div>
            <div id="publications">
                <Publications />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </section>
    );
}
