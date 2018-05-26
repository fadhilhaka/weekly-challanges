//[Exercises 7] Perulangan - Play with Asterisks

//1. Menyusun Barisan Bintang

var botOne = 0;

while (botOne < 5) {
  botOne++;
  console.log('*');
}

for (botOne = 1; botOne <= 5; botOne++) {
  console.log('*');
}


//2. Menyusun Barisan Bintang Dengan Nested Looping

var baris = 5;
var awal = 0;
var botOne = '';
var botTwo = '';

//nested loop
while (awal<baris) {
  var botOne = '*';
  var awalBot = 1;
  while (awalBot<baris) {
    botOne = botOne + '*';
    awalBot++;
  }
  console.log(botOne);
  awal++;
}

for (botOne = 1; botOne <= 5; botOne++) {
  botTwo = '*';
  awalBot = 1;
  baris = 5;
  for (awalBot < baris; awalBot < 5; awalBot++){
    botTwo = botTwo + '*';
  }
    console.log(botTwo);
}

//loop biasa
while (awal < baris) {
  var botOne = '*';
  botOne = botOne + '*' + '*' + '*' + '*';
  awal++;
  console.log(botOne);
}

for (awal = 0; awal < baris; awal++) {
  var botOne = '*';
  botOne = botOne + '*' + '*' + '*' + '*';
  console.log(botOne);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var baris = 5;
var awal = 0;
var botOne = '';
var botTwo = '';

//nested loop
while (awal < baris) {
  var botOne = '*';
  var awalBot = 0;
  while (awalBot < awal) {
    botOne = botOne + '*';
    awalBot++;
  }
  console.log(botOne);
  awal++;
}

for (botOne = 1; botOne <= 5; botOne++) {
  botTwo = '*';
  awalBot = 1;
  baris = 5;
  for (awalBot = 1; awalBot < botOne; awalBot++){
    botTwo = botTwo + '*';
  }
  console.log(botTwo);
}

//loop biasa
while (awal < baris) {
  botOne = botOne + '*';
  awal++;
  console.log(botOne);
}

for (awalBot = 0; awalBot < baris; awalBot++) {
  botOne = botOne + '*';
  console.log(botOne);
}

//5-4-3-2-1
for (var awal = 5; awal > 0; awal--) {
  botOne = '';
  for (var i = awal; i > 0; i--) {
    botOne = botOne + '*';
  }
  console.log(botOne);
}

for (awal >= 5; awal > 0; awal--) {
  awalBot = 0;
  botOne = '';
  while (awalBot < awal) {
  botOne = botOne + '*';
  awalBot++;
}
  console.log(botOne);
}
