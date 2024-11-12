
document.addEventListener("DOMContentLoaded", function () {
    // Select all text input fields
    var inputs = document.querySelectorAll('input[type="text"]');

    // Add an event listener to each input field
    inputs.forEach(function (input) {
        input.addEventListener("input", function () {
            // Convert the input value to uppercase
            input.value = input.value.toUpperCase();
        });
    });
});


      function handleAppearanceChange() {
          var appearance = document.getElementById("Appearance").value;
          
          // Hide all sections by default
          document.getElementById("underGradSection").style.display = "none";
          document.getElementById("postGradSection").style.display = "none";
          document.getElementById("preparationSection").style.display = "none";
          document.getElementById("jobSection").style.display = "none";

          // Show specific section based on selection
          if (appearance === "Under Graduation") {
              document.getElementById("underGradSection").style.display = "block";
          } else if (appearance === "Post Graduation") {
              document.getElementById("postGradSection").style.display = "block";
          } else if (appearance === "Preparation For Examination") {
              document.getElementById("preparationSection").style.display = "block";
          } else if (appearance === "Doing Job") {
              document.getElementById("jobSection").style.display = "block";
          }
      }


       // Function to show popup notification
       function showPopup() {
        var popup = document.getElementById("popupNotification");
        popup.style.display = "block";

        // Hide the popup after 3 seconds
        setTimeout(function () {
          popup.style.display = "none";
        }, 3000);
      }

      // Handle form submission and reset
      document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("form");

        form.addEventListener("submit", function (e) {
          e.preventDefault(); // Prevent actual form submission for demonstration purposes

          // Show popup notification
          showPopup();

          // Submit the form via POST to Google Apps Script
          var xhr = new XMLHttpRequest();
          xhr.open("POST", form.action, true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

          // Collect form data
          var formData = new FormData(form);
          var params = new URLSearchParams(formData).toString();

          // Send form data
          xhr.send(params);

          // Reset the form fields after submission
          form.reset();
        });
      });
