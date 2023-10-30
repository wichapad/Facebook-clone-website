// show text content
function showMoretext() {
  const dotsContent = document.getElementById("dots-content");
  const showMore = document.getElementById("show-more-content");
  const subText = document.getElementById("subText-content");
  if (dotsContent.style.display === "block") {
    subText.style.display = "none";
  } else {
    dotsContent.style.display = "none";
    showMore.style.display = "none";
    subText.style.display = "block";
  }
}

// Open menu profile
const userProfile = document.getElementById("user-profile");
const menuProfile = document.getElementById("navbar-menu-profile");

userProfile.addEventListener("click", () => {
  if (menuProfile.style.display === "none") {
    menuProfile.style.display = "block";
  } else {
    menuProfile.style.display = "none";
  }
});
// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
  window.location.href = "login.html";
});
