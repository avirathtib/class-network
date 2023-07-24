const fs = require('fs');

async function readFileAsync(inputFile) {
  try {
    const returnDictionary = {};

    const data = await fs.promises.readFile(inputFile, 'utf8');
    const jsonData = JSON.parse(data);
    const coursesInit = jsonData['courses'];

    for (const courseKey in coursesInit) {
      const course = courseKey;
      const listClass = coursesInit[courseKey][1];

      for (const secKey in listClass) {
        const sec = secKey; 
        const valueArray = listClass[secKey];

        const crn = valueArray[0];
        let time = 404;
        let day = "NODAY";

        if (valueArray[1]?.[0]?.[0] !== undefined) {
          time = valueArray[1][0][0];
        }
        if (valueArray[1]?.[0]?.[1] !== undefined) {
          day = valueArray[1][0][1];
        }

        returnDictionary[crn] = [course, time, day];
        //console.log(course, sec, crn, time, day);
      }
    }

    console.log(returnDictionary);
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
  }
}

const inputFile = 'data.json';
readFileAsync(inputFile);
