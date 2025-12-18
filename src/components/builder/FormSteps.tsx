import { useCV } from '@/contexts/CVContext';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { EducationForm } from './forms/EducationForm';
import { SkillsForm } from './forms/SkillsForm';
import { ProjectsForm } from './forms/ProjectsForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { CertificationsForm } from './forms/CertificationsForm';
import { LanguagesForm } from './forms/LanguagesForm';
import { cn } from '@/lib/utils';
import { User, GraduationCap, Wrench, FolderOpen, Briefcase, Award, Globe } from 'lucide-react';

const steps = [
  { id: 0, label: 'Personal', icon: User },
  { id: 1, label: 'Education', icon: GraduationCap },
  { id: 2, label: 'Skills', icon: Wrench },
  { id: 3, label: 'Projects', icon: FolderOpen },
  { id: 4, label: 'Experience', icon: Briefcase },
  { id: 5, label: 'Certifications', icon: Award },
  { id: 6, label: 'Languages', icon: Globe },
];

export function FormSteps() {
  const { currentStep, setCurrentStep, cvData } = useCV();

  return (
    <div className="h-full flex flex-col">
      {/* Step indicators */}
      <div className="flex-shrink-0 p-4 border-b border-border bg-card">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
                  currentStep === step.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form content */}
      <div className="flex-1 overflow-y-auto p-4">
        {currentStep === 0 && <PersonalInfoForm />}
        {currentStep === 1 && <EducationForm />}
        {currentStep === 2 && <SkillsForm />}
        {currentStep === 3 && <ProjectsForm />}
        {currentStep === 4 && <ExperienceForm />}
        {currentStep === 5 && <CertificationsForm />}
        {currentStep === 6 && <LanguagesForm />}
      </div>

      {/* Navigation */}
      <div className="flex-shrink-0 p-4 border-t border-border bg-card flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
