import Image from "next/image";
import HeroBanner from "./components/sections/HeroBanner";
import PartnerLogos from "./components/sections/PartnerLogos";
import FeaturesHighlight from "./components/sections/FeaturesHighlight";
import HowItWorks from "./components/sections/HowItWorks";
import KeyBenefits from "./components/sections/KeyBenefits";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";
import LatestBlogPosts from "./components/sections/LatestBlogPosts";
import PricingOverview from "./components/sections/PricingOverview";
import CallToAction from "./components/sections/CallToAction";
import FAQSection from "./components/sections/FAQSection";
import NewsletterSignup from "./components/sections/NewsletterSignup";
import DemoForm from "./components/sections/DemoForm";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0c0c0c', color: '#F5D0C5', minHeight: '100vh' }}>
      <HeroBanner />
      <FeaturesHighlight />
      <HowItWorks />
      <KeyBenefits />
      <WhyChooseUs />
      <Testimonials />
      <PricingOverview />
      <CallToAction />
      <FAQSection />
      <LatestBlogPosts />
      <PartnerLogos />
      <NewsletterSignup />
      <DemoForm />
    </main>
  );
}
