# photo-organise
Node.js script for organising the photo files for the backup

* Requirements
Case 1. Normal files >> Don’t touch
Case 2. .mp4, .mov >> Create a new folder ‘video’ >> move the files into the folder 
Case 3. .png, .aae files >> Create a new folder ‘captured’ >> move the files into the folder
Case 4. .jpg files >> img_1234, img_e1234 >> Only if there is edited version ('xxx_Exxx.jpg') create a new folder 'duplicate' and move the original file
