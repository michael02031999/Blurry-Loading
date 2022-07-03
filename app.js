let blurryImage = document.getElementById("blurryImg");
let number = document.getElementById("number");

for (let j = 0; j < 101; j++) {
  setTimeout(function () {
    number.innerHTML = j + "%";
    number.style.opacity = 0;
  }, j * 25);
}

for (let i = 0; i < 16; i++) {
  //let pixels = '"' + "blur" + "(" + 0 + "px" + ")" + '"';
  let array = [
    "blur(15px)",
    "blur(14px)",
    "blur(13px)",
    "blur(12px)",
    "blur(11px)",
    "blur(10px)",
    "blur(9px)",
    "blur(8px)",
    "blur(7px)",
    "blur(6px)",
    "blur(5px)",
    "blur(4px)",
    "blur(3px)",
    "blur(2px)",
    "blur(1px)",
    "blur(0px)",
  ];
  setTimeout(function () {
    blurryImage.style.filter = array[i];
  }, i * 200);
}
