import { useCV } from '@/contexts/CVContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Plus, Trash2 } from 'lucide-react';
import { Experience } from '@/types/cv';

export function ExperienceForm() {
  const { cvData, setCVData } = useCV();

  const addExperience = () => {
    const newExperience: Experience = {
      id: crypto.randomUUID(),
      company: '',
      role: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      responsibilities: [''],
    };
    setCVData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const updateResponsibility = (expId: string, index: number, value: string) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id !== expId) return exp;
        const newResponsibilities = [...exp.responsibilities];
        newResponsibilities[index] = value;
        return { ...exp, responsibilities: newResponsibilities };
      }),
    }));
  };

  const addResponsibility = (expId: string) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id !== expId) return exp;
        return { ...exp, responsibilities: [...exp.responsibilities, ''] };
      }),
    }));
  };

  const removeResponsibility = (expId: string, index: number) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id !== expId) return exp;
        return {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, i) => i !== index),
        };
      }),
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Work Experience</h3>
          <p className="text-sm text-muted-foreground">Add your work history and internships.</p>
        </div>
        <Button onClick={addExperience} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>

      {/* Fresher mode toggle */}
      <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
        <div>
          <Label className="text-sm font-medium">Fresher Mode</Label>
          <p className="text-xs text-muted-foreground">Hide experience section on your CV</p>
        </div>
        <Switch
          checked={cvData.isFresher}
          onCheckedChange={(checked) =>
            setCVData((prev) => ({ ...prev, isFresher: checked }))
          }
        />
      </div>

      {cvData.experience.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border rounded-lg">
          <p className="text-muted-foreground mb-4">No experience added yet</p>
          <Button onClick={addExperience} variant="outline">
            <Plus className="w-4 h-4 mr-2" /> Add Experience
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {cvData.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="p-4 border border-border rounded-lg space-y-4 bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Experience {index + 1}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(exp.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Company Name *</Label>
                    <Input
                      placeholder="Google"
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(exp.id, { company: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role/Position *</Label>
                    <Input
                      placeholder="Software Engineer Intern"
                      value={exp.role}
                      onChange={(e) =>
                        updateExperience(exp.id, { role: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    placeholder="Dhaka, Bangladesh"
                    value={exp.location}
                    onChange={(e) =>
                      updateExperience(exp.id, { location: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(exp.id, { startDate: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={exp.endDate}
                      disabled={exp.current}
                      onChange={(e) =>
                        updateExperience(exp.id, { endDate: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`current-exp-${exp.id}`}
                    checked={exp.current}
                    onCheckedChange={(checked) =>
                      updateExperience(exp.id, { current: checked as boolean })
                    }
                  />
                  <Label htmlFor={`current-exp-${exp.id}`} className="text-sm font-normal">
                    Currently working here
                  </Label>
                </div>

                <div className="space-y-2">
                  <Label>Key Responsibilities</Label>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex gap-2">
                      <Input
                        placeholder="Describe what you did..."
                        value={resp}
                        onChange={(e) =>
                          updateResponsibility(exp.id, respIndex, e.target.value)
                        }
                      />
                      {exp.responsibilities.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeResponsibility(exp.id, respIndex)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addResponsibility(exp.id)}
                    className="mt-2"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add Responsibility
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
