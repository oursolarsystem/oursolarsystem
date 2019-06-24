function setImageSize() {
  const element = document.querySelector(".bggg");
  const style = getComputedStyle(element);
  const backgroundImage = style.backgroundImage;
  const positionInfo = element.getBoundingClientRect();
  const height = positionInfo.height;
  const width = positionInfo.width;
  console.log(width + " " + height);

  const sun = document.getElementById("sun");
//   const sunPositionInfo = sun.getBoundingClientRect();
//   const sunHeight = sunPositionInfo.height;
//   const sunWidth = sunPositionInfo.width;
  sun.width = (width * 57) / 100;
  sun.height = (height * 72) / 100;
  sun.style.paddingLeft = (width * 42) / 100 + "px";
  sun.style.paddingTop = (height * 41) / 100 + "px";

  const neptune = document.getElementById("neptune");
  neptune.width = (width * 91) / 100;
  neptune.height = (height * 21) / 100;
  neptune.style.paddingLeft = (width * 85) / 100 + "px";
  neptune.style.paddingTop = (height * 8) / 100 + "px";

  const uranus = document.getElementById("uranus");
  uranus.width = (width * 16) / 100;
  uranus.height = (height * 31) / 100;
  uranus.style.paddingLeft = (width * 10) / 100 + "px";
  uranus.style.paddingTop = (height * 6) / 100 + "px";

  const mars = document.getElementById("mars");
  mars.width = (width * 65) / 100;
  mars.height = (height * 41) / 100;
  mars.style.paddingLeft = (width * 60) / 100 + "px";
  mars.style.paddingTop = (height * 30) / 100 + "px";
  // $("#mars").wrap("<a href='facebook.com'></a>");

  mars.addEventListener("onclick", goToMars);

  // const link_mars = document.getElementById("link_mars");
  // link_mars.width = (width * 65) / 100;
  // link_mars.height = (height * 41) / 100;
  // link_mars.style.paddingLeft = (width * 60) / 100 + "px";
  // link_mars.style.paddingTop = (height * 30) / 100 + "px";
  // link_mars.innerHTML = "<a href='facebook.com'></a>";
  // link_mars.style.position = "relative";


  const mercury = document.getElementById("mercury");
  mercury.width = (width * 30) / 100 + "px";
  mercury.height = (height * 52) / 100 + "px";
  mercury.style.paddingLeft = (width * 12) / 100 + "px";
  // mercury.style.left = 330 + "px";
  mercury.style.marginLeft = 24 + "%";
  mercury.style.paddingTop = (height * 45) / 100 + "px";

  const jupiter = document.getElementById("jupiter");
  jupiter.width = (width * 16) / 100;
  jupiter.height = (height * 62) / 100;
  jupiter.style.paddingLeft = (width * 6) / 100 + "px";
  jupiter.style.paddingTop = (height * 40) / 100 + "px";

  const earth = document.getElementById("earth");
  earth.width = (width * 36) / 100;
  earth.height = (height * 80) / 100;
  earth.style.paddingLeft = (width * 29) / 100 + "px";
  earth.style.paddingTop = (height * 66) / 100 + "px";

  const venus = document.getElementById("venus");
  venus.width = (width * 74) / 100;
  venus.height = (height * 66) / 100;
  venus.style.paddingLeft = (width * 68) / 100 + "px";
  venus.style.paddingTop = (height * 52) / 100 + "px";

  const saturn = document.getElementById("saturn");
  saturn.width = (width * 100) / 100;
  saturn.height = (height * 79) / 100;
  saturn.style.paddingLeft = (width * 79) / 100 + "px";
  saturn.style.paddingTop = (height * 57) / 100 + "px";

  const pluto = document.getElementById("pluto");
  pluto.width = (width * 7) / 100;
  pluto.height = (height * 92) / 100;
  pluto.style.paddingLeft = (width * 3) / 100 + "px";
  pluto.style.paddingTop = (height * 84) / 100 + "px";
}

function goToMars(){
  window.location("www.facebook.com");
}

// setImageSize();

// var p = document.querySelectorAll('body nav ul li ul')[0];
// var c = 0;

// p.ima;
