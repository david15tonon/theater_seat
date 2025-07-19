const seeMoreBtn = document.getElementById("see");
const seatsContainer = document.querySelector(".seats");
let seatCount = 4;

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

seeMoreBtn.addEventListener("mouseenter", () => {
    for (let i = 0; i < 3; i++) {
        seatCount++;
        const newSeat = createSeatCard(seatCount);
        seatsContainer.appendChild(newSeat);
    }
});
