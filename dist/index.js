// fix btn reservation
document.addEventListener("DOMContentLoaded", () => {
  const sticky = document.querySelector(".sticky-booking-btn");

  document.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      sticky.classList.remove("translate-y-full");
    } else {
      sticky.classList.add("translate-y-full");
    }
  });


// TimeDown
async function fetchEndTime() {
  const res = await fetch("/endtime"); // GET only
  const data = await res.json();
  return data.endTime ? new Date(data.endTime) : null;
}

async function startCountdown() {
  let endTime = await fetchEndTime();

  if (!endTime) {
    document.getElementById("timer").textContent = "Not available";
    return;
  }

  function updateCountdown() {
    const now = new Date();
    const diff = Math.max(0, Math.floor((endTime - now) / 1000));
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;

    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown();

// Gallery
// document.addEventListener("DOMContentLoaded", () => {
//   const gallerysImg = document.querySelectorAll(".img")
//   const showGallery = document.getElementById("gallery-show")
//   const gallery = document.querySelector(".gallery")

//   gallerysImg.forEach((item) => {
//     item.addEventListener('click', (e) => {
//       showGallery.setAttribute('src', e.target.getAttribute("src"))
//       gallery.classList.remove("hidden")
//     })
//   })

//   const closeGallery = document.getElementById("close-gallery");

//   closeGallery.addEventListener("click", () => {
//     gallery.classList.add("hidden")
//   })

// })


// display reservation pop up when scroll 


  const resPopUp = document.getElementById("reservationPopup");
  var show = false

  document.addEventListener("scroll", () => {

    if (window.scrollY >= 700) {
      if (!show) {
        resPopUp.classList.remove("hidden");
        resPopUp.classList.add("flex");
        show = true
      }
    }
  });

});