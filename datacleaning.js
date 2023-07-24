const fs = require('fs');

async function readFileAsync(inputFile) {
  try {
    returnDictionary = {}
    const data = await fs.promises.readFile(inputFile, 'utf8');
    const jsonData = JSON.parse(data);
    const coursesinit = jsonData['courses']
    for (const initkey in coursesinit) {
        course = initkey
        const listclass = coursesinit[initkey][1]
        for (const key in listclass) {
            const valueArray = listclass[key];
            const sec = key
            const crn = valueArray[0]
            let time;
            let day;
            if (valueArray[1]?.[0]?.[0] !== undefined) {
                time = valueArray[1][0][0];
            }
            if (valueArray[1]?.[0]?.[1] !== undefined) {
                day = valueArray[1][0][1];
            }
            returnDictionary[crn] = [course, time, day]
            console.log(course, sec, crn, time, day)
        }
    }
    console.log(returnDictionary)
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}

const inputFile = 'data.json';
readFileAsync(inputFile);
