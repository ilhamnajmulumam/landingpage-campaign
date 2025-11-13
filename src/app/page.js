import NavBar from '@/component/NavBar';
import Footer from '@/component/Footer';
import CallToActionSection from '@/component/CallToActionSection';
import ProductBenefitsSection from '@/component/ProductBenefitsSection';
import CustomerReviewSection from '@/component/CustomerReviewSection';
import WhyChooseUsSection from '@/component/WhyChooseUsSection';
import HeroSection from '@/component/HeroSection';
import FeaturedProductSection from '@/component/FeaturedProductsSection';

export default function Home() {
    return (
        <div>
            <div className="p-5 lg:mx-30">
                <NavBar />
                <section id="hero-section">
                    <HeroSection />
                </section>
                <section id="why-choose-us-section">
                    <WhyChooseUsSection />
                </section>
                <section id="featured-products-section">
                    <FeaturedProductSection />
                </section>
                <section id="customer-reviews-section">
                    <CustomerReviewSection />
                </section>
                <section id="product-benefits-section">
                    <ProductBenefitsSection />
                </section>
                <section id="call-to-action-section">
                    <CallToActionSection />
                </section>
            </div>
            <Footer />
        </div>
    );
}
