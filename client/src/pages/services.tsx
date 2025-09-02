import { useState } from "react";
import ServiceCard from "@/components/ui/service-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Code, Smartphone, Brain, Laptop } from "lucide-react";

export default function Services() {
  const [servicesRef, servicesInView] = useIntersectionObserver();

  const services = [
    {
      icon: Code,
      title: "Web Development",
      tags: ["End-to-End Solutions", "Future-Ready", "Personalized Approach", "Scalable & Reliable"],
      description: "We create fast, modern, and responsive websites tailored for businesses, startups, and personal brands...",
      fullDescription: "We create fast, modern, and responsive websites tailored for businesses, startups, and personal brands. Our approach combines cutting-edge technologies with user-centric design principles to deliver exceptional digital experiences that drive growth and engagement. From simple landing pages to complex web applications, we ensure every project meets the highest standards of performance, security, and user experience."
    },
    {
      icon: Laptop,
      title: "Software Development",
      tags: ["Custom Solutions", "Workflow Optimization", "Enterprise-Grade", "Scalable Architecture"],
      description: "We build custom tools and applications that streamline workflows and solve real business problems...",
      fullDescription: "We build custom tools and applications that streamline workflows and solve real business problems. From enterprise software to specialized tools, our solutions are designed to enhance productivity and drive digital transformation. Our development process focuses on understanding your unique requirements and delivering software that perfectly aligns with your business objectives."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      tags: ["iOS & Android", "Cross-Platform", "User-Centric Design", "Performance Optimized"],
      description: "We design and develop mobile applications for iOS and Android...",
      fullDescription: "We design and develop mobile applications for iOS and Android that engage users and drive business results. Our mobile solutions combine intuitive design with robust functionality to create apps that users love. Whether you need a native app or cross-platform solution, we ensure optimal performance and seamless user experience across all devices."
    },
    {
      icon: Brain,
      title: "AI Solutions",
      tags: ["Machine Learning", "Smart Automation", "Data Analytics", "Predictive Intelligence"],
      description: "We help businesses unlock the power of AI through smart integrations...",
      fullDescription: "We help businesses unlock the power of AI through smart integrations, machine learning models, and intelligent automation solutions that drive efficiency and innovation. Our AI solutions include chatbots, recommendation systems, predictive analytics, and process automation that transform how businesses operate and serve their customers."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 gradient-bg" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text" data-testid="text-services-hero-title">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto" data-testid="text-services-hero-subtitle">
            Redefining innovation possibilities impact across the globe
          </p>
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=400&q=80"
              alt="Abstract technology concepts"
              className="w-full h-64 object-cover rounded-lg grayscale opacity-80"
              data-testid="img-services-hero"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={servicesRef}
        className="py-20 bg-black"
        data-testid="services-grid-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={index * 100}
                isVisible={servicesInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Image */}
      <section className="py-12 bg-black" data-testid="technology-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Modern software development workspace"
                className="w-full h-80 object-cover rounded-lg grayscale"
                data-testid="img-workspace"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Digital innovation concepts"
                className="w-full h-80 object-cover rounded-lg grayscale"
                data-testid="img-innovation"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
