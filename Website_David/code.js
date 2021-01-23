
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
function Navbar() { /*This function is for the reactive navigation bar when the screen is small enough*/ 
    var bar = document.getElementById("myTopnav");
    if (bar.className === "nav") {
      bar.className += " responsive";
    } else {
      bar.className = "nav";
    }
  }
  function myBurger(bar) {
    bar.classList.toggle("change");
  }


  var buttons = document.getElementsByTagName('button');
  for (var i = 0, len = buttons.length; i < len; i++) {
      buttons[i].onclick = function (){
          sizeB(this);
      }

  }function sizeB (button) {
    var x = button.id;
    var Tsize = "1em";
    var Bcol = "grey";
    switch (x) {
        case '1':
          Tsize = "Larger"
          textSize1(Tsize);
            break;
        case '2':
          Tsize = "1em"
          textSize1(Tsize);
            break;
        case '3':
          Tsize = "Smaller"
          textSize1(Tsize);
            break;
        case '4':
          Bcol = "4F4C4C";
          Bcolour1(Bcol);
           break;
        case '5':
          Bcolour1(Bcol);
          Bcol = "grey";
          break;
        default:
            return false;
    }
  }

  function textSize1(Tsize){
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.textSize) {
        sessionStorage.textSize = Tsize;
      } else {
        sessionStorage.textSize = "1em";
      }
      document.getElementById("myTopnav").style.fontSize = sessionStorage.textSize;
      }
        else{
          document.getElementById("myTopnav").style.fontSize = "1em";
        }
      }
      function textSize(){
        document.getElementById("myTopnav").style.fontSize = sessionStorage.textSize;
      }

  function Bcolour1(Bcol) {
      if (typeof(Storage) !== "undefined") {
      if (sessionStorage.Bcolour) {
        sessionStorage.Bcolour = Bcol;
      } else {
        sessionStorage.Bcolour = "grey";
      }
      document.getElementById("myTopnav").style.backgroundColor = sessionStorage.Bcolour;
      }
        else{
          document.getElementById("myTopnav").style.backgroundColor = "grey";
        }
      }

  function Bcolour (){
    document.getElementById("myTopnav").style.backgroundColor = sessionStorage.Bcolour;
  }
