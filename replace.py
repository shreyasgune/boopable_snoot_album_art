from PIL import Image

# def scale_and_insert(original_img_path, insert_img_path, output_img_path):
#     # Open the original image to be scaled
#     original_img = Image.open(original_img_path)
#     # Scale the original image to desired dimensions
#     scaled_img = original_img.resize((2745, 2745))
#     # Open the image where we want to insert the scaled image
#     insert_img = Image.open(insert_img_path)
#     scaled_img.save(output_image_path)
#     scaled_stuff=Image.open(output_image_path)
#     # Paste the scaled image onto the insert image at specified position
#     insert_img.paste(scaled_stuff, (2681, 3745))
#     # Save the modified image as a new image
#     insert_img.save(finale_path)
#     print("Image processing completed.")


def composite_images(base_img_path, overlay_img_path, output_img_path, position):
    # Open the base image
    base_img = Image.open(base_img_path)

    # Open the overlay image
    overlay_img = Image.open(overlay_img_path)

    # Convert both images to RGBA mode (if not already in RGBA)
    base_img = base_img.convert("RGBA")
    overlay_img = overlay_img.convert("RGBA")

    # Convert position from pixels to tuple (left, top) for pasting
    paste_position = (position[0], position[1])

    # Composite the overlay image onto the base image at specified position
    base_img.alpha_composite(overlay_img, paste_position)

    # Save the composite image
    base_img.save(output_img_path)

    print("Composite image saved successfully.")
    print("Composite image saved successfully.")

if __name__ == "__main__":
    base_image_path = "vinyl.jpg"  # Replace with the path to the base image
    overlay_image_path = "scaled_image/scaled_output_image.jpg"  # Replace with the path to the overlay image
    output_image_path = "output_image.png"  # Specify the output path for the composite image
    position_in_pixels = (4928, 3264)  # Specify the position where the overlay image will be placed in pixels

    composite_images(base_image_path, overlay_image_path, output_image_path, position_in_pixels)


# def scale_and_insert(original_img_path, insert_img_path, output_img_path):
#     # Open the original image to be scaled
#     original_img = Image.open(original_img_path)

#     # Scale the original image to desired dimensions
#     scaled_img = original_img.resize((2737, 2737))

#     # Open the image where we want to insert the scaled image
#     insert_img = Image.open(insert_img_path)

#     # Create a blank canvas with the same size as the insert image
#     canvas = Image.new("RGBA", scaled_img.size, (0, 0, 0, 0))

#     # Paste the scaled image onto the blank canvas at specified position
#     canvas.paste(scaled_img, (4928, 3264))

#     # Composite the canvas onto the insert image
#     result_img = Image.alpha_composite(insert_img.convert("RGBA"), canvas)

#       # Convert result image to RGB mode before saving as JPEG
#     result_img = result_img.convert("RGB")

#     # Save the modified image as a new image
#     result_img.save(finale_path)

#     print("Image processing completed.")

# if __name__ == "__main__":
#     original_image_path = "images/IMG_20230725_085409_924_cropped.jpg"  # Replace with the path to the original image
#     insert_image_path = "vinyl.jpg"  # Replace with the path to the image where you want to insert
#     output_image_path = "scaled_image/scaled_output_image.jpg"  # Specify the desired output path
#     finale_path = "output.jpg"

#     scale_and_insert(original_image_path, insert_image_path, output_image_path)
