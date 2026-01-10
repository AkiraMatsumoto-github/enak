from PIL import Image
import os

# Paths
input_path = "/Users/matsumotoakira/.gemini/antigravity/brain/a236b459-ba90-417d-9e6a-cedb1b02d1f7/logo_enak_casual_1768014753179.png"
output_path = "/Users/matsumotoakira/Documents/Private_development/enna/public/logo.png"

def process_image():
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        new_data = []
        for item in datas:
            # Change all white (also shades of whites) to transparent
            if item[0] > 200 and item[1] > 200 and item[2] > 200:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        
        img.putdata(new_data)
        
        # Crop the image to content
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print(f"Successfully processed and saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_image()
