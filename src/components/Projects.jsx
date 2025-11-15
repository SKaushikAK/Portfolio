import '@/css/Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'EnableU- Mobile Gaming App',
      technologies: ['React Native', 'JavaScript', 'Expo CLI', 'Supabase'],
      description: 'Designed an interactive mobile app to help children with autism, which included touch-based gameplay, engaging visuals, and immediate feedback for effective learning.'
    },
    {
      title: 'Network Chatbot',
      technologies: ['Python', 'Flask', 'Rasa Platform'],
      description: 'Developed to address common queries that new students have when they first visit college, especially during first-year admissions, making the process smoother for everyone.'
    },
    {
      title: 'Video Anomaly Detection',
      technologies: ['React.js', 'Python-Flask', 'CNN (Swin Transformer)', 'RESTful APIs'],
      description: 'Developed a full-stack web app that leverages Swin Transformer-based ML to classify fight/non-fight scenarios in video footage with 80% accuracy, featuring real-time processing and intuitive result visualization.'
    },
    {
      title: 'Faculty Development and Workshop Management System',
      technologies: ['PostgreSQL', 'Node.js', 'Express.js', 'Chart.js'],
      description: 'Facilitates the organization and management of faculty development programs (FDPs) and workshops, scheduling events, tracking participant registrations, and generating insightful reports and charts, ensuring enhanced user experience.'
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

