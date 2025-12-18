import { CVData } from '@/types/cv';

interface TemplateProps {
  data: CVData;
}   
<a href="https://www.flaticon.com/free-icons/curriculum-vitae" title="curriculum vitae icons">Curriculum vitae icons created by kerismaker - Flaticon</a>

export function AcademicTemplate({ data }: TemplateProps) {
  const { personalInfo, education, skills, projects, experience, certifications, languages, isFresher } = data;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="p-8 h-full text-[11px] leading-relaxed bg-[#1a1a2e] text-gray-100" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
      {/* Header */}
      <div className="border-b-2 border-amber-500/60 pb-5 mb-6">
        <h1 className="text-2xl font-bold text-amber-400 tracking-wide">
          {personalInfo.fullName || 'Rahul Singha'}
        </h1>
        <p className="text-gray-400 mt-1 italic">Computer Science & Engineering Student</p>
        <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1 text-gray-400">
          <div className="flex gap-2">
            <span className="text-amber-500/80 font-medium">Email:</span>
            <span>{personalInfo.email || 'rahul.singha@email.com'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-amber-500/80 font-medium">Phone:</span>
            <span>{personalInfo.phone || '+880 1XXX-XXXXXX'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-amber-500/80 font-medium">Address:</span>
            <span>{personalInfo.address || 'Chittagong, Bangladesh'}</span>
          </div>
          {personalInfo.linkedin && (
            <div className="flex gap-2">
              <span className="text-amber-500/80 font-medium">LinkedIn:</span>
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.portfolio && (
            <div className="flex gap-2">
              <span className="text-amber-500/80 font-medium">Portfolio:</span>
              <span>{personalInfo.portfolio}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective / Summary */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          Career Objective
        </h2>
        <p className="text-gray-300 text-justify leading-relaxed pl-4 border-l-2 border-amber-500/30">
          {personalInfo.summary || 'Aspiring software engineer with a strong academic foundation in Computer Science. Committed to continuous learning and applying theoretical knowledge to solve real-world problems. Seeking opportunities to contribute to innovative projects while developing professional expertise.'}
        </p>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          Education
        </h2>
        <table className="w-full">
          <tbody>
            {(education.length > 0 || !personalInfo.fullName) ? (
              education.length > 0 ? education.map(edu => (
                <tr key={edu.id} className="align-top">
                  <td className="w-28 text-amber-500/70 pr-4 py-2 text-[10px] font-medium">
                    {formatDate(edu.startDate)} —<br />{edu.current ? 'Present' : formatDate(edu.endDate)}
                  </td>
                  <td className="py-2 border-l-2 border-amber-500/20 pl-4">
                    <div className="font-semibold text-white">{edu.degree} in {edu.field}</div>
                    <div className="text-amber-400/80">{edu.institution}</div>
                    {edu.cgpa && (
                      <div className="text-gray-400 mt-1">
                        CGPA: <span className="text-amber-400 font-semibold">{edu.cgpa}</span> / {edu.cgpaScale === 'percentage' ? '100%' : edu.cgpaScale}
                      </div>
                    )}
                  </td>
                </tr>
              )) : (
                <tr className="align-top">
                  <td className="w-28 text-amber-500/70 pr-4 py-2 text-[10px] font-medium">
                    2021 —<br />Present
                  </td>
                  <td className="py-2 border-l-2 border-amber-500/20 pl-4">
                    <div className="font-semibold text-white">BSc in Computer Science & Engineering</div>
                    <div className="text-amber-400/80">Premier University</div>
                    <div className="text-gray-400 mt-1">
                      CGPA: <span className="text-amber-400 font-semibold">3.66</span> / 4.0
                    </div>
                  </td>
                </tr>
              )
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Experience */}
      {!isFresher && experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Professional Experience
          </h2>
          <table className="w-full">
            <tbody>
              {experience.map(exp => (
                <tr key={exp.id} className="align-top">
                  <td className="w-28 text-amber-500/70 pr-4 py-2 text-[10px] font-medium">
                    {formatDate(exp.startDate)} —<br />{exp.current ? 'Present' : formatDate(exp.endDate)}
                  </td>
                  <td className="py-2 border-l-2 border-amber-500/20 pl-4">
                    <div className="font-semibold text-white">{exp.role}</div>
                    <div className="text-amber-400/80">{exp.company}{exp.location && `, ${exp.location}`}</div>
                    {exp.responsibilities.filter(r => r).length > 0 && (
                      <ul className="mt-2 ml-4 list-disc text-gray-400">
                        {exp.responsibilities.filter(r => r).map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Academic Projects */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          Academic Projects
        </h2>
        <table className="w-full">
          <tbody>
            {(projects.length > 0 || !personalInfo.fullName) ? (
              projects.length > 0 ? projects.map(project => (
                <tr key={project.id} className="align-top">
                  <td className="w-28 text-amber-500/70 pr-4 py-2 text-[10px] font-medium">
                    {(project.startDate || project.endDate) && (
                      <>
                        {formatDate(project.startDate)}<br />{formatDate(project.endDate)}
                      </>
                    )}
                  </td>
                  <td className="py-2 border-l-2 border-amber-500/20 pl-4">
                    <div className="font-semibold text-white">{project.title}</div>
                    <div className="text-gray-400 mt-1">{project.description}</div>
                    {project.technologies && (
                      <div className="text-amber-500/70 text-[10px] mt-1">
                        <span className="font-medium">Technologies:</span> {project.technologies}
                      </div>
                    )}
                  </td>
                </tr>
              )) : (
                <>
                  <tr className="align-top">
                    <td className="w-28 text-amber-500/70 pr-4 py-2 text-[10px] font-medium">
                      2024
                    </td>
                    <td className="py-2 border-l-2 border-amber-500/20 pl-4">
                      <div className="font-semibold text-white">Personal Portfolio Website</div>
                      <div className="text-gray-400 mt-1">Designed and developed a responsive personal portfolio website showcasing academic projects, skills, and achievements.</div>
                      <div className="text-amber-500/70 text-[10px] mt-1">
                        <span className="font-medium">Technologies:</span> HTML, CSS, JavaScript
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="w-28 text-amber-500/70 pr-4 py-2 text-[10px] font-medium">
                      2023
                    </td>
                    <td className="py-2 border-l-2 border-amber-500/20 pl-4">
                      <div className="font-semibold text-white">Student Management System</div>
                      <div className="text-gray-400 mt-1">Developed a console-based student management system with features for adding, updating, and managing student records.</div>
                      <div className="text-amber-500/70 text-[10px] mt-1">
                        <span className="font-medium">Technologies:</span> C++, File Handling
                      </div>
                    </td>
                  </tr>
                </>
              )
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Technical Skills */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          Technical Competencies
        </h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 pl-4 border-l-2 border-amber-500/20">
          <div>
            <span className="font-medium text-amber-400/80">Programming Languages: </span>
            <span className="text-gray-400">
              {skills.filter(s => s.category === 'technical').length > 0 
                ? skills.filter(s => s.category === 'technical').map(s => s.name).join(', ')
                : 'C, C++, JavaScript'}
            </span>
          </div>
          <div>
            <span className="font-medium text-amber-400/80">Web Technologies: </span>
            <span className="text-gray-400">
              {skills.filter(s => s.category === 'language').length > 0 
                ? skills.filter(s => s.category === 'language').map(s => s.name).join(', ')
                : 'HTML, CSS'}
            </span>
          </div>
          {skills.filter(s => s.category === 'soft').length > 0 && (
            <div className="col-span-2">
              <span className="font-medium text-amber-400/80">Soft Skills: </span>
              <span className="text-gray-400">
                {skills.filter(s => s.category === 'soft').map(s => s.name).join(', ')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Certifications & Awards
          </h2>
          <ul className="list-disc ml-8 text-gray-400">
            {certifications.map(cert => (
              <li key={cert.id}>
                <span className="font-medium text-white">{cert.name}</span> — {cert.issuer}
                {cert.date && <span className="text-amber-500/70"> ({formatDate(cert.date)})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages */}
      <div>
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          Languages
        </h2>
        <div className="text-gray-400 pl-4 border-l-2 border-amber-500/20">
          {(languages.length > 0 || !personalInfo.fullName) ? (
            languages.length > 0 ? languages.map(lang => (
              <span key={lang.id} className="mr-6">
                <span className="font-medium text-white">{lang.name}</span> — <span className="capitalize">{lang.proficiency}</span>
              </span>
            )) : (
              <>
                <span className="mr-6"><span className="font-medium text-white">English</span> — Fluent</span>
                <span className="mr-6"><span className="font-medium text-white">Bangla</span> — Native</span>
              </>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
