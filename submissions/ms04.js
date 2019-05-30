var unirest = require('unirest');

// write onCalculate function and assign to variables fname and sname

//Love Calculator
//for trial
var fname = "Pranuthi";
var sname ="Deepak-";

function onCalculate() {
  
}

unirest.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`)
.header("X-RapidAPI-Key", "9d678cc86dmsh93401587513b52ap141fd7jsn930e9764a24d")
.then(function (result) {
  console.log(result.body.percentage + '%');
  console.log(result.body.result)
//  console.log( response);
});
