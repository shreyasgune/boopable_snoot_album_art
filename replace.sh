# #!/bin/bash

# # Define file paths
# original_image="images/IMG_20230725_085409_924_cropped.jpg"
# replacement_image="vinyl.jpg"
# output_image="output_image.jpg"

# # Scale the original image to dimensions: height=2745px, width=2745px
# convert "$original_image" -resize 2737x2737 scaled_image.jpg

# # Insert the scaled image into the replacement image at positions: height=3745, width=2681
# # convert "$replacement_image" scaled_image.jpg -geometry +2681+3745 -composite "$output_image"
# convert "$replacement_image" scaled_image.jpg -geometry +745+232 -composite "$output_image"

# # Remove the intermediate scaled image
# # rm scaled_image.jpg

# echo "Image processing completed."

#!/bin/bash

# Create a new folder for the output images if it doesn't exist
# mkdir -p scaled_images


# Loop through all images in the images folder
for original_image in scaled_images/*.jpg; do
    # Extract the filename without the directory path
    filename=$(basename "$original_image")
    echo $filename

    # Define the output image path in the new_images folder with the same filename
    # output_image="$filename"
    # echo "output_filename" $output_image

    # Scale the original image to dimensions: height=2755px, width=2745px
    convert "$original_image" -resize 2762x2762 scaled_images/$filename

    # Insert the scaled image into the replacement image at positions: height=3745, width=2681
    convert vinyl.jpg scaled_images/$filename -geometry +734+219 -composite new_images/$filename

    echo "Image processing completed for $filename"
done

echo "All images processed."
