# Images Directory

⚠️ **IMPORTANT**: HEIC format is NOT supported by web browsers. You need to convert HEIC images to JPG or PNG format.

## Converting HEIC to JPG/PNG

### Option 1: Online Converters (Easiest)
- [CloudConvert](https://cloudconvert.com/heic-to-jpg) - Free online converter
- [HEICtoJPG](https://heictojpg.com/) - Simple drag & drop
- [iLoveIMG](https://www.iloveimg.com/convert-to-jpg/heic-to-jpg) - Batch conversion

### Option 2: Windows (Built-in)
1. Open HEIC images in Photos app
2. Click "Edit" → "Save a copy"
3. Choose JPG format

### Option 3: macOS (Terminal)
```bash
# Install ImageMagick first: brew install imagemagick
convert input.heic output.jpg
```

### Option 4: Quick Python Script
If you have many images, I can create a conversion script for you.

---

Place your **converted** images in the following structure:

## File Structure

```
public/
  images/
    profile.jpg          # Your profile picture for Hero section (recommended: 400x400px, square)
    about/
      img1.jpg          # First image for About section
      img2.jpg          # Second image for About section
    img1.jpg            # Images for Gallery section
    img2.jpg
    img3.jpg
    img4.jpg
    img5.jpg
    img6.jpg
    ...                 # Add more images as needed
```

## Image Recommendations

- **Format**: JPG or PNG only (HEIC will NOT work in browsers)
- **Profile Picture**: Square format, 400x400px minimum, JPG recommended
- **Gallery Images**: Any size, JPG/PNG, landscape or portrait
- **About Images**: Recommended 600x400px or larger, JPG/PNG
- **File Size**: Keep images under 1MB for faster loading (compress if needed)

## How to Update Images

1. **Profile Picture**: Replace `profile.jpg` in `public/images/`
2. **About Images**: Add/replace images in `public/images/about/`
3. **Gallery Images**: Add images to `public/images/` and update the `images` array in `src/components/Gallery.jsx`

## Customization

Edit `src/components/Gallery.jsx` to:
- Change image paths
- Add/remove images
- Modify categories
- Update alt text

