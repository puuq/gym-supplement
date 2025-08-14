import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-supplements.jpg";

const Index = () => {
  const features = [
    {
      title: "Scientifically Backed",
      description: "Every formula is developed using cutting-edge research and peer-reviewed studies."
    },
    {
      title: "Third-Party Tested",
      description: "Independent laboratory testing ensures purity, potency, and safety standards."
    },
    {
      title: "Elite Quality",
      description: "Pharmaceutical-grade manufacturing exceeds industry standards for premium results."
    },
    {
      title: "VIP Service",
      description: "White-glove customer support and personalized nutrition guidance included."
    }
  ];

  const testimonials = [
    {
      name: "After using EliteSupps, I feel like I had become superhuman.",
      role: "Professional Athlete"
    },
    {
      name: "The quality and results are unmatched in the industry.",
      role: "Certified Trainer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">
                #1 Supplement Store in the world
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              All-in-one
              <br />
              <span className="text-accent">Supplement</span> for
              <br />
              Your Strength
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Nutritional supplements filled with 33 ingredients, all 
              working together to support your strength and health.
            </p>

            {/* Testimonial */}
            <div className="flex items-center space-x-4 bg-muted/50 rounded-lg p-4 max-w-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">★</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  "After using EliteSupps, I felt like I had become superhuman."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Shop Now
              </Button>
              {/* <Button variant="outline" size="lg" className="text-lg px-8">
                ▶ Play Video
              </Button> */}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-3xl transform rotate-6"></div>
            <img 
              src={heroImage} 
              alt="Premium supplement bottles" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-premium"
            />
            {/* Floating Elements */}
            <div className="absolute top-10 -left-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute top-32 -right-6 w-6 h-6 bg-accent/60 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-20 -left-8 w-4 h-4 bg-accent/80 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Elite Athletes Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that premium quality and scientific excellence make in your performance journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent hover:shadow-premium transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <div className="w-8 h-8 bg-accent-foreground rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Premium Product Line</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each product is meticulously crafted to deliver uncompromising quality and results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {["Elite Protein", "Pre-Workout Pro", "Recovery Matrix"].map((product, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-300 border-2 hover:border-accent">
              <CardHeader className="text-center">
                <div className="w-full h-64 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-24 h-40 bg-primary rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                </div>
                <CardTitle className="text-xl">{product}</CardTitle>
                <CardDescription className="text-2xl font-bold text-accent">$89</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="premium" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Index;
