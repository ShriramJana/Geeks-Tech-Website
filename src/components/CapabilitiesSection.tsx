import { Card, CardContent } from "@/components/ui/card";
import { Database, Map, Factory, FlaskConical, Zap, Settings } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "ERP Transformations",
    description: "Large-scale ERP implementation and transformation services with 26+ years of expertise across multiple industries.",
  },
  {
    icon: Map,
    title: "GIS Integration",
    description: "Geographic Information System integration for utility operations, solving business pain points and enhancing efficiency.",
  },
  {
    icon: Factory,
    title: "Oil & Gas Solutions",
    description: "Specialized ERP and technology solutions tailored for the Oil & Gas industry's unique operational requirements.",
  },
  {
    icon: Zap,
    title: "Utility Industry Expertise",
    description: "Deep domain knowledge in utility operations, business process optimization, and operational excellence.",
  },
  {
    icon: FlaskConical,
    title: "Life Sciences Solutions",
    description: "Comprehensive technology solutions for Life Sciences companies, ensuring compliance and operational efficiency.",
  },
  {
    icon: Settings,
    title: "Business Process Optimization",
    description: "End-to-end business process analysis and optimization to streamline operations and drive sustainable growth.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading ERP and GIS solutions tailored for Oil & Gas, Utility, and Life Sciences organizations
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={capability.title}
                className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1 animate-scale-in stagger-delay-${(index % 3) + 1}`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
