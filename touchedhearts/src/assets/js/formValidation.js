document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      // Collect Form Data
      const formData = {
          name: document.getElementById("name").value.trim(),
          email: document.getElementById("email").value.trim(),
          message: document.getElementById("message").value.trim(),
      };

      // Basic Validation
      if (!validateForm(formData)) {
          return;
      }

      try {
          // Send Data to the Server
          const response = await fetch("https://yourserver.com/api/contact", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
          });

          const result = await response.json();
          if (response.ok) {
              alert("Message sent successfully!");
              contactForm.reset();
          } else {
              alert("Failed to send message: " + result.error);
          }
      } catch (error) {
          alert("Something went wrong. Please try again.");
          console.error("Error:", error);
      }
  });
});

/**
* Validate Form Inputs
*/
function validateForm(data) {
  if (!data.name || !data.email || !data.message) {
      alert("All fields are required.");
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  if (data.message.length < 10) {
      alert("Message should be at least 10 characters.");
      return false;
  }

  return true;
}
