# Portfolio - Kaushik Ananth Kumar S

A modern, responsive portfolio website built with React and Vite.

## 🚀 Features

- ✨ Modern, clean design with gradient themes
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🖼️ Image gallery with modal viewer
- 🎯 Multiple sections: About, Education, Skills, Experience, Projects, Certifications, Publications
- ⚡ Fast performance with Vite
- 🎭 Component-based architecture

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Vercel** - Hosting platform

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── images/          # Your images (profile, gallery, etc.)
├── src/
│   ├── components/      # React components
│   ├── css/            # Component stylesheets
│   └── App.jsx         # Main app component
├── vercel.json         # Vercel deployment config
└── package.json
```

## 🖼️ Adding Images

1. Convert HEIC images to JPG/PNG (use online converters or `convert-heic.py`)
2. Place images in `public/images/`:
   - `profile.jpg` - Hero section profile picture
   - `about/img1.jpg`, `about/img2.jpg` - About section
   - `img1.jpg`, `img2.jpg`, etc. - Gallery images

See `public/images/README.md` for detailed instructions.

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Customization

- Edit component files in `src/components/` to update content
- Modify styles in `src/css/` for design changes
- Update images in `public/images/`
- All components are modular and easy to customize

## 📄 License

Private - All rights reserved

---

Built with ❤️ by Kaushik Ananth Kumar S
