// Start Scroll To Top
// Catch My Button
let myBtn = document.querySelector(".scroll button");
window.onscroll = function () {
  if (scrollY > 600) {
    myBtn.style.opacity = "1";
  } else {
    myBtn.style.opacity = "0";
  }
};

myBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// End Scroll To Top

// Catch elements
// catch heading of features
//Catch Rest Features Containers
const restFeturesContainers = document.querySelectorAll(
  ".rest-features>.container"
);

// Catch all of heading
const allOfHeadingParent = document.querySelector(
  ".rest-features-heading .container .row"
);
const allOfFeaturesHeading = document.querySelectorAll(
  ".rest-features-heading .col"
);

const modisitHeading = document.getElementById("Modisit");
const praesentiHeading = document.getElementById("Praesenti");
const explicaHeading = document.getElementById("Explica");
const nustrumHeading = document.getElementById("Nustrum");

// Catch features elements
const modisitRow = document.querySelector(".modisit .row");

const praesentitRow = document.querySelector(".praesenti .row");

const explicaRow = document.querySelector(".explica .row");

const nustrumtRow = document.querySelector(".nustrum .row");

// add active class to the selected feature heading
allOfHeadingParent.addEventListener("click", (e) => {
  allOfFeaturesHeading.forEach((e) => {
    e.classList.remove("active");
  });

  e.target.classList.add("active");
});

modisitHeading.addEventListener("click", () => {
  restFeturesContainers.forEach((e) => {
    e.classList.add("hide");

    restFeturesContainers[0].classList.remove("hide");
    restFeturesContainers[0].classList.add("block");
  });
});
praesentiHeading.addEventListener("click", () => {
  restFeturesContainers.forEach((e) => {
    e.classList.add("hide");

    restFeturesContainers[1].classList.remove("hide");
    restFeturesContainers[1].classList.add("block");
  });
});
explicaHeading.addEventListener("click", () => {
  restFeturesContainers.forEach((e) => {
    e.classList.add("hide");

    restFeturesContainers[2].classList.remove("hide");
    restFeturesContainers[2].classList.add("block");
  });
});
nustrumHeading.addEventListener("click", () => {
  restFeturesContainers.forEach((e) => {
    e.classList.add("hide");

    restFeturesContainers[3].classList.remove("hide");
    restFeturesContainers[3].classList.add("block");
  });
});

// Start Projects
//catch project ul

const projectUl = document.querySelector(".projects-list ul");

//Catch my lis
const projectLis = document.querySelectorAll(".projects .container ul li");

const projectLink = document.querySelectorAll(".projects .container ul li a");

const myProjectCols = document.querySelectorAll(
  ".projects .container .row>div"
);

//active function

//detect which to appear function
// Project Function
projectLis.forEach((e) => {
  e.addEventListener("click", (element) => {
    if (
      element.target.classList.contains("active") &&
      element.target.classList.contains("main")
    ) {
      myProjectCols.forEach((lis) => {
        lis.style.display = "block";
      });
    } else {
      myProjectCols.forEach((lis) => {
        lis.style.display = "none";
        for (let i = 0; i < myProjectCols.length; i++) {
          if (
            element.target.dataset.sections ===
            myProjectCols[i].dataset.sections
          ) {
            myProjectCols[i].style.display = "block";
          }
        }
      });
    }
  });
});
