import { useState } from "react";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    tags: string[];
    description: string;
    fullDescription: string;
  };
  delay?: number;
  isVisible: boolean;
}

export default function ServiceCard({ service, delay = 0, isVisible }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`service-card card-gradient rounded-lg p-8 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-3xl text-white mr-4" size={32} />
        <h3 className="text-2xl font-bold text-white" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
          {service.title}
        </h3>
      </div>
      
      <div className="space-y-2 mb-4" data-testid={`service-tags-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
        {service.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
            data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-400 mb-4" data-testid={`text-service-description-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
        {service.description}
      </p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-white hover:text-gray-300 transition-colors flex items-center"
        data-testid={`button-service-toggle-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        Learn More
        {isExpanded ? (
          <ChevronUp className="ml-2" size={16} />
        ) : (
          <ChevronDown className="ml-2" size={16} />
        )}
      </button>
      
      <div
        className={`service-detail mt-4 transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        data-testid={`service-detail-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="text-gray-300" data-testid={`text-service-full-description-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
            {service.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
