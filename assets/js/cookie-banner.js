document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.querySelector(".cookie-banner");
    const acceptButton = document.querySelector(".cookie-button.accept");
    const rejectButton = document.querySelector(".cookie-button.reject");
    const preferencesButton = document.querySelector(".cookie-button.preferences");

    // Check if the user has already made a choice
    if (!localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "block"; // Show banner if no choice is made
    }

    // Function to set cookie preference
    function setCookiePreference(choice) {
        localStorage.setItem("cookieConsent", choice);
        cookieBanner.style.display = "none"; // Hide banner after selection
    }

    // Event listeners for buttons
    acceptButton.addEventListener("click", function () {
        setCookiePreference("accepted");
    });

    rejectButton.addEventListener("click", function () {
        setCookiePreference("rejected");
    });

    preferencesButton.addEventListener("click", function () {
        alert("Preferences feature coming soon!"); // You can replace this with a real settings modal
    });
});