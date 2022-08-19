
const slides=document.getElementsByClassName("carousel-item")
let slidePosition=0
const totalSlides= slides.length


document.getElementById("nextBtn").addEventListener("click", moveToNextSlide)

document.getElementById("prevBtn").addEventListener("click", moveToPrevSlide)

function hideAllSlides(){
    for (let screen of slides){
        screen.classList.remove("carousel-item-visible")
        screen.classList.add("carousel-item-hidden")
}
}

// moving to next slide
function moveToNextSlide(){
    hideAllSlides()
    
    // jump back to first
    if (slidePosition===totalSlides - 1){
        slidePosition=0
    }
    else{
        slidePosition++
    }
    
    slides[slidePosition].classList.add("carousel-item-visible")

}

function moveToPrevSlide(){
    hideAllSlides()

    if (slidePosition===0){
        slidePosition= totalSlides - 1
    }

    else{
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

// accordian

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
