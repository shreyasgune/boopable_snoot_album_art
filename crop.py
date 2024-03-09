import os
import cv2

def crop_and_save(image_path, output_dir):
    # Read the input image
    image = cv2.imread(image_path)

    # Check if the image was successfully loaded
    if image is None:
        print(f"Error: Couldn't open or find the image: {image_path}")
        return

    # Define the cropping region
    x = (image.shape[1] - 1080) // 2  # Center crop for width
    y = (image.shape[0] - 1102) // 2  # Center crop for height
    width = 1080
    height = 1102


    # Crop the image
    cropped_image = image[y:y+height, x:x+width]

    # Extract the file name without extension
    filename_without_extension = os.path.splitext(os.path.basename(image_path))[0]

    # Save the cropped image
    output_path = os.path.join(output_dir, f"{filename_without_extension}_cropped.jpg")
    cv2.imwrite(output_path, cropped_image)

    print(f"Cropped image saved successfully: {output_path}")

def main():
    # Input and output directories
    input_dir = "long_images"
    output_dir = "images"

    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Iterate over all JPEG images in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith(".jpg"):
            image_path = os.path.join(input_dir, filename)
            crop_and_save(image_path, output_dir)

if __name__ == "__main__":
    main()
