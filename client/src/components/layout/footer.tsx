import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-company">
            <h3 className="text-xl font-bold gradient-text mb-4" data-testid="text-company-name">
              Praxis Systems
            </h3>
            <p className="text-gray-400 mb-4" data-testid="text-company-tagline">
              Reimagining tomorrow through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold text-white mb-4" data-testid="text-services-heading">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-web-development">
                    Web Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-software-development">
                    Software Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-mobile-apps">
                    Mobile Apps
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-ai-solutions">
                    AI Solutions
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-company-links">
            <h4 className="text-lg font-semibold text-white mb-4" data-testid="text-company-heading">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-about-us">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-contact">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/appointment">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer" data-testid="link-book-appointment">
                    Book Appointment
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-contact-info">
            <h4 className="text-lg font-semibold text-white mb-4" data-testid="text-contact-heading">
              Contact
            </h4>
            <p className="text-gray-400 mb-2" data-testid="text-footer-email">
              info@praxisystems.com
            </p>
            <p className="text-gray-400 mb-2" data-testid="text-footer-phone">
              +44 07856 147670
            </p>
            <p className="text-gray-400" data-testid="text-footer-location">
              Wolverhampton, United Kingdom
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="text-copyright">
            © 2024 Praxis Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
