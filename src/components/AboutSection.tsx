import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const values = [
  "26+ years of industry expertise",
  "ERP transformation excellence",
  "GIS integration specialization",
  "Industry-focused solutions",
  "Client-centric approach",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Modern office showcasing teamwork and innovation"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Geeks Technologies Inc.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Geeks Technologies Inc. is a leading technology consulting firm specializing in large-scale 
              ERP transformations and GIS integration. With over 26 years of combined experience, our 
              leadership team brings deep domain expertise in Oil & Gas, Utility, and Life Sciences industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Irving, Texas, we are committed to delivering innovative solutions that solve complex 
              business challenges. Our approach combines extensive industry knowledge with cutting-edge 
              technology to help organizations achieve operational excellence and sustainable growth.
            </p>

            {/* Values List */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Core Values</h3>
              {values.map((value, index) => (
                <div
                  key={value}
                  className={`flex items-center space-x-3 animate-fade-in-up stagger-delay-${(index % 4) + 1}`}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
