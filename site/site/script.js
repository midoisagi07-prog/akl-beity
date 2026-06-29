const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
}

function filterMenu(category) {
const cards = document.querySelectorAll(".menu-grid .card");

cards.forEach(card => {
if (category === "all") {
card.style.display = "block";
} else if (card.classList.contains(category)) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
bookingForm.addEventListener("submit", function (e) {
e.preventDefault();
alert("تم إرسال الحجز بنجاح، سنتواصل معك قريباً.");
bookingForm.reset();
});
}

const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviewsContainer");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function showReviews() {
if (!reviewsContainer) return;

reviewsContainer.innerHTML = "";

reviews.forEach(review => {
reviewsContainer.innerHTML += `
<div class="card">
<h3>${review.name}</h3>
<p>${review.rating}</p>
<p>${review.comment}</p>
</div>
`;
});
}

if (reviewForm) {
showReviews();

reviewForm.addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("customerName").value;
const rating = document.getElementById("customerRating").value;
const comment = document.getElementById("customerComment").value;

reviews.push({ name, rating, comment });

localStorage.setItem("reviews", JSON.stringify(reviews));

showReviews();
reviewForm.reset();
});
}