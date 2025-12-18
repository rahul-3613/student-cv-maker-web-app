import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CVData, TemplateType, defaultCVData } from '@/types/cv';

interface CVContextType {
  cvData: CVData;
  setCVData: React.Dispatch<React.SetStateAction<CVData>>;
  updatePersonalInfo: (info: Partial<CVData['personalInfo']>) => void;
  selectedTemplate: TemplateType;
  setSelectedTemplate: (template: TemplateType) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  saveToLocalStorage: () => void;
  clearData: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

const STORAGE_KEY = 'cv_builder_data';
const TEMPLATE_KEY = 'cv_builder_template';

export function CVProvider({ children }: { children: ReactNode }) {
  const [cvData, setCVData] = useState<CVData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultCVData;
  });

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(() => {
    const saved = localStorage.getItem(TEMPLATE_KEY);
    return (saved as TemplateType) || 'modern';
  });

  const [currentStep, setCurrentStep] = useState(0);

  const updatePersonalInfo = (info: Partial<CVData['personalInfo']>) => {
    setCVData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
    localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
  };

  const clearData = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TEMPLATE_KEY);
    setCVData(defaultCVData);
    setSelectedTemplate('modern');
    setCurrentStep(0);
  };

  // Auto-save on data change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
  }, [selectedTemplate]);

  return (
    <CVContext.Provider
      value={{
        cvData,
        setCVData,
        updatePersonalInfo,
        selectedTemplate,
        setSelectedTemplate,
        currentStep,
        setCurrentStep,
        saveToLocalStorage,
        clearData,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export function useCV() {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
}
