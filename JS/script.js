console.log("Script loaded successfully");

function validateForm() {
  const name = document.getElementById("name-input").value;
  const date = document.getElementById("date-input").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const pesan = document.getElementById("pesan-input").value;

  console.log(name, date, gender, pesan);
  if (name === "") {
    alert("form cannot be empty");
  } else {
    const result = document.getElementById("result-form");
    result.textContent = `Hello, ${name}. Your message has been sent successfully!`;
  }
} 