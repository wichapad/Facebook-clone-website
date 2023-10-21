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

const newAccount = document.getElementById("new-create");
const formCreate = document.getElementById("signup");
const closeSignup = document.getElementById("close-signup");

newAccount.addEventListener("click", () => {
  formCreate.style.display = "block";
});
closeSignup.addEventListener("click", () => {
  formCreate.style.display = "none";
});
