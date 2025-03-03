document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.querySelector(".cookie-banner");
    const acceptButton = document.querySelector(".cookie-button.accept");
    const rejectButton = document.querySelector(".cookie-button.reject");
    const preferencesButton = document.querySelector(".cookie-button.preferences");

    // Check if user has already made a choice
    if (!localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "block"; // Show banner
    }

    // Accept all cookies
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });

    // Reject all cookies
    rejectButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "rejected");
        cookieBanner.style.display = "none";
    });

    // Placeholder for preferences (Expand this later)
    preferencesButton.addEventListener("click", function () {
        alert("Cookie Preferences functionality coming soon!"); 
    });
});