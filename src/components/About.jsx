import '@/css/About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {/* About Images - Add your images to public/images/about/ */}
          <div className="about-images">
            <div className="about-image-wrapper">
              <img
                src="/images/about/img1.jpg"
                alt="About me"
                className="about-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="about-image-wrapper">
              <img
                src="/images/about/img2.jpg"
                alt="About me"
                className="about-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
          <p className="about-text">
            I'm a passionate Full Stack Developer currently pursuing B.Tech in Information Technology 
            at SSN College of Engineering. I have hands-on experience in building 
            scalable web applications and working with modern technologies like React, SpringBoot, 
            and various databases.
          </p>
          <p className="about-text">
            My interests span across Full Stack Web Development, Machine Learning, Deep Learning, 
            and Problem Solving. I enjoy tackling complex challenges and creating innovative solutions 
            that make a difference.
          </p>
          <div className="languages">
            <h3>Languages</h3>
            <div className="language-list">
              <span className="language-tag">English (Professional Working Proficiency)</span>
              <span className="language-tag">Tamil (Native Proficiency)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

