import { CVData } from '@/types/cv';

interface TemplateProps {
  data: CVData;
}

export function MinimalTemplate({ data }: TemplateProps) {
  const { personalInfo, education, skills, projects, experience, certifications, languages, isFresher } = data;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="p-10 h-full text-[11px] leading-relaxed bg-[#18181b] text-gray-100" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="text-center border-b border-zinc-700 pb-6 mb-8">
        <h1 className="text-3xl font-light tracking-wide text-white mb-2">
          {personalInfo.fullName || 'Rahul Singha'}
        </h1>
        <p className="text-zinc-400 text-sm mb-4">University Student • Computer Science & Engineering</p>
        <div className="flex items-center justify-center gap-6 text-zinc-400 flex-wrap">
          {(personalInfo.email || !personalInfo.fullName) && (
            <span>{personalInfo.email || 'rahul.singha@email.com'}</span>
          )}
          {(personalInfo.phone || !personalInfo.fullName) && (
            <span className="text-zinc-600">|</span>
          )}
          {(personalInfo.phone || !personalInfo.fullName) && (
            <span>{personalInfo.phone || '+880 1XXX-XXXXXX'}</span>
          )}
          {(personalInfo.address || !personalInfo.fullName) && (
            <span className="text-zinc-600">|</span>
          )}
          {(personalInfo.address || !personalInfo.fullName) && (
            <span>{personalInfo.address || 'Chittagong, Bangladesh'}</span>
          )}
        </div>
        <div className="flex items-center justify-center gap-6 text-zinc-500 mt-2 flex-wrap">
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.linkedin && personalInfo.portfolio && <span className="text-zinc-600">|</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <p className="text-zinc-300 text-center max-w-2xl mx-auto leading-relaxed">
          {personalInfo.summary || 'Dedicated Computer Science student with strong programming fundamentals and passion for software development. Eager to contribute to innovative projects and grow professionally in the tech industry.'}
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
          Education
        </h2>
        {(education.length > 0 || !personalInfo.fullName) ? (
          education.length > 0 ? education.map(edu => (
            <div key={edu.id} className="mb-4 text-center">
              <div className="flex justify-center items-baseline gap-4">
                <span className="font-medium text-white">{edu.institution}</span>
                <span className="text-zinc-500 text-[10px]">
                  {formatDate(edu.startDate)} — {edu.current ? 'Present' : formatDate(edu.endDate)}
                </span>
              </div>
              <p className="text-zinc-400">
                {edu.degree} in {edu.field}
                {edu.cgpa && <span className="text-zinc-500"> • CGPA: {edu.cgpa}/{edu.cgpaScale === 'percentage' ? '100%' : edu.cgpaScale}</span>}
              </p>
            </div>
          )) : (
            <div className="mb-4 text-center">
              <div className="flex justify-center items-baseline gap-4">
                <span className="font-medium text-white">Premier University</span>
                <span className="text-zinc-500 text-[10px]">2021 — Present</span>
              </div>
              <p className="text-zinc-400">
                BSc in Computer Science & Engineering
                <span className="text-zinc-500"> • CGPA: 3.66/4.0</span>
              </p>
            </div>
          )
        ) : null}
      </div>

      {/* Experience */}
      {!isFresher && experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
            Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-center items-baseline gap-4">
                <span className="font-medium text-white">{exp.role}</span>
                <span className="text-zinc-500 text-[10px]">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <p className="text-zinc-400 text-center">{exp.company}{exp.location && `, ${exp.location}`}</p>
              {exp.responsibilities.filter(r => r).length > 0 && (
                <ul className="mt-2 ml-8 list-disc text-zinc-400 text-left max-w-lg mx-auto">
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
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
          Projects
        </h2>
        {(projects.length > 0 || !personalInfo.fullName) ? (
          projects.length > 0 ? projects.map(project => (
            <div key={project.id} className="mb-4">
              <div className="flex justify-center items-baseline gap-4">
                <span className="font-medium text-white">{project.title}</span>
                {(project.startDate || project.endDate) && (
                  <span className="text-zinc-500 text-[10px]">
                    {formatDate(project.startDate)} — {formatDate(project.endDate)}
                  </span>
                )}
              </div>
              <p className="text-zinc-400 text-center mt-1">{project.description}</p>
              {project.technologies && (
                <p className="text-zinc-500 text-[10px] text-center mt-1">
                  {project.technologies}
                </p>
              )}
            </div>
          )) : (
            <>
              <div className="mb-4">
                <div className="flex justify-center items-baseline gap-4">
                  <span className="font-medium text-white">Personal Portfolio Website</span>
                </div>
                <p className="text-zinc-400 text-center mt-1">Responsive portfolio showcasing projects and skills with modern design.</p>
                <p className="text-zinc-500 text-[10px] text-center mt-1">HTML, CSS, JavaScript</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-center items-baseline gap-4">
                  <span className="font-medium text-white">Student Management System</span>
                </div>
                <p className="text-zinc-400 text-center mt-1">Console-based application for managing student records.</p>
                <p className="text-zinc-500 text-[10px] text-center mt-1">C++, File Handling</p>
              </div>
            </>
          )
        ) : null}
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {(skills.length > 0 || !personalInfo.fullName) ? (
            skills.length > 0 ? skills.map(skill => (
              <span key={skill.id} className="text-zinc-300 px-3 py-1 border border-zinc-700 rounded-full text-[10px]">
                {skill.name}
              </span>
            )) : ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'Problem Solving', 'Team Work'].map((skill, i) => (
              <span key={i} className="text-zinc-300 px-3 py-1 border border-zinc-700 rounded-full text-[10px]">
                {skill}
              </span>
            ))
          ) : null}
        </div>
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
            Certifications
          </h2>
          {certifications.map(cert => (
            <div key={cert.id} className="mb-2 text-center">
              <span className="font-medium text-white">{cert.name}</span>
              <span className="text-zinc-500"> — {cert.issuer}</span>
              {cert.date && <span className="text-zinc-600 text-[10px]"> ({formatDate(cert.date)})</span>}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {(languages.length > 0 || !personalInfo.fullName) ? (
            languages.length > 0 ? languages.map(lang => (
              <span key={lang.id} className="text-zinc-300">
                {lang.name} <span className="text-zinc-500 capitalize">({lang.proficiency})</span>
              </span>
            )) : (
              <>
                <span className="text-zinc-300">English <span className="text-zinc-500">(Fluent)</span></span>
                <span className="text-zinc-300">Bangla <span className="text-zinc-500">(Native)</span></span>
              </>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
