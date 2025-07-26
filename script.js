function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
  
    alert("Login successful!");
    return true;
  }
  