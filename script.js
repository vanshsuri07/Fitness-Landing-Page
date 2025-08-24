let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[index].classList.add("active");
}

document.getElementById("nextTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById("prevTestimonial").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

showTestimonial(currentTestimonial);

const scheduleData = [
  { day: "Monday", time: "6:00 AM - 8:00 PM" },
  { day: "Tuesday", time: "6:00 AM - 8:00 PM" },
  { day: "Wednesday", time: "6:00 AM - 8:00 PM" },
  { day: "Thursday", time: "6:00 AM - 8:00 PM" },
  { day: "Friday", time: "6:00 AM - 8:00 PM" },
  { day: "Saturday", time: "8:00 AM - 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function renderSchedule() {
  const scheduleContainer = document.getElementById("schedule");
  if (!scheduleContainer) return;
  scheduleContainer.innerHTML = "";
  scheduleData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("schedule-item");
    div.innerHTML = `<strong>${item.day}:</strong> ${item.time}`;
    scheduleContainer.appendChild(div);
  });
}
renderSchedule();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    alert(
      `Thanks, ${name}! We have received your message and will get back to you soon.`
    );

    this.reset();
  });

document.querySelector(".cta-button").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});
