// Import stylesheets
import './style.css';
import $ from "jquery";

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Click callback Facebook sized image </h1>`;
var images =['https://via.placeholder.com/500',
'https://via.placeholder.com/500/FF0000/FFFFFF?Text=image1','https://via.placeholder.com/500/FFFF00/000000?Text=image',
'https://via.placeholder.com/500/000000/FFFFFF?Text=image']
var playing= false;
$(function(){
//are we playing 
//no --> show message bord with
$("#footContainer").show()
 //display the message "MESSAGE BOARD"

 $("#message").show()
 setTimeout(function(){
$("#message").html("Click On Me")
},3000);
//click on message board

 $("#message").click(function(){
  
   $("#message").hide()
   $("#footContainer").hide()
   $("#imageContainer").show()
  setTimeout(function(){
  $("#imageContainer").append(`<img src="https://via.placeholder.com/615X595/0000FF/808080 ?Text=Digital.com" id="image1" class="image">`)

 },1000)

 })


 
 
// yes -->
//  reload the page
// show the image carosselle with the text loading...
// show the textarea
//hide the activity indicator loading
//show the image carosselle
// Mach the image with the coresponding textarea
// show the board message 
// display the message, "If you like share"


})