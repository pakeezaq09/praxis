import { useEffect, useRef } from "react";
import { Link } from "wouter";
import ServiceCard from "@/components/ui/service-card";
import Counter from "@/components/ui/counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Code, Smartphone, Brain, Laptop } from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [heroRef, heroInView] = useIntersectionObserver();
  const [servicesRef, servicesInView] = useIntersectionObserver();
  const [statsRef, statsInView] = useIntersectionObserver();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, which is normal on some browsers
      });
    }
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      tags: ["End-to-End Solutions", "Future-Ready", "Personalized Approach", "Scalable & Reliable"],
      description: "Transform your vision into modern, responsive web applications...",
      fullDescription: "We create fast, modern, and responsive websites tailored for businesses, startups, and personal brands. Our approach combines cutting-edge technologies with user-centric design principles to deliver exceptional digital experiences that drive growth and engagement."
    },
    {
      icon: Laptop,
      title: "Software Development",
      tags: ["Custom Solutions", "Workflow Optimization", "Enterprise-Grade"],
      description: "Build powerful software solutions that streamline operations...",
      fullDescription: "We build custom tools and applications that streamline workflows and solve real business problems. From enterprise software to specialized tools, our solutions are designed to enhance productivity and drive digital transformation."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      tags: ["iOS & Android", "Cross-Platform", "User-Centric Design"],
      description: "Create engaging mobile experiences for iOS and Android...",
      fullDescription: "We design and develop mobile applications for iOS and Android that engage users and drive business results. Our mobile solutions combine intuitive design with robust functionality to create apps that users love."
    },
    {
      icon: Brain,
      title: "AI Solutions",
      tags: ["Machine Learning", "Smart Automation", "Data Analytics"],
      description: "Unlock the power of artificial intelligence for your business...",
      fullDescription: "We help businesses unlock the power of AI through smart integrations, machine learning models, and intelligent automation solutions that drive efficiency and innovation."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen relative flex items-center justify-center"
        data-testid="hero-section"
      >
        {/* Space Flight Video Background */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          data-testid="hero-video"
        >
          <source src="@assets/vecteezy_space-flight-above-earth-4k_21570538_1756808956981.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 gradient-text transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="hero-title"
          >
            From Theory to Practice, From Ideas to Impact
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="hero-subtitle"
          >
            Engineering tomorrow through intelligent, reliable systems
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/services">
              <button
                className="btn-gradient px-8 py-3 rounded-lg text-white font-medium hover:text-white transition-all"
                data-testid="button-explore-services"
              >
                Explore Services
              </button>
            </Link>
            <Link href="/appointment">
              <button
                className="btn-gradient px-8 py-3 rounded-lg text-white font-medium hover:text-white transition-all"
                data-testid="button-get-started"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section
        ref={servicesRef}
        id="services-preview"
        className="py-20 gradient-bg"
        data-testid="services-preview-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-services-subtitle">
              Redefining innovation possibilities impact across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={index * 200}
                isVisible={servicesInView}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button
                className="btn-gradient px-8 py-3 rounded-lg text-white font-medium hover:text-white transition-all"
                data-testid="button-view-all-services"
              >
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 gradient-bg" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-cta-title">
            How can we help you?
          </h2>
          <p className="text-xl text-gray-400 mb-8" data-testid="text-cta-subtitle">
            Are you ready to push boundaries and explore new frontiers of innovation?
          </p>
          <Link href="/contact">
            <button
              className="btn-gradient px-8 py-4 rounded-lg text-white font-medium text-lg hover:text-white transition-all"
              data-testid="button-work-together"
            >
              Let's work Together
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
