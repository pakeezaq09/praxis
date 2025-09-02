import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 gradient-bg" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            How can we help you?
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-testid="contact-info">
              <h3 className="text-2xl font-bold text-white mb-8" data-testid="text-get-in-touch">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start" data-testid="contact-email">
                  <Mail className="text-xl text-white mr-4 mt-1" size={24} />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400" data-testid="text-email-address">
                      contact@praxissystems.co.uk
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" data-testid="contact-phone">
                  <Phone className="text-xl text-white mr-4 mt-1" size={24} />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400" data-testid="text-phone-number">
                      +44 20 7946 0958
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" data-testid="contact-address">
                  <MapPin className="text-xl text-white mr-4 mt-1" size={24} />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400" data-testid="text-office-address">
                      25 Old Broad Street<br />
                      London EC2N 1HN<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Images */}
              <div className="mt-8 space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300&q=80"
                  alt="Futuristic technology concept"
                  className="w-full h-48 object-cover rounded-lg grayscale"
                  data-testid="img-tech-concept-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300&q=80"
                  alt="Digital innovation grayscale"
                  className="w-full h-48 object-cover rounded-lg grayscale"
                  data-testid="img-tech-concept-2"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div data-testid="contact-form-container">
              <div className="card-gradient rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6" data-testid="text-send-message">
                  Send us a Message
                </h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center">
                      <User className="mr-2" size={16} />
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="form-input bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white placeholder-gray-500"
                      {...form.register("name")}
                      data-testid="input-contact-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-sm" data-testid="error-contact-name">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center">
                      <Mail className="mr-2" size={16} />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="form-input bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white placeholder-gray-500"
                      {...form.register("email")}
                      data-testid="input-contact-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-sm" data-testid="error-contact-email">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center">
                      <MessageSquare className="mr-2" size={16} />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      className="form-input bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white placeholder-gray-500"
                      {...form.register("message")}
                      data-testid="textarea-contact-message"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm" data-testid="error-contact-message">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="btn-gradient w-full py-4 rounded-lg text-white font-medium text-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2" size={20} />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 gradient-bg" data-testid="office-hours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text" data-testid="text-office-hours-title">
              Office Hours
            </h2>
            <p className="text-xl text-gray-400" data-testid="text-office-hours-subtitle">
              We're here when you need us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gradient rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4" data-testid="text-weekdays-title">
                Monday - Friday
              </h3>
              <p className="text-gray-400 text-lg" data-testid="text-weekdays-hours">
                9:00 AM - 6:00 PM GMT
              </p>
            </div>
            
            <div className="card-gradient rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4" data-testid="text-saturday-title">
                Saturday
              </h3>
              <p className="text-gray-400 text-lg" data-testid="text-saturday-hours">
                10:00 AM - 4:00 PM GMT
              </p>
            </div>
            
            <div className="card-gradient rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4" data-testid="text-sunday-title">
                Sunday
              </h3>
              <p className="text-gray-400 text-lg" data-testid="text-sunday-hours">
                Closed
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4" data-testid="text-emergency-contact">
              For urgent matters outside office hours, please email us and we'll respond as soon as possible.
            </p>
            <p className="text-white font-medium" data-testid="text-response-commitment">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
