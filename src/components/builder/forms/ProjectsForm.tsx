import { useCV } from '@/contexts/CVContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { Project } from '@/types/cv';

export function ProjectsForm() {
  const { cvData, setCVData } = useCV();

  const addProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      technologies: '',
      link: '',
      startDate: '',
      endDate: '',
    };
    setCVData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setCVData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, ...updates } : proj
      ),
    }));
  };

  const removeProject = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Projects</h3>
          <p className="text-sm text-muted-foreground">Showcase your best work and personal projects.</p>
        </div>
        <Button onClick={addProject} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>

      {cvData.projects.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border rounded-lg">
          <p className="text-muted-foreground mb-4">No projects added yet</p>
          <Button onClick={addProject} variant="outline">
            <Plus className="w-4 h-4 mr-2" /> Add Project
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {cvData.projects.map((project, index) => (
            <div
              key={project.id}
              className="p-4 border border-border rounded-lg space-y-4 bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Project {index + 1}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(project.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label>Project Title *</Label>
                  <Input
                    placeholder="E-commerce Website"
                    value={project.title}
                    onChange={(e) =>
                      updateProject(project.id, { title: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Description *</Label>
                  <Textarea
                    placeholder="Brief description of what you built and its key features..."
                    rows={3}
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.id, { description: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Technologies Used</Label>
                  <Input
                    placeholder="React, Node.js, MongoDB"
                    value={project.technologies}
                    onChange={(e) =>
                      updateProject(project.id, { technologies: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Project Link</Label>
                  <Input
                    placeholder="https://github.com/username/project"
                    value={project.link}
                    onChange={(e) =>
                      updateProject(project.id, { link: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={project.startDate}
                      onChange={(e) =>
                        updateProject(project.id, { startDate: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={project.endDate}
                      onChange={(e) =>
                        updateProject(project.id, { endDate: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
