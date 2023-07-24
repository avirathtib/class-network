const fs = require('fs');

async function readFileAsync(inputFile) {
  try {
    // Asynchronously read the file
    const data = await fs.promises.readFile(inputFile, 'utf8');
    const jsonData = JSON.parse(data);
    const course = jsonData['courses']['ACCT 2101'];
    const listclass = course[1]
    for (const key in listclass) {
        // If you want to access individual elements within the array value
        const valueArray = listclass[key];
        const sec = key
        const crn = valueArray[0]
        const time = valueArray[1][0][0]
        const day = valueArray[1][0][1]
        console.log("new clas")
        console.log(sec)
        console.log(crn)
        console.log(time)
        console.log(day)
      }

  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}

const inputFile = 'data.json';
readFileAsync(inputFile);
