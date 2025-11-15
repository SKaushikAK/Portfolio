import '@/css/Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer - EMV Card Management System',
      company: 'CR2 Premier Digital Banking Company',
      period: 'Dec 2024 - Feb 2025',
      role: 'Intern',
      description: 'Built a full-stack smart card management system using React.js (Vite), SpringBoot, and PostgreSQL with a normalized schema, RESTful APIs, real-time search and inline editing, dynamic batch filters, and responsive UI for managing EMV card batches.'
    },
    {
      title: 'Front End Developer - Resource Management System',
      company: 'Ahamsys India Pvt Ltd',
      period: 'May 2025 - Jul 2025',
      role: 'Intern',
      description: 'Built a comprehensive Resource Management Dashboard using React and JWT authentication, enabling efficient project, task, and workforce management for organizations. Implemented features for project tracking, task assignment, employee workload monitoring, and secure user access control.'
    }
  ]

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-role">{exp.role}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

