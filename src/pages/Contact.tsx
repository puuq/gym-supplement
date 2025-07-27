import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactMethods = [
    {
      title: "VIP Customer Service",
      description: "24/7 white-glove support for our elite members",
      details: "support@elitesupps.com",
      hours: "Available 24/7"
    },
    {
      title: "Nutrition Consultation",
      description: "Personalized guidance from certified sports nutritionists",
      details: "nutrition@elitesupps.com",
      hours: "Mon-Fri: 8AM-8PM EST"
    },
    {
      title: "Partnership Inquiries",
      description: "Elite athlete and team partnership opportunities",
      details: "partnerships@elitesupps.com",
      hours: "Mon-Fri: 9AM-6PM EST"
    }
  ];

  const offices = [
    {
      location: "Global Headquarters",
      address: "1250 Elite Performance Drive\nSuite 500\nBeverly Hills, CA 90210",
      phone: "+1 (555) 123-ELITE"
    },
    {
      location: "European Operations",
      address: "45 Regent Street\nMayfair District\nLondon W1B 4LR, UK",
      phone: "+44 20 7123 4567"
    },
    {
      location: "Asia Pacific Hub",
      address: "Marina Bay Financial Centre\nTower 3, Level 45\nSingapore 018983",
      phone: "+65 6789 0123"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elite Support & Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience white-glove customer service that matches the premium quality of our products. 
            Our team of experts is here to support your performance journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-2 shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription>
                Send us a message and our team will respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your goals and how we can support you..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="premium" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Methods</h2>
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-accent font-semibold mb-1">{method.details}</p>
                  <p className="text-sm text-muted-foreground">{method.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Offices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Global Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{office.location}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                    {office.address}
                  </p>
                  <p className="text-accent font-semibold">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-premium">
          <h3 className="text-3xl font-bold text-foreground mb-4">Need Immediate Support?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert support team is ready to help with product questions and personalized consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Call Support
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;