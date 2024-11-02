const iconOne = document.querySelector("#iconOne");
const paraOne = document.querySelector(".paraOne");
const iconTwo = document.querySelector("#iconTwo");
const paraTwo = document.querySelector(".paraTwo");
const iconThree = document.querySelector("#iconThree");
const paraThree = document.querySelector(".paraThree");
const iconFour = document.querySelector("#iconFour");
const paraFour = document.querySelector(".paraFour");

let hideOrBlock = true;

iconOne.addEventListener("click", function () {
  if (hideOrBlock == true) {
    paraOne.style.display = "inline-block";
    iconOne.src = "assets/images/icon-minus.svg";
    hideOrBlock = false;
  } else {
    if (hideOrBlock === false) {
      paraOne.style.display = "none";
      iconOne.src = "assets/images/icon-plus.svg";
      hideOrBlock = true;
    }
  }
});

iconTwo.addEventListener("click", function () {
  if (hideOrBlock == true) {
    paraTwo.style.display = "inline-block";
    iconTwo.src = "assets/images/icon-minus.svg";
    hideOrBlock = false;
  } else {
    if (hideOrBlock === false) {
      paraTwo.style.display = "none";
      iconTwo.src = "assets/images/icon-plus.svg";
      hideOrBlock = true;
    }
  }
});

iconThree.addEventListener("click", function () {
  if (hideOrBlock == true) {
    paraThree.style.display = "inline-block";
    iconThree.src = "assets/images/icon-minus.svg";
    hideOrBlock = false;
  } else {
    if (hideOrBlock === false) {
      paraThree.style.display = "none";
      iconThree.src = "assets/images/icon-plus.svg";
      hideOrBlock = true;
    }
  }
});

iconFour.addEventListener("click", function () {
  if (hideOrBlock == true) {
    paraFour.style.display = "inline-block";
    iconFour.src = "assets/images/icon-minus.svg";
    hideOrBlock = false;
  } else {
    if (hideOrBlock === false) {
      paraFour.style.display = "none";
      iconFour.src = "assets/images/icon-plus.svg";
      hideOrBlock = true;
    }
  }
});
