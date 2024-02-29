# photo-organise
Node.js script for organising the photo files for the backup

* Features
Case 1. .mp4, .mov: Will be moved into a new subfolder ‘video’  
Case 2. .png, .aae: Will be moved into a new subfolder ‘captured’ 
Case 3. .jpg: In case there is an edited version ('xxx_Exxx.jpg'), the original file will be moved into a new subfolder 'duplicate' 

* How to use
- Run `node app {folder name}` in terminal, where {folder name} stands for an actual folder name.