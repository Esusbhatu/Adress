

var array = JSON.parse(localStorage.getItem("personen"));
var ul = document.getElementById('inzicht');
console.log(window.location.href);
const stringHref = window.location.href;
console.log(typeof stringHref);
const arr = stringHref.split('=');
console.log(arr);
const personInfo = array.find((per)=>per.id === Number(arr[1]));

ul.innerHTML =  "Voornaam:" + " " + personInfo.voornaam +  "<br>" +
"Tussennaam:" +  " " +  personInfo.tussennaam + "<br>" + "Acternaam:" + "  "+ 
personInfo.acternaam +  "<br>"  + " Woonplaats:"  + "  "+personInfo.woonplaats  + "<br> " +   "Adres:" + " "+ personInfo.adres  + "<br>" + "PostCode:" + " " + personInfo.postcode;

