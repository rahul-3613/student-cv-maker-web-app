import { useCV } from '@/contexts/CVContext';
import { ModernTemplate } from './templates/ModernTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { AcademicTemplate } from './templates/AcademicTemplate';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download, ZoomIn, ZoomOut } from 'lucide-react';
import { useState, useRef } from 'react';
import { TemplateType } from '@/types/cv';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function CVPreview() {
  const { cvData, selectedTemplate, setSelectedTemplate } = useCV();
  const [zoom, setZoom] = useState(0.7);
  const [isExporting, setIsExporting] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!cvRef.current) return;
    setIsExporting(true);

    try {
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      const fileName = cvData.personalInfo.fullName 
        ? `${cvData.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`
        : 'My_CV.pdf';
      
      pdf.save(fileName);
    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={cvData} />;
      case 'minimal':
        return <MinimalTemplate data={cvData} />;
      case 'academic':
        return <AcademicTemplate data={cvData} />;
      default:
        return <ModernTemplate data={cvData} />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-secondary/30">
      {/* Controls */}
      <div className="flex-shrink-0 p-4 border-b border-border bg-card flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Select
            value={selectedTemplate}
            onValueChange={(v: TemplateType) => setSelectedTemplate(v)}
          >
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom((z) => Math.max(0.3, z - 0.1))}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom((z) => Math.min(1.5, z + 0.1))}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        <Button onClick={handleExportPDF} disabled={isExporting}>
          <Download className="w-4 h-4 mr-2" />
          {isExporting ? 'Exporting...' : 'Download PDF'}
        </Button>
      </div>

      {/* Preview area */}
      <div className="flex-1 overflow-auto p-8 flex justify-center">
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
          }}
        >
          <div
            ref={cvRef}
            className="w-[210mm] min-h-[297mm] bg-white shadow-large"
            style={{
              aspectRatio: '210/297',
            }}
          >
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
}
