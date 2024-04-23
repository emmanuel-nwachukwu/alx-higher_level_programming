#!/usr/bin/node

const fs = require('fs');

// Check if file path argument is provided
if (process.argv.length !== 3) {
  console.log('Usage: node read_file.js <file_path>');
  process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'UTF-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
