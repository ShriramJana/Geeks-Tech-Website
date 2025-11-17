import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award } from "lucide-react";

const leaders = [
  {
    name: "Ted T Gopinath",
    title: "CEO",
    description: "With over 26+ years experience in implementing large ERP transformations. Domain knowledge in Oil & Gas, Utility, and Life sciences industry.",
    icon: Briefcase,
  },
  {
    name: "Kalaivani Krishnamurthy",
    title: "COO",
    description: "With 26+ years experience in the Utility industry, solving business pain points and integrating GIS for operations.",
    icon: Award,
  },
];

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Our Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced leaders driving innovation and excellence at Geeks Technologies Inc.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => {
            const Icon = leader.icon;
            return (
              <Card
                key={leader.name}
                className="animate-fade-in-up hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-4">
                        {leader.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {leader.description}
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

