import '@/css/Education.css'

export default function Education() {
  const educationData = [
    {
      institution: 'SSN College of Engineering',
      period: '2022 - 2026',
      degree: 'B. Tech. Information Technology',
      grade: 'CGPA: 7.83 (upto 6 semester)'
    },
    {
      institution: 'DAV Senior Secondary School',
      period: '2008 - 2022',
      degree: '12th - 96.2% (Computer Science)',
      grade: '10th - 90.4%'
    }
  ]

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.institution}</h3>
              <p className="education-period">{edu.period}</p>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

