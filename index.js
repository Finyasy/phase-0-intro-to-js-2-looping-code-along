const names = ["Charlie", "Samip", "Ali"];

function writeCards(names) {
  var results = [];   
  for (let i = 0; i < names.length; i++) {
    results.push(names[i]);
  }
  console.log(results);
}
var results2 = writeCards('Thankyou, ${names[i]}, for a wonderful birthday gift!');
console.log(results2);

function countDown(){
    let countdown = 11;
    while (countdown > 0){
        countdown--;
        console.log(countdown);
    }
}