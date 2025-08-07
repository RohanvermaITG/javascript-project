let para = document.getElementsByClassName("paragraph")[0];

function bold() {
  let UPPER = document.getElementById("user-content");
  let value = UPPER.value;
  para.textContent = value;

  if (para.style.fontWeight != "bold") {
    para.style.fontWeight = "bold";
  } else {
    para.style.fontWeight = "100";
  }
}
function colour() {
  let UPPER = document.getElementById("user-content");
  let value = UPPER.value;
  para.textContent = value;

  if (para.style.color != "gray") {
    para.style.color = "gray";
  } else {
    para.style.color = "black";
  }
}
function itlics() {
  let UPPER = document.getElementById("user-content");
  let value = UPPER.value;
  para.textContent = value;

  if (para.style.fontStyle !== "italic") {
    para.style.fontStyle = "italic";
  } else {
    para.style.fontStyle = "normal";
  }
}

function uppercase() {
  let UPPER = document.getElementById("user-content");
  let value = UPPER.value;
  if (para.textContent != value.toUpperCase()) {
    para.textContent = value.toUpperCase();
  } else {
    para.textContent = value;
  }
}
function lowercase() {
  let UPPER = document.getElementById("user-content");
  let value = UPPER.value;

  if (para.textContent != value.toLowerCase()) {
    para.textContent = value.toLowerCase();
  } else {
    para.textContent = value;
  }
}
let pge = document.getElementById("homePage");
function darkMode() {
  // let buttons = document.getElementById("modes").textContent = "topgam"

  let bns = document.getElementsByTagName("button");
  let UPPER = document.getElementById("user-content");
  let outputdiv = document.getElementById("outputdiv");
  // let p = document.getElementById("upt");
  // if (p.style.background = "#135f83") {
  //   p.style.background = "#0a1e28";
  // } else {
  //   p.style.background = "#135f83";
  // }
  outputdiv.classList.toggle("dark");
  UPPER.classList.toggle("dark");
  pge.classList.toggle("dark");
  for (let index = 1; index < bns.length; index++) {
    bns[index].classList.toggle("dark");
    if (bns[1].textContent != "LIGHT") {
      bns[1].textContent = "LIGHT";
    } else {
      bns[1].textContent = "DARK";
    }
  }
}
function capital() {
  let UPPER = document.getElementById("user-content");
  let value = UPPER.value.split(" ");
  let capitalizedWords = value.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  });
  para.textContent = capitalizedWords.join(" ");
}

// for(let value=0; value<value.length)
