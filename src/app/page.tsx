"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
import { Heart, Layers, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Luxe Cloth"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Timeless Elegance in Every Thread."
      description="Discover our exclusive collection of luxury fabrics, meticulously crafted for those who demand uncompromising quality and style."
      tag="New Collection 2025"
      buttons={[
        {
          text: "Explore Collection",
          href: "#products",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tailoring-items-arrangement-still-life_23-2149647260.jpg?_wi=1",
          imageAlt: "Luxurious fabric",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/old-craftsman-trainee-working_482257-79678.jpg?_wi=1",
          imageAlt: "Fine silk",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cozy-texture-clothing_23-2149432470.jpg?_wi=1",
          imageAlt: "Soft cashmere",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-pinecones-beige-shawl-dark-surface-copy-place_140725-102769.jpg?_wi=1",
          imageAlt: "Organic linen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-pink-purple-fabric-material_23-2147921835.jpg",
          imageAlt: "Satin fabric",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-burgundy-fabric-suit_23-2148402310.jpg",
          imageAlt: "Velvet weave",
        },
      ]}
      tagIcon={Sparkles}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="A Legacy of Textile Mastery."
      buttons={[
        {
          text: "Our Heritage",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Imperial Silk",
          price: "$120/m",
          imageSrc: "http://img.b2bpic.net/free-photo/female-reproductive-system-concept-with-silk_23-2150052424.jpg",
        },
        {
          id: "p2",
          name: "Royal Cashmere",
          price: "$250/m",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-background-fabric-detail_23-2148210069.jpg",
        },
        {
          id: "p3",
          name: "Pure Belgian Linen",
          price: "$80/m",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-monochromatic-cloths_23-2148770334.jpg",
        },
        {
          id: "p4",
          name: "Satin Royale",
          price: "$150/m",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543675.jpg",
        },
        {
          id: "p5",
          name: "Midnight Velvet",
          price: "$190/m",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-three-colorful-silky-drapes_23-2147921844.jpg",
        },
        {
          id: "p6",
          name: "Signature Brocade",
          price: "$300/m",
          imageSrc: "http://img.b2bpic.net/free-photo/seamless-carpet-texture-floor-pattern-blue-color_169016-48672.jpg",
        },
      ]}
      title="Curated Fabric Selection"
      description="Handpicked materials for the discerning connoisseur."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Expert Artisans",
          value: "50+",
          icon: Users,
        },
        {
          id: "m2",
          title: "Fabrics Sourced",
          value: "1000+",
          icon: Layers,
        },
        {
          id: "m3",
          title: "Happy Clients",
          value: "5k+",
          icon: Heart,
        },
      ]}
      title="Excellence in Numbers"
      description="Our commitment to quality is reflected in the trust we have built over the years."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Elena Rossi",
          date: "Jan 2025",
          title: "Designer",
          quote: "The quality is simply unmatched.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/elegant-stylish-lady-with-collected-hair-dressed-gold-tshirt-neck-jewelry-is-smiling-camera-posing-beige-background_291650-2401.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/tailoring-items-arrangement-still-life_23-2149647260.jpg?_wi=2",
          imageAlt: "portrait happy customer luxury",
        },
        {
          id: "t2",
          name: "Mark Stevens",
          date: "Feb 2025",
          title: "Tailor",
          quote: "My clients love these fabrics.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/pretty-asian-girl-looking-camera-contrast-portrait_633478-538.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-designer-s-hand-choosing-thread-from-container_23-2147875009.jpg",
          imageAlt: "portrait happy customer luxury",
        },
        {
          id: "t3",
          name: "Sophia Chen",
          date: "Mar 2025",
          title: "Boutique Owner",
          quote: "Stunning textures every time.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-mall_23-2148195370.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/old-craftsman-trainee-working_482257-79678.jpg?_wi=2",
          imageAlt: "portrait happy customer luxury",
        },
        {
          id: "t4",
          name: "James Ward",
          date: "Apr 2025",
          title: "Fashion Pro",
          quote: "True luxury in every meter.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cozy-texture-clothing_23-2149432470.jpg?_wi=2",
          imageAlt: "portrait happy customer luxury",
        },
        {
          id: "t5",
          name: "Lisa Wang",
          date: "May 2025",
          title: "Stylist",
          quote: "Exceptional fabric performance.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/clothes-store-employee-working_23-2148915577.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-pinecones-beige-shawl-dark-surface-copy-place_140725-102769.jpg?_wi=2",
          imageAlt: "portrait happy customer luxury",
        },
      ]}
      title="Voices of Elegance"
      description="Hear what our distinguished partners and customers say about our premium textiles."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue Fashion",
        "Harper Bazaar",
        "Couture Daily",
        "Style Weekly",
        "Global Trends",
        "Luxury Life",
        "Fashion Hub",
      ]}
      title="Trusted Partners"
      description="Collaborating with industry leaders to bring excellence to you."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How is fabric sourced?",
          content: "We work directly with artisanal mills, ensuring that every batch meets our strict standards of craftsmanship and durability.",
        },
        {
          id: "f2",
          title: "Do you ship worldwide?",
          content: "Yes, we provide expedited global shipping with insured handling to ensure your premium materials arrive in pristine condition.",
        },
        {
          id: "f3",
          title: "Can I request swatches?",
          content: "Absolutely. We offer swatch kits for all our core collections, allowing you to experience the texture and weight before making a commitment.",
        },
      ]}
      sideTitle="Common Inquiries"
      faqsAnimation="slide-up"
      sideDescription="Everything you need to know about our sourcing, shipping, and fabric quality."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Inquiry"
      title="Get in Touch"
      description="Connect with us to discuss your specific fabric requirements or partnership opportunities."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-woman-silhouette-posing_23-2148238196.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Luxe Cloth"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Fabrics",
              href: "#products",
            },
            {
              label: "Collections",
              href: "#",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
