var form = document.querySelector("#form");
var inpu = document.querySelector("#input");
var submit = document.querySelector("#submit")
//        document.querySelector("#")
console.log(form.action)
//var a= form.action =inpu.value;
//console.log(a)
//console.log(inpu.value)
//console.log(form.action)

inpu.addEventListener('input', function () {
  console.log(inpu.value);
})

//console.log(form =input.value)
submit.addEventListener('click', () => {
  var a = form.action = inpu.value;
  //  console.log(a);
  // console.log(inpu.value);
  //console.log(form.action);
})




//Bugs Occuring
/*
when i will giving only like  this "google.com/facebook.com/youtube.com"  then url is not working . so , now i understand what should i will do 
ok when we use [https://facebook.com]  or [https://www.facebook.com] then it's working so we need to set in a default [https://] or this one [https://www.].
*/
window.addEventListener("copy", (event) => {
  console.log("cut action initiated");
});

function copy() {
  var textarea = document.querySelector("#code");
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
  var copy = document.querySelector(".copy");
  var paste = document.querySelector(".paste");


  copy.style.scale = ".9"
  paste.style.display = "block";
  copy.style.display = "none"



}
var name = prompt("Your name");
setTimeout(() => {
  alert(name.toUpperCase() + " read the bugs");

}, 4000)

setTimeout(() => {
  window.alert("BUGS OCCURING:  when i will giving only like  this [google.com/facebook.com/youtube.com]  then url is not working . so , now i understand what should i will do ok when we use [https://facebook.com]  or [https://www.facebook.com] then it's working so we need to set in a default [https://] or this one [https://www.]. \n\n I AM SOLVING IT")
}, 5000)