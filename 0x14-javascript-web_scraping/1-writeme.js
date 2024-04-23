#!/usr/bin/node

const fs = require('fs');

if (process.argv.length !== 4) {
  console.log('Usage: ./0-readme.js filename "string"');
  process.exit(1);
}

const filename = process.argv[2];
const text = process.argv[3];

fs.writeFile(filename, text, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Success');
  }
});
