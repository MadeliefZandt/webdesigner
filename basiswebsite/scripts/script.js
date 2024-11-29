// JavaScript Document
console.log("hi");

var menubutton = document.querySelector("button");

menubutton.onclick = openMenu; 

function openMenu() { 
var menu = document.querySelector("nav");
menu.classList.add("toonMenu");
  
}

var sluitbutton = document.querySelector("nav button");

sluitbutton.onclick = closeMenu; 

function closeMenu() { 
var menu = document.querySelector("nav");
menu.classList.remove("toonMenu");
}