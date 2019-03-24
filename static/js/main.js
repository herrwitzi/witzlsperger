let menuBtn = $("#menuBar");

menuBtn.click(function(){

  $('.hamburger-menu').toggleClass('animate');

  if($(".secondaryMenu").hasClass("active")){
    
    $(".secondaryMenu").removeClass("active");
    setTimeout(function(){
      $(".primaryMenu").addClass("active");
    },400);

    
  } else {
    $(".primaryMenu").removeClass("active");
  
    setTimeout(function(){
      $(".secondaryMenu").addClass("active");
    },350);
  }
});

function cardPressed() {
  this.classList.add('card-hover');
}

function cardReleased() {
  this.classList.remove('card-hover');
}

function myFunction(imgs) {
  document.getElementById("myimg").style.width ="100%";
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.getAttribute("data-bigsrc");
  expandImg.setAttribute("data-nr", imgs.getAttribute("data-nr"));
}

function closeimg() {
    document.getElementById("myimg").style.width = "0%";
}

function nextimg(){
  var expandImg = document.getElementById("expandedImg");
  var newid = parseInt(expandImg.getAttribute("data-nr"))+1;
  var newimg = document.querySelectorAll("[data-nr='"+newid+"']");
  expandImg.src = newimg[0].getAttribute("data-bigsrc");
  expandImg.setAttribute("data-nr", newid); 
}

function previmg(){
  var expandImg = document.getElementById("expandedImg");
  var newid = parseInt(expandImg.getAttribute("data-nr"))-1;
  var newimg = document.querySelectorAll("[data-nr='"+newid+"']");
  expandImg.src = newimg[0].getAttribute("data-bigsrc");
  expandImg.setAttribute("data-nr", newid); 
}