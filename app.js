const fs = require('fs')
const path = require('path')
const foldernames = process.argv; //get the argument from the script

const newDir = path.join(__dirname, foldernames[2])

const move = (newFolderName, fileName) => {
    const oldPath = path.join(newDir, fileName);
    const newPath = path.join(newDir, newFolderName);
        fs.mkdir(newPath, { recursive: true }, err => {
            if (err) {
            console.error(err)
            }
            fs.rename(oldPath, path.join(newPath, fileName), function(err){
                if(err){
                    console.error(err)
                }
                console.log(`Move ${fileName} to ${newFolderName}`)
            })
        })

}

const checkName = (fileName) => {
    const splitted = fileName.split('_')
    if(splitted[1].charAt(0)==='E'){
        move('duplicate', `${splitted[0]}_${splitted[1].slice(1)}`)
    }
    return;
}

fs.readdir(newDir, (err, files) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(`Processing in ${newDir}...`)

        files.forEach(file => {
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
                    checkName(fileName)
                    break;
                default:
                    break;
            }   
        }
        )
        }
    }
    )




