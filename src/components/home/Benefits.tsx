import { FileCheck, Download, GraduationCap, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: FileCheck,
    title: 'ATS-Friendly',
    description: 'Our templates are optimized to pass through Applicant Tracking Systems used by top companies.',
  },
  {
    icon: GraduationCap,
    title: 'Student Focused',
    description: 'Designed specifically for university students with CGPA support and fresher-friendly sections.',
  },
  {
    icon: Download,
    title: 'Free PDF Export',
    description: 'Download your CV as a professional PDF with no watermarks, completely free.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Build your CV on any device - works perfectly on desktop, tablet, and mobile.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our CV Builder?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with university students in mind, our CV builder helps you create 
            professional resumes that get noticed by employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
