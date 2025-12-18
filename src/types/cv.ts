export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  profileImage: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  cgpa: string;
  cgpaScale: '4.0' | '5.0' | '10.0' | 'percentage';
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'language';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  link: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'native' | 'fluent' | 'advanced' | 'intermediate' | 'basic';
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  languages: Language[];
  isFresher: boolean;
}

export type TemplateType = 'modern' | 'minimal' | 'academic';

export const defaultCVData: CVData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    portfolio: '',
    summary: '',
    profileImage: '',
  },
  education: [],
  skills: [],
  projects: [],
  experience: [],
  certifications: [],
  languages: [],
  isFresher: true,
};
