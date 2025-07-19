const seeMoreBtn = document.getElementById("see");
const seatsContainer = document.querySelector(".seats");
let seatCount = 4;
let timeoutId; // pour stocker le délai si besoin d'annuler plus tard

function createSeatCard(number) {
    const seatDiv = document.createElement("div");
    seatDiv.classList.add("seat-card", "fade-in");

    const title = document.createElement("h4");
    title.textContent = `Seat ${number}`;

    const desc = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = `This is the seat ${number}`;
    const img = document.createElement("img");
    img.src = "assets/media/images/seat.jpg";
    img.alt = `Seat ${number}`;
    img.width = 100;
    img.height = 100;

    desc.appendChild(span);
    desc.appendChild(document.createElement("br"));
    desc.appendChild(img);

    const button = document.createElement("button");
    button.textContent = "Book Now";

    seatDiv.appendChild(title);
    seatDiv.appendChild(desc);
    seatDiv.appendChild(button);

    return seatDiv;
}

// Survol du bouton
seeMoreBtn.addEventListener("mouseenter", () => {
    timeoutId = setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            seatCount++;
            const newSeat = createSeatCard(seatCount);
            seatsContainer.appendChild(newSeat);
        }
    }, 800); // délai de 1000 millisecondes = 1s
});

// (optionnel) Si tu veux annuler l’ajout si la souris sort avant 1s :
seeMoreBtn.addEventListener("mouseleave", () => {
    clearTimeout(timeoutId);
});

const backToTopBtn = document.getElementById("backToTop");

// Affiche ou cache le bouton selon le scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll fluide vers le haut
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
