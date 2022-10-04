const fs = require("fs");           // filesystem
const yml = require("js-yaml");     // yaml
const xml = require("xml2js");      // xml
const csv = require("csv");         // csv
const csvExtra = require('csv-parser')

// TEXT PARSE Whatever
const textFile = fs.readFileSync(__dirname + '/text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
});

const newStuff = textFile.split(', ');

const textHeman = {
    name: newStuff[0],
    age: newStuff[1],
    gender: newStuff[2]
}

console.log(textHeman);

// YAML PARSE Lols
const ymlFile = fs.readFileSync(__dirname + '/text.yml', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
});

const ymlHeman = yml.load(ymlFile)

console.log(ymlHeman);

// XML PARSE Skrrrt
const xmlFile = fs.readFileSync(__dirname + '/text.xml', 'utf8', (err, data) => {
    console.log('skrt');
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

let xmlHeman;

const xmlParser = new xml.Parser();
xmlParser.parseString(xmlFile, (_, result) => {

    const {name, age, gender} = result.human;
    xmlHeman = {name:name[0], age:age[0], gender:gender[0]}
});

console.log(xmlHeman);

// CSV PARSER Stuuuffff never ends
const csvFile = fs.readFileSync(__dirname + '/text.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
});

let csvHeman; 

const csvParser = csv.parse(csvFile, { delimiter: ";" }, (err, content) => {
    csvHeman = {
        name: content[0][0],
        age: content[0][1],
        gender: content[0][2]
    }
    console.log(csvHeman);
})