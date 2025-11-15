import '@/css/Skills.css'

export default function Skills() {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'Dart']
    },
    {
      category: 'Backends & Frameworks',
      skills: ['Flask', 'Express.js', 'Node.js', 'SpringBoot']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Flutter', 'React Native']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Areas of Interest',
      skills: [
        'Full Stack Web Development',
        'Machine Learning',
        'Deep Learning',
        'Problem Solving',
        'Data Structures and Algorithms'
      ]
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

