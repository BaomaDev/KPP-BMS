gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".part1",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  }
})
.to(".imageinter", {
  x: -800, // Move the image to the left
  y: 650, // Move the image down
  scale: 0.7, // Scale the image down to 50% of its original size
}, 0);

//receive email
document.getElementById("emailForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  // Simple email validation using a regular expression
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
  } else {
      // You can replace this alert with your own submission logic (e.g., sending the email to a server).
      alert("Email submitted: " + email);
      emailInput.value = ""; // Clear the input field
  }
});

