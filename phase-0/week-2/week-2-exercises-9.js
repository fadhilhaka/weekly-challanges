//[Exercises 9] Berlatih Penggunaan Functions

//Tugas 1
function shutOut() {
    var halo = 'Halo Function !';
    return halo;
}
console.log(shutOut());

//Tugas 2
var num1 = 5;
var num2 = 6;

function calculateMultiply() {
    var hasilPerkalian = 0;
    hasilPerkalian = num1 * num2;
    return hasilPerkalian;
}
console.log(calculateMultiply(num1,num2));

//Tugas 3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);

function processSentence(name,age,address,hobby) {
    var fullSentence = 'Nama saya ' + name + ', umur saya ' + 30 + ' tahun, alamat saya di ' + address + ' , dan saya punya hobby yaitu ' + hobby +'!';
    return fullSentence;
    
}
console.log(fullSentence);