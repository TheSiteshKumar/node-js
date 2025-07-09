const EventEmitter = require('events');
const uploader = new EventEmitter();

uploader.on('fileUploaded', (filename) => {
  console.log(`✅ File uploaded: ${filename}`);
  // Call DB save, send notification, etc.
});

function simulateUpload(file) {
  console.log('Uploading...');
  setTimeout(() => {
    uploader.emit('fileUploaded', file);
  }, 2000);
}

simulateUpload('resume.pdf');
