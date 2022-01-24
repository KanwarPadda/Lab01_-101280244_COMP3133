
var fs = require('fs')

let input = fs.readFile('input_countries.csv', "utf8", (err, data) => {
    const arrayData = data.split("\n").map(d => d.split(","));
    let caResult = [];
    let usResult = [];
    for (let index = 0; index < arrayData.length; index++) {
        const element = arrayData[index];
        if (element[0] === "Canada") {
            caResult.push(element.toString())
            
        } else if (element[0] === "United States") {
            usResult.push(element.toString())
        }
    }
    console.log({ caResult, usResult })
    fs.writeFile("canada.txt", caResult.join(""), (err) => {
        if (err) {
            console.log({ error: err })
            return;
        }
    })

    fs.writeFile("usa.txt", usResult.join(""), (err) => {
        if (err) {
            console.log({ error: err })
            return;
        }
    })
})



