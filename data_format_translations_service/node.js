const express = require('express');
const app = express();
const fs = require("fs");           // filesystem
const yml = require("js-yaml");     // yaml
const xml = require("xml2js");      // xml
const csv = require("csv")

app.get('/text', function (req, res) {
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
    res.send(JSON.stringify(textHeman));
 });

 app.get('/csv', function (req, res) {
    const csvFile = fs.readFileSync(__dirname + '/text.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    
    let csvHeman; 
    
    csvParser = csv.parse(csvFile, { delimiter: ";" }, (err, content) => {
        csvHeman = {
            name: content[0][0],
            age: content[0][1],
            gender: content[0][2]
        }
        res.send(JSON.stringify(csvHeman))
    })
 });

 app.get('/yml', function (req, res) {
    const ymlFile = fs.readFileSync(__dirname + '/text.yml', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    
    const ymlHeman = yml.load(ymlFile)

    res.send(JSON.stringify(ymlHeman))
 });

 app.get('/xml', function (req, res) {
    const xmlFile = fs.readFileSync(__dirname + '/text.xml', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    
    let xmlHeman;
    
    const xmlParser = new xml.Parser();
    xmlParser.parseString(xmlFile, (_, result) => {
    
        const {name, age, gender} = result.human;
        xmlHeman = {name:name[0], age:age[0], gender:gender[0]}

        res.send(JSON.stringify(xmlHeman))
    });
 });

const server = app.listen(42070);