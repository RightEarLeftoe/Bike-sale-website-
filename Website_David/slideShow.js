
var Cimage = 0;
images = ["Images/road_bike1.jpg", "Images/bike_repair.jpg", "Images/Biking_background.jpg"]
var inactive = document.querySelector(".active");

document.querySelector(".rightArrow").addEventListener(`click`,() =>{

  if (Cimage >= images.length-1){
    Cimage = -1;
  }
      Cimage = Cimage + 1;
      inactive.src = images[Cimage];
});

document.querySelector(".leftArrow").addEventListener("click",() =>{

  if (Cimage <=0){
    Cimage = images.length;
  }
      Cimage = Cimage-1;
      inactive.src = images[Cimage];
});
