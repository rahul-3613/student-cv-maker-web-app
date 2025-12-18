import { useState } from 'react';
import { useCV } from '@/contexts/CVContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, X } from 'lucide-react';
import { Skill } from '@/types/cv';
import { cn } from '@/lib/utils';

export function SkillsForm() {
  const { cvData, setCVData } = useCV();
  const [newSkill, setNewSkill] = useState('');
  const [skillCategory, setSkillCategory] = useState<Skill['category']>('technical');

  const addSkill = () => {
    if (!newSkill.trim()) return;
    const skill: Skill = {
      id: crypto.randomUUID(),
      name: newSkill.trim(),
      category: skillCategory,
    };
    setCVData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
    setNewSkill('');
  };

  const removeSkill = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  const groupedSkills = {
    technical: cvData.skills.filter((s) => s.category === 'technical'),
    soft: cvData.skills.filter((s) => s.category === 'soft'),
    language: cvData.skills.filter((s) => s.category === 'language'),
  };

  const categoryLabels = {
    technical: 'Technical Skills',
    soft: 'Soft Skills',
    language: 'Language Skills',
  };

  const categoryColors = {
    technical: 'bg-primary/10 text-primary border-primary/20',
    soft: 'bg-accent/10 text-accent border-accent/20',
    language: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Skills</h3>
        <p className="text-sm text-muted-foreground">Add your technical and soft skills.</p>
      </div>

      {/* Add skill form */}
      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            placeholder="Enter a skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          />
        </div>
        <Select value={skillCategory} onValueChange={(v: Skill['category']) => setSkillCategory(v)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technical">Technical</SelectItem>
            <SelectItem value="soft">Soft</SelectItem>
            <SelectItem value="language">Language</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={addSkill} size="icon">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Skills display */}
      {cvData.skills.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border rounded-lg">
          <p className="text-muted-foreground">No skills added yet. Start adding your skills above.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(groupedSkills).map(([category, skills]) => {
            if (skills.length === 0) return null;
            return (
              <div key={category} className="space-y-2">
                <Label className="text-sm text-muted-foreground">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className={cn(
                        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm border',
                        categoryColors[skill.category]
                      )}
                    >
                      {skill.name}
                      <button
                        onClick={() => removeSkill(skill.id)}
                        className="ml-1 hover:opacity-70 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Suggested skills */}
      <div className="pt-4 border-t border-border">
        <Label className="text-sm text-muted-foreground mb-2 block">Quick Add (Click to add)</Label>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git', 'Communication', 'Teamwork', 'Problem Solving'].map(
            (skill) => {
              const exists = cvData.skills.some((s) => s.name.toLowerCase() === skill.toLowerCase());
              if (exists) return null;
              return (
                <button
                  key={skill}
                  onClick={() => {
                    setNewSkill(skill);
                    const isLang = ['Communication', 'Teamwork', 'Problem Solving'].includes(skill);
                    setSkillCategory(isLang ? 'soft' : 'technical');
                  }}
                  className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  + {skill}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
