import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Scientific Excellence",
      description: "Every formula is backed by peer-reviewed research and developed by leading sports nutrition scientists.",
    },
    {
      title: "Third-Party Testing",
      description: "All products undergo rigorous testing for purity, potency, and banned substances by independent laboratories.",
    },
    {
      title: "Elite Standards",
      description: "We maintain the highest manufacturing standards, exceeding industry requirements for quality and safety.",
    },
    {
      title: "Performance Focus",
      description: "Designed specifically for athletes and individuals who demand peak performance from their supplements.",
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Science Officer",
      background: "PhD in Exercise Physiology, Former Olympic Team Nutritionist",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product Development",
      background: "MS Sports Nutrition, 15+ years supplement industry experience",
    },
    {
      name: "Dr. James Mitchell",
      role: "Research Director",
      background: "PhD Biochemistry, Published researcher in sports performance",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elite Performance, Uncompromising Quality
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are more than a supplement company—we are partners in your pursuit of excellence. 
            Founded by athletes, for athletes, our mission is to deliver the world's most advanced 
            nutritional solutions to those who refuse to settle for anything less than extraordinary.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-hero rounded-2xl p-12 mb-16 text-center shadow-glow cursor-pointer">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To revolutionize sports nutrition by creating premium-grade supplements that empower 
            elite athletes and performance enthusiasts to transcend their limits and achieve 
            unprecedented levels of strength, endurance, and mental clarity.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  cursor-pointer">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-accent-foreground rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-premium">
          <h3 className="text-3xl font-bold text-foreground mb-6">Quality Commitment</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our state-of-the-art facilities operate under the strictest cGMP standards, 
            ensuring every product meets pharmaceutical-grade quality requirements. 
            From raw material sourcing to final packaging, excellence is our standard.
          </p>
          <Button variant="hero" size="lg">
            Learn About Our Process
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;