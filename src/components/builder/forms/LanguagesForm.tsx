import { useCV } from '@/contexts/CVContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { Language } from '@/types/cv';

export function LanguagesForm() {
  const { cvData, setCVData } = useCV();

  const addLanguage = () => {
    const newLanguage: Language = {
      id: crypto.randomUUID(),
      name: '',
      proficiency: 'intermediate',
    };
    setCVData((prev) => ({
      ...prev,
      languages: [...prev.languages, newLanguage],
    }));
  };

  const updateLanguage = (id: string, updates: Partial<Language>) => {
    setCVData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang) =>
        lang.id === id ? { ...lang, ...updates } : lang
      ),
    }));
  };

  const removeLanguage = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      languages: prev.languages.filter((lang) => lang.id !== id),
    }));
  };

  const proficiencyLabels = {
    native: 'Native',
    fluent: 'Fluent',
    advanced: 'Advanced',
    intermediate: 'Intermediate',
    basic: 'Basic',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Languages</h3>
          <p className="text-sm text-muted-foreground">Add languages you speak.</p>
        </div>
        <Button onClick={addLanguage} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>

      {cvData.languages.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border rounded-lg">
          <p className="text-muted-foreground mb-4">No languages added yet</p>
          <Button onClick={addLanguage} variant="outline">
            <Plus className="w-4 h-4 mr-2" /> Add Language
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {cvData.languages.map((lang, index) => (
            <div
              key={lang.id}
              className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card"
            >
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Input
                    placeholder="English"
                    value={lang.name}
                    onChange={(e) =>
                      updateLanguage(lang.id, { name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Proficiency</Label>
                  <Select
                    value={lang.proficiency}
                    onValueChange={(value: Language['proficiency']) =>
                      updateLanguage(lang.id, { proficiency: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(proficiencyLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeLanguage(lang.id)}
                className="text-destructive hover:text-destructive flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Quick add common languages */}
      <div className="pt-4 border-t border-border">
        <Label className="text-sm text-muted-foreground mb-2 block">Quick Add</Label>
        <div className="flex flex-wrap gap-2">
          {['English', 'Bengali', 'Hindi', 'Arabic', 'Spanish', 'French', 'German', 'Chinese'].map(
            (langName) => {
              const exists = cvData.languages.some(
                (l) => l.name.toLowerCase() === langName.toLowerCase()
              );
              if (exists) return null;
              return (
                <button
                  key={langName}
                  onClick={() => {
                    const newLang: Language = {
                      id: crypto.randomUUID(),
                      name: langName,
                      proficiency: langName === 'Bengali' ? 'native' : 'intermediate',
                    };
                    setCVData((prev) => ({
                      ...prev,
                      languages: [...prev.languages, newLang],
                    }));
                  }}
                  className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  + {langName}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
