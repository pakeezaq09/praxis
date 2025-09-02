import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Counter from "@/components/ui/counter";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  const [heroRef, heroInView] = useIntersectionObserver();
  const [missionRef, missionInView] = useIntersectionObserver();
  const [statsRef, statsInView] = useIntersectionObserver();

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 gradient-bg"
        data-testid="about-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 gradient-text transition-all duration-800 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="text-about-hero-title"
          >
            Who We Are
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto transition-all duration-800 delay-300 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="text-about-hero-subtitle"
          >
            Translating technology into a positive impact
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-black" data-testid="company-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text" data-testid="text-company-title">
                Praxis Systems
              </h2>
              <p className="text-lg text-gray-400 mb-6" data-testid="text-company-description">
                At Praxis Systems, we are passionate about transforming businesses through innovative technology solutions. 
                Founded with the vision to bridge the gap between complex technology and practical business needs, we have 
                grown into a trusted partner for organizations seeking digital transformation.
              </p>
              <p className="text-lg text-gray-400 mb-6" data-testid="text-company-approach">
                Our approach combines deep technical expertise with a thorough understanding of business dynamics. 
                We don't just build software; we craft solutions that drive growth, enhance efficiency, and create 
                meaningful impact for our clients and their customers.
              </p>
              <p className="text-lg text-gray-400" data-testid="text-company-commitment">
                Every project we undertake is an opportunity to push boundaries, explore new possibilities, and 
                deliver excellence that exceeds expectations. We believe in the power of technology to transform 
                not just businesses, but entire industries.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Modern technology workspace"
                className="w-full h-96 object-cover rounded-lg grayscale"
                data-testid="img-company-workspace"
              />
            </div>
          </div>

          {/* Additional Technology Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Abstract technology grayscale"
              className="w-full h-64 object-cover rounded-lg grayscale"
              data-testid="img-tech-abstract-1"
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Modern software development"
              className="w-full h-64 object-cover rounded-lg grayscale"
              data-testid="img-tech-development"
            />
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Digital innovation grayscale"
              className="w-full h-64 object-cover rounded-lg grayscale"
              data-testid="img-tech-innovation"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section
        ref={missionRef}
        className="py-20 gradient-bg"
        data-testid="mission-vision-values"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`card-gradient rounded-lg p-8 transition-all duration-800 ${
                missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid="card-mission"
            >
              <div className="flex items-center mb-4">
                <Target className="text-3xl text-white mr-4" size={32} />
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-gray-400" data-testid="text-mission">
                To empower businesses through innovative technology solutions that drive growth, efficiency, 
                and digital transformation in an ever-evolving landscape. We are committed to delivering 
                excellence while fostering long-term partnerships with our clients.
              </p>
            </div>
            
            <div
              className={`card-gradient rounded-lg p-8 transition-all duration-800 delay-200 ${
                missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid="card-vision"
            >
              <div className="flex items-center mb-4">
                <Eye className="text-3xl text-white mr-4" size={32} />
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-gray-400" data-testid="text-vision">
                To be the global leader in transformative software solutions, reimagining tomorrow through 
                cutting-edge technology and exceptional client partnerships. We envision a world where 
                technology seamlessly integrates with human potential.
              </p>
            </div>
            
            <div
              className={`card-gradient rounded-lg p-8 transition-all duration-800 delay-400 ${
                missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid="card-values"
            >
              <div className="flex items-center mb-4">
                <Heart className="text-3xl text-white mr-4" size={32} />
                <h3 className="text-2xl font-bold text-white">Values</h3>
              </div>
              <p className="text-gray-400" data-testid="text-values">
                Innovation, excellence, integrity, and collaboration drive everything we do. We believe in 
                creating solutions that make a meaningful impact while maintaining the highest standards 
                of quality and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section
        ref={statsRef}
        className="py-20 bg-black"
        data-testid="company-stats"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-stats-title">
              Our Journey So Far
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-stats-subtitle">
              Building excellence through dedication and innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Counter
                target={1}
                suffix="+"
                className="counter gradient-text"
                isVisible={statsInView}
                data-testid="counter-years-excellence"
              />
              <p className="text-gray-400 mt-2" data-testid="text-years-excellence">Years of Excellence</p>
            </div>
            <div className="text-center">
              <Counter
                target={5}
                suffix="+"
                className="counter gradient-text"
                isVisible={statsInView}
                data-testid="counter-projects-completed"
              />
              <p className="text-gray-400 mt-2" data-testid="text-projects-completed">Projects Completed</p>
            </div>
            <div className="text-center">
              <Counter
                target={10}
                suffix="+"
                className="counter gradient-text"
                isVisible={statsInView}
                data-testid="counter-happy-clients"
              />
              <p className="text-gray-400 mt-2" data-testid="text-happy-clients">Happy Clients</p>
            </div>
            <div className="text-center">
              <Counter
                target={3}
                suffix="+"
                className="counter gradient-text"
                isVisible={statsInView}
                data-testid="counter-team-members"
              />
              <p className="text-gray-400 mt-2" data-testid="text-team-members">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-bg" data-testid="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-why-choose-title">
              Why Choose Praxis Systems?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-why-choose-subtitle">
              Our commitment to excellence sets us apart in the competitive technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-gradient rounded-lg p-6" data-testid="card-expertise">
              <h3 className="text-xl font-bold text-white mb-4">Deep Technical Expertise</h3>
              <p className="text-gray-400">
                Our team brings years of experience across diverse technologies and industries, 
                ensuring we deliver robust, scalable solutions.
              </p>
            </div>
            <div className="card-gradient rounded-lg p-6" data-testid="card-approach">
              <h3 className="text-xl font-bold text-white mb-4">Client-Centric Approach</h3>
              <p className="text-gray-400">
                We prioritize understanding your unique business needs and challenges to deliver 
                personalized solutions that drive real results.
              </p>
            </div>
            <div className="card-gradient rounded-lg p-6" data-testid="card-innovation">
              <h3 className="text-xl font-bold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-400">
                We stay at the forefront of technology trends, continuously exploring new 
                possibilities to keep your business ahead of the curve.
              </p>
            </div>
            <div className="card-gradient rounded-lg p-6" data-testid="card-quality">
              <h3 className="text-xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-400">
                Every solution undergoes rigorous testing and quality checks to ensure 
                reliability, security, and optimal performance.
              </p>
            </div>
            <div className="card-gradient rounded-lg p-6" data-testid="card-support">
              <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
              <p className="text-gray-400">
                Our relationship doesn't end at deployment. We provide continuous support 
                and maintenance to ensure your systems perform optimally.
              </p>
            </div>
            <div className="card-gradient rounded-lg p-6" data-testid="card-partnership">
              <h3 className="text-xl font-bold text-white mb-4">Long-term Partnership</h3>
              <p className="text-gray-400">
                We believe in building lasting relationships, working alongside you as your 
                trusted technology partner for sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
