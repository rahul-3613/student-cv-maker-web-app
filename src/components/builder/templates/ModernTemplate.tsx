import { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface TemplateProps {
  data: CVData;
}

export function ModernTemplate({ data }: TemplateProps) {
  const { personalInfo, education, skills, projects, experience, certifications, languages, isFresher } = data;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const technicalSkills = skills.filter(s => s.category === 'technical');
  const softSkills = skills.filter(s => s.category === 'soft');
  const languageSkills = skills.filter(s => s.category === 'language');

  return (
    <div className="flex h-full text-[11px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <div className="w-[75mm] bg-[#0f172a] text-white p-6 space-y-5">
        {/* Profile Header */}
        <div className="text-center pb-4 border-b border-cyan-500/30">
          {personalInfo.profileImage ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.fullName || 'Profile'}
              className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-cyan-400"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-slate-900">
              {personalInfo.fullName?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'RS'}
            </div>
          )}
          <h1 className="text-xl font-bold tracking-tight">
            {personalInfo.fullName || 'Rahul Singha'}
          </h1>
          <p className="text-cyan-400 text-xs mt-1 font-medium">
            University Student | CSE
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Contact</h2>
          {(personalInfo.email || !personalInfo.fullName) && (
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                <Mail className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="break-all text-gray-300">{personalInfo.email || 'rahul.singha@email.com'}</span>
            </div>
          )}
          {(personalInfo.phone || !personalInfo.fullName) && (
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                <Phone className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="text-gray-300">{personalInfo.phone || '+880 1XXX-XXXXXX'}</span>
            </div>
          )}
          {(personalInfo.address || !personalInfo.fullName) && (
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="text-gray-300">{personalInfo.address || 'Chittagong, Bangladesh'}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                <Linkedin className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="break-all text-gray-300">{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.portfolio && (
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                <Globe className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="break-all text-gray-300">{personalInfo.portfolio}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Skills</h2>
          {(technicalSkills.length > 0 || !personalInfo.fullName) && (
            <div>
              <h3 className="text-[10px] font-semibold text-gray-400 mb-2 uppercase">Technical</h3>
              <div className="flex flex-wrap gap-1.5">
                {technicalSkills.length > 0 ? technicalSkills.map(skill => (
                  <span key={skill.id} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-[10px] border border-cyan-500/30">
                    {skill.name}
                  </span>
                )) : ['C', 'C++', 'HTML', 'CSS', 'JavaScript'].map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-[10px] border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {softSkills.length > 0 && (
            <div className="mt-3">
              <h3 className="text-[10px] font-semibold text-gray-400 mb-2 uppercase">Soft Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map(skill => (
                  <span key={skill.id} className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-[10px]">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Languages */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Languages</h2>
          {(languages.length > 0 || !personalInfo.fullName) ? (
            languages.length > 0 ? languages.map(lang => (
              <div key={lang.id} className="flex justify-between items-center">
                <span className="text-gray-300">{lang.name}</span>
                <span className="text-[10px] text-cyan-400 capitalize bg-cyan-500/10 px-2 py-0.5 rounded">{lang.proficiency}</span>
              </div>
            )) : (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">English</span>
                  <span className="text-[10px] text-cyan-400 capitalize bg-cyan-500/10 px-2 py-0.5 rounded">fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Bangla</span>
                  <span className="text-[10px] text-cyan-400 capitalize bg-cyan-500/10 px-2 py-0.5 rounded">native</span>
                </div>
              </>
            )
          ) : null}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#1e293b] text-white p-6 space-y-5">
        {/* Summary */}
        <div>
          <h2 className="text-sm font-bold text-cyan-400 border-b border-cyan-500/30 pb-2 mb-3 uppercase tracking-wider">
            Profile Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {personalInfo.summary || 'Motivated Computer Science student at Premier University with a strong foundation in programming and web development. Passionate about building efficient software solutions and continuously learning new technologies. Seeking opportunities to apply academic knowledge in real-world projects.'}
          </p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-sm font-bold text-cyan-400 border-b border-cyan-500/30 pb-2 mb-3 uppercase tracking-wider">
            Education
          </h2>
          {(education.length > 0 || !personalInfo.fullName) ? (
            education.length > 0 ? education.map(edu => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white">{edu.degree} in {edu.field}</h3>
                    <p className="text-cyan-400/80">{edu.institution}</p>
                  </div>
                  <span className="text-gray-400 text-[10px] bg-slate-700/50 px-2 py-1 rounded">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </span>
                </div>
                {edu.cgpa && (
                  <p className="text-gray-400 mt-1 text-[10px]">
                    CGPA: <span className="text-cyan-400 font-semibold">{edu.cgpa}</span> / {edu.cgpaScale === 'percentage' ? '100%' : edu.cgpaScale}
                  </p>
                )}
              </div>
            )) : (
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white">BSc in Computer Science & Engineering</h3>
                    <p className="text-cyan-400/80">Premier University</p>
                  </div>
                  <span className="text-gray-400 text-[10px] bg-slate-700/50 px-2 py-1 rounded">
                    2021 - Present
                  </span>
                </div>
                <p className="text-gray-400 mt-1 text-[10px]">
                  CGPA: <span className="text-cyan-400 font-semibold">3.66</span> / 4.0
                </p>
              </div>
            )
          ) : null}
        </div>

        {/* Experience */}
        {!isFresher && experience.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-cyan-400 border-b border-cyan-500/30 pb-2 mb-3 uppercase tracking-wider">
              Experience
            </h2>
            {experience.map(exp => (
              <div key={exp.id} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <p className="text-cyan-400/80">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                  </div>
                  <span className="text-gray-400 text-[10px] bg-slate-700/50 px-2 py-1 rounded">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                {exp.responsibilities.filter(r => r).length > 0 && (
                  <ul className="mt-2 ml-4 list-disc text-gray-300 space-y-1">
                    {exp.responsibilities.filter(r => r).map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        <div>
          <h2 className="text-sm font-bold text-cyan-400 border-b border-cyan-500/30 pb-2 mb-3 uppercase tracking-wider">
            Projects
          </h2>
          {(projects.length > 0 || !personalInfo.fullName) ? (
            projects.length > 0 ? projects.map(project => (
              <div key={project.id} className="mb-4 last:mb-0 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  {(project.startDate || project.endDate) && (
                    <span className="text-gray-400 text-[10px]">
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mt-1">{project.description}</p>
                {project.technologies && (
                  <p className="text-cyan-400 text-[10px] mt-2">
                    <span className="text-gray-400">Tech:</span> {project.technologies}
                  </p>
                )}
              </div>
            )) : (
              <>
                <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <h3 className="font-semibold text-white">Personal Portfolio Website</h3>
                  <p className="text-gray-300 mt-1">Responsive portfolio showcasing projects and skills with modern design and animations.</p>
                  <p className="text-cyan-400 text-[10px] mt-2">
                    <span className="text-gray-400">Tech:</span> HTML, CSS, JavaScript
                  </p>
                </div>
                <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <h3 className="font-semibold text-white">Student Management System</h3>
                  <p className="text-gray-300 mt-1">Academic project for managing student records with CRUD operations.</p>
                  <p className="text-cyan-400 text-[10px] mt-2">
                    <span className="text-gray-400">Tech:</span> C++, File Handling
                  </p>
                </div>
              </>
            )
          ) : null}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-cyan-400 border-b border-cyan-500/30 pb-2 mb-3 uppercase tracking-wider">
              Certifications
            </h2>
            {certifications.map(cert => (
              <div key={cert.id} className="mb-2 flex justify-between items-center">
                <div>
                  <span className="font-medium text-white">{cert.name}</span>
                  <span className="text-gray-400"> — {cert.issuer}</span>
                </div>
                {cert.date && <span className="text-gray-400 text-[10px]">{formatDate(cert.date)}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
