import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const stakeholders = [
  {
    name: "Ted T Gopinath",
    role: "Chief Executive Officer",
    description: "With over 26+ years of experience in implementing large ERP transformations. Domain knowledge in Oil & Gas, Utility, and Life Sciences industries.",
    image: null, // Placeholder - no image
  },
  {
    name: "Kalaivani Krishnamurthy",
    role: "Chief Operating Officer",
    description: "With 26+ years of experience in the Utility industry, solving business pain points and integrating GIS for operations.",
    image: null, // Placeholder - no image
  },
];

export const StakeholdersSection = () => {
  return (
    <section id="stakeholders" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Stakeholders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders driving our mission forward
          </p>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stakeholders.map((stakeholder, index) => (
            <Card
              key={stakeholder.name}
              className={`group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up stagger-delay-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 aspect-square flex items-center justify-center">
                  {stakeholder.image ? (
                    <img
                      src={stakeholder.image}
                      alt={stakeholder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary/30" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stakeholder.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {stakeholder.role}
                </p>
                <p className="text-muted-foreground">
                  {stakeholder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
