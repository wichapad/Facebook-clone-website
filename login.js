// สร้างรายการวัน
const selectDay = document.getElementById("select-day");
for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.value = day;
  option.text = day;
  selectDay.appendChild(option);
}

// สร้างรายการปี
const selectYear = document.getElementById("select-year");
const currentYear = new Date().getFullYear();
const yearsRange = 10; // ปรับเป็นขอบเขตของปีที่คุณต้องการ
for (let year = currentYear; year >= currentYear - yearsRange; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  selectYear.appendChild(option);
}

// click signup users
const newAccount = document.getElementById("new-create");
const formCreate = document.getElementById("signup");
const closeSignup = document.getElementById("close-signup");

newAccount.addEventListener("click", () => {
  formCreate.style.display = "block";
});
closeSignup.addEventListener("click", () => {
  formCreate.style.display = "none";
});

// click login users
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "admin") {
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});


