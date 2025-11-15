import { useState } from 'react'
import '@/css/Gallery.css'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Add your image paths here - place images in public/images folder
  const images = [
    { src: '/images/img1.jpg', alt: 'Image 1', category: 'personal' },
    { src: '/images/img2.jpg', alt: 'Image 2', category: 'personal' },
    { src: '/images/img3.jpg', alt: 'Image 3', category: 'work' },
    { src: '/images/img4.jpg', alt: 'Image 4', category: 'work' },
    { src: '/images/img5.jpg', alt: 'Image 5', category: 'projects' },
    { src: '/images/img6.jpg', alt: 'Image 6', category: 'projects' },
  ]

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-category">{image.category}</span>
                    <p className="gallery-title">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div className="gallery-modal" onClick={closeModal}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-modal-close" onClick={closeModal}>
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery-modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

