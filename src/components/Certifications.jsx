import '@/css/Certifications.css'

export default function Certifications() {
  const certifications = [
    { title: 'Programming in Java', organization: 'NPTEL' },
    { title: 'Programming in Modern C++', organization: 'NPTEL' },
    { title: 'Fuzzy Sets, Logic and Systems & Applications', organization: 'NPTEL' },
    { title: 'C, C++, Python with Data Science & Java', organization: 'Code Galatta' }
  ]

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <h3>{cert.title}</h3>
              <p className="certification-org">{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

