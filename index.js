let selectedIndex = 0;

const articles = document.getElementsByTagName("article");

function slideRight() {
  console.log(articles.length);
  let nextIndex;
  if (selectedIndex < articles.length - 1) nextIndex = selectedIndex + 1;
  else nextIndex = 0;
  const selectedSlide = document.querySelector(
      `[data-index="${selectedIndex}"]`
    ),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  selectedSlide.dataset.status = "right-out";
  nextSlide.dataset.status = "left";
  setTimeout(() => {
    nextSlide.dataset.status = "selected";
  });

  selectedIndex = nextIndex;
}
function slideLeft() {
  console.log(articles.length);
  let nextIndex;
  if (selectedIndex > 0) nextIndex = selectedIndex - 1;
  else nextIndex = articles.length - 1;
  const selectedSlide = document.querySelector(
      `[data-index="${selectedIndex}"]`
    ),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  selectedSlide.dataset.status = "left-out";
  nextSlide.dataset.status = "right";
  setTimeout(() => {
    nextSlide.dataset.status = "selected";
  });
  selectedIndex = nextIndex;
}
