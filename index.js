const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path');
var arrayPath = './emma.json';


const PORT = process.env.PORT || 2000

app.set('views', './views');
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/quotes", (req, res) => {




  fs.readFile(arrayPath, 'utf8', (err, jsonString) => {
    // if (err) {
    //   console.log("File read failed:", err)
    //   return
    // }
    console.log('File data:', jsonString)
      var quotesArray = JSON.parse(jsonString)
      const maxVal = quotesArray.length - 1
      const randomInt = getRandomIntInclusive(0, maxVal);
      const randomQuote = quotesArray[randomInt]
      res.render("jumbo", { quotes: randomQuote });
  })
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}













app.listen(PORT, () => {
  console.log(`example of express`)
})
