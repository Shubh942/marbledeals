var myIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("alb1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  if (myIndex1 >= x.length) {
    myIndex1 = 0;
  }
  x[myIndex1].style.display = "block";  
  myIndex1++;
  setTimeout(carousel1, 2000); // Change image every 2 seconds
}
var myIndex2 = 0;
carousel2();
function carousel2() {
  var i;
  var x = document.getElementsByClassName("alb2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}
var myIndex3 = 0;
carousel3();
function carousel3() {
  var i;
  var x = document.getElementsByClassName("alb3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x.length) {myIndex3 = 1}    
  x[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 2000); // Change image every 2 seconds
}

var myIndex4 = 0;
carousel4();
function carousel4() {
  var i;
  var x = document.getElementsByClassName("alb4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex4++;
  if (myIndex4 > x.length) {myIndex4 = 1}    
  x[myIndex4-1].style.display = "block";  
  setTimeout(carousel4, 2000); // Change image every 2 seconds
}


var myIndex5 = 0;
carousel5();
function carousel5() {
  var i;
  var x = document.getElementsByClassName("alb5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex5++;
  if (myIndex5 > x.length) {myIndex5 = 1}    
  x[myIndex5-1].style.display = "block";  
  setTimeout(carousel5, 2000); // Change image every 2 seconds
}

