import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const productCategories = [
    {
      title: "Elite Protein Formulations",
      description: "Premium whey isolates and plant-based proteins for superior muscle synthesis",
      products: [
        { name: "Platinum Whey Isolate", price: "$89", features: ["25g Pure Protein", "Zero Sugar", "Fast Absorption"] },
        { name: "Elite Plant Protein", price: "$95", features: ["Organic Blend", "Complete Amino Profile", "Digestive Enzymes"] },
        { name: "Hydrolyzed Casein", price: "$99", features: ["Slow Release", "Overnight Recovery", "Anti-Catabolic"] },
      ]
    },
    {
      title: "Precision Pre-Workouts",
      description: "Scientifically engineered formulas for peak performance and focus",
      products: [
        { name: "Neural Stim Elite", price: "$79", features: ["Cognitive Enhancement", "Clean Energy", "No Crash"] },
        { name: "Pump Matrix Pro", price: "$85", features: ["Massive Pumps", "Vasodilation", "Endurance Boost"] },
        { name: "Focus Formula X", price: "$75", features: ["Mental Clarity", "Sustained Focus", "Nootropic Blend"] },
      ]
    },
    {
      title: "Recovery & Wellness",
      description: "Advanced recovery compounds for optimal regeneration",
      products: [
        { name: "Amino Recovery Elite", price: "$69", features: ["BCAA + EAA", "Hydration Matrix", "Anti-Inflammatory"] },
        { name: "Sleep Optimizer", price: "$59", features: ["Deep Sleep", "Growth Hormone Support", "Natural Ingredients"] },
        { name: "Joint Support Pro", price: "$65", features: ["Collagen Blend", "Mobility Support", "Pain Relief"] },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Product Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of scientifically backed, third-party tested supplements 
            designed for elite athletes and performance enthusiasts.
          </p>
        </div>

        {/* Product Categories */}
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <Card key={productIndex} className="group hover:shadow-premium transition-all duration-300 border-2 hover:border-accent">
                  <CardHeader className="text-center">
                    <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <div className="w-20 h-32 bg-primary rounded-lg shadow-lg"></div>
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-accent">{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="premium" className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-premium">
          <h3 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know about new product releases and exclusive offers.
          </p>
          <Button variant="hero" size="lg">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;