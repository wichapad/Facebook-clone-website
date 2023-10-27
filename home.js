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
