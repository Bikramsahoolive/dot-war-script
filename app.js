const fs = require('fs');
const archiver = require('archiver');
const filename = `${Date.now()}_file.war`
const output = fs.createWriteStream(`OUTPUT/${filename}`);
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`WAR file created: ${archive.pointer()} total bytes`);
});

archive.pipe(output);
archive.directory('TARGET', false);
archive.finalize();
