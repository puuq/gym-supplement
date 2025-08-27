import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

import slider1 from "@/assets/slider1.png";
import slider2 from "@/assets/slider2.png";
import handImage from "@/assets/hand.png";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-12 py-12 relative min-h-[600px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left - Product Images */}
          <div className="relative w-full h-full min-h-[400px] hidden sm:block">
          <img
            src={slider1}
            alt="Bottle 1"
            className="absolute z-10 w-48 md:w-60 top-20 left-0 rotate-[-10deg] drop-shadow-xl"
          />
          <img
            src={slider2}
            alt="Bottle 2"
            className="absolute z-0 w-44 md:w-56 top-24 left-32 rotate-[15deg] drop-shadow-md"
          />

            {/* 👉 HAND IMAGE GOES HERE */}
            {/* <img
              src={handImage}
              alt="Hand"
              className="absolute bottom-4 -left-12 w-80 md:w-[420px] opacity-90 pointer-events-none"
            /> */}

          </div>


          {/* Right - Content */}
          <div className="space-y-6">
            <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full inline-block">
              #1 Supplement Store in Nepal
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              All-in-one <br />
              <span className="text-accent">Supplement</span> for <br />
              Your Strength
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Curated supplements from the world’s top brands — chosen for those who demand elite strength, performance, and recovery.
            </p>

            {/* Testimonial Box */}
            <div className="flex items-center gap-4 bg-muted/60 px-4 py-3 rounded-xl shadow-sm max-w-md">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">★</div>
              <p className="text-sm">
                “Yushu introduced me to premium brands I never knew I needed.”
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Shop Now
              </Button>
              {/* <Button variant="outline" size="lg" className="text-lg px-8">
                ▶ Play Video
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 underline">Why Elite Athletes Choose Us</h2>
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
          <h2 className="text-4xl font-bold text-foreground mb-6 underline">Premium Product Line</h2>
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
