"""
HEIC to JPG/PNG Converter Script
Converts all HEIC images in a folder to JPG format

Usage:
1. Install Pillow: pip install pillow pillow-heif
2. Run: python convert-heic.py

Or run: pip install pillow pillow-heif && python convert-heic.py
"""

import os
from pathlib import Path

try:
    from PIL import Image
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    print("Installing required packages...")
    import subprocess
    subprocess.check_call(["pip", "install", "pillow", "pillow-heif"])
    from PIL import Image
    from pillow_heif import register_heif_opener
    register_heif_opener()

def convert_heic_to_jpg(input_folder, output_folder=None):
    """Convert all HEIC images in folder to JPG"""
    input_path = Path(input_folder)
    
    if output_folder is None:
        output_folder = input_folder
    output_path = Path(output_folder)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Supported HEIC extensions
    heic_extensions = ['.heic', '.heif', '.HEIC', '.HEIF']
    
    converted = 0
    skipped = 0
    
    print(f"Looking for HEIC images in: {input_path}")
    print("-" * 50)
    
    # Find all HEIC files
    for ext in heic_extensions:
        for heic_file in input_path.rglob(f'*{ext}'):
            try:
                # Open HEIC image
                img = Image.open(heic_file)
                
                # Convert RGB if necessary (HEIC might be in different color mode)
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Create white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Generate output filename
                output_filename = heic_file.stem + '.jpg'
                
                # Preserve folder structure
                relative_path = heic_file.relative_to(input_path)
                output_file = output_path / relative_path.parent / output_filename
                output_file.parent.mkdir(parents=True, exist_ok=True)
                
                # Save as JPG with quality 90
                img.save(output_file, 'JPEG', quality=90, optimize=True)
                
                print(f"✓ Converted: {heic_file.name} → {output_filename}")
                converted += 1
                
            except Exception as e:
                print(f"✗ Error converting {heic_file.name}: {e}")
                skipped += 1
    
    print("-" * 50)
    print(f"Conversion complete!")
    print(f"✓ Converted: {converted} images")
    if skipped > 0:
        print(f"✗ Skipped: {skipped} images")

if __name__ == "__main__":
    # Convert images in the public/images folder
    images_folder = Path(__file__).parent / "public" / "images"
    
    if not images_folder.exists():
        print(f"Error: {images_folder} does not exist!")
        print("Please make sure you're running this from the project root.")
    else:
        print("HEIC to JPG Converter")
        print("=" * 50)
        convert_heic_to_jpg(images_folder)
        print("\nDone! You can now use the JPG images in your portfolio.")

