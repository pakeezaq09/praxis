import { useState } from "react";
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
import { Calendar, Clock, User, Mail, Briefcase, MessageSquare } from "lucide-react";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please specify the service you're interested in"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function Appointment() {
  const { toast } = useToast();
  
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      date: "",
      message: "",
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      return await apiRequest("POST", "/api/appointments", data);
    },
    onSuccess: () => {
      toast({
        title: "Appointment Request Sent!",
        description: "We'll get back to you within 24 hours to confirm your appointment.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send appointment request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: AppointmentFormData) => {
    appointmentMutation.mutate(data);
  };

  const services = [
    "Web Development",
    "Software Development", 
    "Mobile App Development",
    "AI Solutions"
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 gradient-bg" data-testid="appointment-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text" data-testid="text-appointment-title">
            Make an Appointment
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto" data-testid="text-appointment-subtitle">
            Ready to transform your business? Let's discuss your project requirements.
          </p>
          <div className="mt-8">
            <img
              src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop"
              alt="Professional workspace"
              className="w-full h-64 object-cover rounded-lg grayscale opacity-80"
              data-testid="img-appointment-hero"
            />
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-black" data-testid="appointment-form-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient rounded-lg p-8">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-appointment">
              <div className="grid md:grid-cols-2 gap-6">
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
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-sm" data-testid="error-name">
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
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-sm" data-testid="error-email">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-gray-300 flex items-center">
                    <Briefcase className="mr-2" size={16} />
                    Service of Interest
                  </Label>
                  <select
                    id="service"
                    className="form-input w-full px-4 py-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white"
                    {...form.register("service")}
                    data-testid="select-service"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.service && (
                    <p className="text-red-400 text-sm" data-testid="error-service">
                      {form.formState.errors.service.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium text-gray-300 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    className="form-input bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white"
                    {...form.register("date")}
                    data-testid="input-date"
                  />
                  {form.formState.errors.date && (
                    <p className="text-red-400 text-sm" data-testid="error-date">
                      {form.formState.errors.date.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center">
                  <MessageSquare className="mr-2" size={16} />
                  Additional Details
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="form-input bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white placeholder-gray-500"
                  {...form.register("message")}
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={appointmentMutation.isPending}
                className="btn-gradient w-full py-4 rounded-lg text-white font-medium text-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                data-testid="button-book-appointment"
              >
                {appointmentMutation.isPending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Booking Appointment...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Clock className="mr-2" size={20} />
                    Book Appointment
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 gradient-bg" data-testid="appointment-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gradient rounded-lg p-6 text-center">
              <Clock className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-xl font-bold text-white mb-2" data-testid="text-response-time-title">
                Quick Response
              </h3>
              <p className="text-gray-400" data-testid="text-response-time-description">
                We'll respond to your appointment request within 24 hours to confirm the meeting details.
              </p>
            </div>
            
            <div className="card-gradient rounded-lg p-6 text-center">
              <User className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-xl font-bold text-white mb-2" data-testid="text-consultation-title">
                Free Consultation
              </h3>
              <p className="text-gray-400" data-testid="text-consultation-description">
                Initial consultation is completely free. We'll discuss your requirements and provide expert guidance.
              </p>
            </div>
            
            <div className="card-gradient rounded-lg p-6 text-center">
              <Briefcase className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-xl font-bold text-white mb-2" data-testid="text-proposal-title">
                Custom Proposal
              </h3>
              <p className="text-gray-400" data-testid="text-proposal-description">
                Receive a detailed proposal tailored to your specific needs and budget requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
