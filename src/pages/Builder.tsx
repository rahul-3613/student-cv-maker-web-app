import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CVProvider, useCV } from '@/contexts/CVContext';
import { FormSteps } from '@/components/builder/FormSteps';
import { CVPreview } from '@/components/builder/CVPreview';
import { Button } from '@/components/ui/button';
import { FileText, Home, RotateCcw } from 'lucide-react';
import { TemplateType } from '@/types/cv';

function BuilderContent() {
  const [searchParams] = useSearchParams();
  const { setSelectedTemplate, clearData } = useCV();

  useEffect(() => {
    const template = searchParams.get('template') as TemplateType | null;
    if (template && ['modern', 'minimal', 'academic'].includes(template)) {
      setSelectedTemplate(template);
    }
  }, [searchParams, setSelectedTemplate]);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex-shrink-0 h-14 border-b border-border bg-card flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground hidden sm:inline">CV Builder</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clearData}>
            <RotateCcw className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Form panel */}
        <div className="w-full lg:w-[450px] xl:w-[500px] border-r border-border overflow-hidden flex flex-col">
          <FormSteps />
        </div>

        {/* Preview panel */}
        <div className="flex-1 overflow-hidden hidden lg:block">
          <CVPreview />
        </div>

        {/* Mobile preview toggle - shown on smaller screens */}
        <div className="lg:hidden flex-1 overflow-hidden">
          <CVPreview />
        </div>
      </div>
    </div>
  );
}

const Builder = () => {
  return (
    <CVProvider>
      <BuilderContent />
    </CVProvider>
  );
};

export default Builder;
