
const fs = require('fs');
const path =  require('path');

const pathSrc = './build', pathDst = './docs';

if (!fs.existsSync(pathDst)) fs.mkdirSync(pathDst);

copyDir(pathSrc, pathDst);

function copyDir(src, dst) {
    "use strict";
    fs.readdir(src, function(err, files) {
        if (err) console.error(err);

        files.forEach( (item) => {

            const fileSrc = path.resolve(src, item);
            const fileDst = path.resolve(dst, item);

            const stats = fs.statSync(fileSrc);
            if (!stats) return;

            if (stats.isDirectory()) {

                if (!fs.existsSync(fileDst)) fs.mkdirSync(fileDst);
                copyDir(fileSrc, fileDst);

            } else {

                fs.copyFile(fileSrc, fileDst, (err) => {
                    if (err) console.error(err);
                    console.info(` - file copied to: ${fileDst}`);
                });
            }
        });
    });
}
