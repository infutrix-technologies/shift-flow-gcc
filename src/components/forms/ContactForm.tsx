
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormProps {
  type?: 'contact' | 'quote';
  className?: string;
}

const ContactForm = ({ type = 'contact', className = '' }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    originCountry: '',
    destinationCountry: '',
    cargoType: '',
    weight: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted successfully",
        description: "We've received your request and will get back to you soon.",
      });
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceType: '',
        originCountry: '',
        destinationCountry: '',
        cargoType: '',
        weight: '',
        message: ''
      });
    }, 1000);
  };

  const isQuoteForm = type === 'quote';

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
            placeholder="Your name"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name {isQuoteForm && '*'}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required={isQuoteForm}
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
            placeholder="Your company"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
            placeholder="+971 XX XXX XXXX"
          />
        </div>

        {isQuoteForm && (
          <>
            {/* Service Type */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required={isQuoteForm}
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="">Select service type</option>
                <option value="landFreight">Land Freight & Cross-Border</option>
                <option value="multiModal">Multi-Modal Logistics</option>
                <option value="temperatureControlled">Temperature-Controlled</option>
                <option value="warehousing">Warehousing & Distribution</option>
                <option value="contractLogistics">Contract Logistics</option>
              </select>
            </div>

            {/* Origin Country */}
            <div>
              <label htmlFor="originCountry" className="block text-sm font-medium text-gray-700 mb-1">
                Origin Country *
              </label>
              <input
                id="originCountry"
                name="originCountry"
                type="text"
                required={isQuoteForm}
                value={formData.originCountry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                placeholder="Country of origin"
              />
            </div>

            {/* Destination Country */}
            <div>
              <label htmlFor="destinationCountry" className="block text-sm font-medium text-gray-700 mb-1">
                Destination Country *
              </label>
              <input
                id="destinationCountry"
                name="destinationCountry"
                type="text"
                required={isQuoteForm}
                value={formData.destinationCountry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                placeholder="Country of destination"
              />
            </div>

            {/* Cargo Type */}
            <div>
              <label htmlFor="cargoType" className="block text-sm font-medium text-gray-700 mb-1">
                Cargo Type *
              </label>
              <input
                id="cargoType"
                name="cargoType"
                type="text"
                required={isQuoteForm}
                value={formData.cargoType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                placeholder="Type of cargo"
              />
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Approximate Weight (kg)
              </label>
              <input
                id="weight"
                name="weight"
                type="text"
                value={formData.weight}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                placeholder="Estimated weight"
              />
            </div>
          </>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {isQuoteForm ? 'Additional Requirements' : 'Message'} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
          placeholder={isQuoteForm ? 'Provide any additional details about your shipment' : 'How can we help you?'}
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Submitting...' : isQuoteForm ? 'Request Quote' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
