// Import the File System module
const fs = require('fs');

// File path
const filePath = 'example.txt';

// 1️⃣ Create or write a new file
fs.writeFile(filePath, 'Hello, this is the first line!\n', (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('✅ File created and data written.');

    // 2️⃣ Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('\n📖 File contents after creation:');
        console.log(data);

        // 3️⃣ Update (append) new data to the file
        fs.appendFile(filePath, 'This is an appended line.\n', (err) => {
          if (err) {
            console.error('Error updating file:', err);
          } else {
            console.log('\n✅ Data appended successfully.');

            // 4️⃣ Read again to confirm update
            fs.readFile(filePath, 'utf8', (err, newData) => {
              if (err) {
                console.error('Error reading updated file:', err);
              } else {
                console.log('\n📖 File contents after update:');
                console.log(newData);
              }
            });
          }
        });
      }
    });
  }
});
