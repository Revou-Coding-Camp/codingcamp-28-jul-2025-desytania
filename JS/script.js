console.log("Script loaded successfully");

function validateForm() {
  const name = document.getElementById("name-input").value.trim();
  const date = document.getElementById("date-input").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const pesan = document.getElementById("pesan-input").value.trim();

  if (!name || !date || !gender || !pesan) {
    alert("Semua field harus diisi!");
    return;
  }

  const result = document.getElementById("result-form");
  result.textContent = `Hello, ${name}. Your message has been sent successfully!`;
}