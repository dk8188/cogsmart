
    function calculateScore() {
    var weight = document.patientdata.weight.value
    var height = document.patientdata.height.value
    if (weight > 0 && height > 0) {	
    var finalBmi = weight/(height/100*height/100)

    if(finalBmi < 10){
    // val error
    }
    if(finalBmi > 18 && finalBmi < 23){
   // val 0
    }
    if(finalBmi > 23 && finalBmi < 25) {
    // val 1
    }
    if(finalBmi >= 10 && finalBmi <= 18 || finalBmi > 25 && finalBmi < 27){
      // val 2
    }
    if(finalBmi > 27 && finalBmi < 30){
     // val 3
    }
    if(finalBmi > 30){
     // val 4
    }
    }
    else{
    alert("入力に誤りがあります")
    }
   var steps = document.patientdata.steps.value
    if(steps >= 8000){
        // val -2
    }
    if(steps >= 6000 && steps < 8000){
        // val 0
    }
    if(steps >= 4000 && steps < 6000 ){
        // val 1
    }
    if(steps >= 2000 && steps < 4000){
      // val 2
    }
    if(steps >= 1000 && steps < 2000){
        // val 3
    }
    if(steps >= 0 && steps < 1000){
        // val 4
    }
    if(steps = "") {
        // val error "error"
    }
    else{
    alert("入力に誤りがあります")
    }
    var sleep = document.patientdata.sleep.value
    if(sleep >= 7 && sleep < 8 ){
        // val -2
    }
    if(sleep >= 8){
     // val 0
    }
    if(sleep >= 6 && sleep < 7 ){
        // val 1
    }
    if(sleep >= 5 && sleep < 6){
      // val 2
    }
    if(sleep >= 4 && sleep < 5){
      // val 3
    }
    if (sleep <0 && sleep < 4){
     // val 4

    }
    if(sleep = 0){
     // vall  "error"
    }
    else{
    alert("入力に誤りがあります")
    }
};
var totalScore = finalBmi + steps + sleep
if(totalScore >= -2 && totalScore <= 0 ){
    // val A
}
if(totalScore >= 1 && totalScore <= 3){
 // val B
}
if(totalScore >= 4 && totalScore <= 6 ){
    // val C
}
if(totalScore >= 7 && totalScore < 9){
  // val D
}
if(totalScore >= 10 && totalScore < 12){
  // val E
}

if(totalScore = 0){
 // vall  "error"
}
else{
alert("入力に誤りがあります")
};