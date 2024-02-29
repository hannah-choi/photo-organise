const fs = require('fs')
const path = require('path')
const foldername = process.argv[2]; //get the argument from the script
const newDir = path.join(__dirname, foldername)

if(!foldername || !fs.existsSync(newDir)) {
    console.log('Invalid Folder name. Please specify an existing folder name');
    return;
}


const move = (newFolderName, fileName) => {
    const existingPath = path.join(newDir, fileName);
    const newPath = path.join(newDir, newFolderName);
        !fs.existsSync(newPath) && 
            fs.mkdirSync(newPath, { recursive: true }, err => {
                if (err) {
                    console.error(err)
                }
            })
        fs.renameSync(existingPath, path.join(newPath, fileName), function(err){
            if(err){
                console.error(err)
            }
            console.log(`Move ${fileName} to ${newFolderName}`)
        })
}

const isDuplicated = (fileName, files) => {
    if(!fileName.startsWith('IMG_')||fileName.startsWith('IMG_E')) {
        return false;
    }
    const edited = `IMG_E${fileName.split('_')[1]}`
    const duplicated = files.find((file)=> path.basename(file) === edited)
    if(duplicated){
        move('duplicate', `IMG_${fileName.split('_')[1]}`)
    }
    return;
}

fs.readdir(newDir, (err, files) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(`Processing in ${newDir}...`)

        files.forEach((file, _, files) => {
            const fileName = path.basename(file)
            
            switch(path.extname(file)) {
                case '.mp4':
                case '.mov':
                    move('video', fileName)
                    break;
                case '.png':
                case '.aae':
                    move('captured', fileName)
                    break;
                case '.jpg':
                    isDuplicated(fileName, files)
                    break;
                default:
                    break;
            }   
        }
        )
        }
    }
    )




