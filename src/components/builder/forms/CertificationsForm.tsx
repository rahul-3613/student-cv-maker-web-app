import { useCV } from '@/contexts/CVContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { Certification } from '@/types/cv';

export function CertificationsForm() {
  const { cvData, setCVData } = useCV();

  const addCertification = () => {
    const newCertification: Certification = {
      id: crypto.randomUUID(),
      name: '',
      issuer: '',
      date: '',
      link: '',
    };
    setCVData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCertification],
    }));
  };

  const updateCertification = (id: string, updates: Partial<Certification>) => {
    setCVData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert) =>
        cert.id === id ? { ...cert, ...updates } : cert
      ),
    }));
  };

  const removeCertification = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((cert) => cert.id !== id),
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Certifications</h3>
          <p className="text-sm text-muted-foreground">Add your certificates and achievements.</p>
        </div>
        <Button onClick={addCertification} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>

      {cvData.certifications.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border rounded-lg">
          <p className="text-muted-foreground mb-4">No certifications added yet</p>
          <Button onClick={addCertification} variant="outline">
            <Plus className="w-4 h-4 mr-2" /> Add Certification
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {cvData.certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="p-4 border border-border rounded-lg space-y-4 bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Certification {index + 1}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCertification(cert.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label>Certification Name *</Label>
                  <Input
                    placeholder="AWS Solutions Architect"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(cert.id, { name: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Issuing Organization *</Label>
                    <Input
                      placeholder="Amazon Web Services"
                      value={cert.issuer}
                      onChange={(e) =>
                        updateCertification(cert.id, { issuer: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Date Obtained</Label>
                    <Input
                      type="month"
                      value={cert.date}
                      onChange={(e) =>
                        updateCertification(cert.id, { date: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Certificate Link (Optional)</Label>
                  <Input
                    placeholder="https://certificate-url.com"
                    value={cert.link}
                    onChange={(e) =>
                      updateCertification(cert.id, { link: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
