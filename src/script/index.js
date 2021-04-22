// toggle switch for dark and light mode
const theme = () => {
  // const mood = document.querySelector("#light-dark").value;
  const darkLightMode = document.querySelector("#light-dark").checked;
  //checked will give true or false
  console.log(mood);
  body = document.querySelector("body").style;
  if (mood) {
    body.backgroundColor = "black";
  } else {
    body.backgroundColor = "white";
  }
};

// drop down menus

let clicked = false;
document.querySelector(".dropd-menu a").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".dropdown-content").style.cssText =
      "display: block; background-color: white; ";
  } else {
    document.querySelector(".dropdown-content").style.cssText = "display:none;";
  }
});

document.querySelector(".dropd-menu-subs a").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".dropdown-content-subs").style.cssText =
      "display: block; background-color: white; ";
  } else {
    document.querySelector(".dropdown-content-subs").style.cssText =
      "display:none;";
  }
});
