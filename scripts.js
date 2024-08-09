// const links = document.querySelector(".link");
//console.log(links);

const myObserver = new IntersectionObserver((entries) => {
  //   console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
// myObserver.observe(links);

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));
