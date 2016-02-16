var body = document.getElementsByTagName('p');
var bodystring = "";
for(var i = 0; i < body.length; i++) {
  bodystring += body[i].innerHTML + " ";
};

var wordsarray = bodystring.split(" ");
console.log(wordsarray.length);
var timeToRead = function (){
  var min = 0;
for(var i = 0; i < wordsarray.length; i+=230){
  min = min += 1;
}
console.log(min + "minutes");
return min + "minutes";
}


timeToRead();
