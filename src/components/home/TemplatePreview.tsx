import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean lines with accent sidebar. Perfect for tech and creative roles.',
    preview: (
      <div className="p-4 space-y-3">
        <div className="flex gap-3">
          <div className="w-1/3 bg-primary/20 rounded p-3 space-y-2">
            <div className="w-10 h-10 rounded-full bg-primary/40 mx-auto" />
            <div className="h-2 w-full bg-primary/30 rounded" />
            <div className="h-2 w-3/4 bg-primary/30 rounded mx-auto" />
            <div className="h-1 w-full bg-primary/20 rounded mt-4" />
            <div className="h-1 w-full bg-primary/20 rounded" />
          </div>
          <div className="w-2/3 space-y-2">
            <div className="h-3 w-1/2 bg-foreground/20 rounded" />
            <div className="h-2 w-full bg-muted rounded" />
            <div className="h-2 w-5/6 bg-muted rounded" />
            <div className="h-2 w-1/3 bg-primary/30 rounded mt-3" />
            <div className="h-1 w-full bg-muted rounded" />
            <div className="h-1 w-4/5 bg-muted rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Elegant simplicity with maximum white space. Ideal for traditional industries.',
    preview: (
      <div className="p-4 space-y-3">
        <div className="text-center border-b border-border pb-3">
          <div className="h-3 w-32 bg-foreground/30 rounded mx-auto" />
          <div className="h-2 w-48 bg-muted-foreground/30 rounded mx-auto mt-2" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-20 bg-foreground/20 rounded" />
          <div className="h-1 w-full bg-muted rounded" />
          <div className="h-1 w-5/6 bg-muted rounded" />
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-2 w-16 bg-foreground/20 rounded" />
          <div className="h-1 w-full bg-muted rounded" />
          <div className="h-1 w-4/5 bg-muted rounded" />
        </div>
      </div>
    ),
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Structured formal layout. Best for university applications and research.',
    preview: (
      <div className="p-4 space-y-3">
        <div className="border-b-2 border-primary pb-2">
          <div className="h-4 w-40 bg-foreground/30 rounded" />
          <div className="flex gap-4 mt-2">
            <div className="h-1 w-20 bg-muted-foreground/30 rounded" />
            <div className="h-1 w-24 bg-muted-foreground/30 rounded" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-24 bg-primary/40 rounded font-bold" />
          <div className="h-1 w-full bg-muted rounded" />
          <div className="h-1 w-full bg-muted rounded" />
          <div className="h-1 w-3/4 bg-muted rounded" />
        </div>
        <div className="space-y-2 pt-1">
          <div className="h-2 w-20 bg-primary/40 rounded" />
          <div className="h-1 w-full bg-muted rounded" />
          <div className="h-1 w-5/6 bg-muted rounded" />
        </div>
      </div>
    ),
  },
];

export function TemplatePreview() {
  return (
    <section id="templates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Templates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of ATS-friendly templates designed to make 
            your CV stand out while remaining professional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[3/4] bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-4 bg-card rounded-lg shadow-soft overflow-hidden">
                  {template.preview}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {template.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {template.description}
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={`/builder?template=${template.id}`}>
                    Use This Template
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
