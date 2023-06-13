document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var degree = document.getElementById("degree").value;
    var duration = document.getElementById("duration").value;
    var field = document.getElementById("field").value;
  
    // Create user object
    var user = {
      fullName: fullName,
      username: username,
      phone: phone,
      email: email,
      password: password,
      degree: degree,
      duration: duration,
      field: field
    };
  
    // Perform validation or further processing
    console.log(user);
  });
  
  function updateDuration() {
    var degree = document.getElementById("degree").value;
    var duration = getDuration(degree);
    document.getElementById("duration").value = duration;
  }
  
  function getDuration(degree) {
    switch (degree) {
      case "bachelor":
        return "4 years";
      case "master":
        return "2 years";
      case "doctorate":
        return "5 years";
      default:
        return "";
    }
  }
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordIcon = document.querySelector(".password-icon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.style.backgroundImage = "url('password-icon-visible.png')";
    } else {
      passwordInput.type = "password";
      passwordIcon.style.backgroundImage = "url('password-icon.png')";
    }
  }
  