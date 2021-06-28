const section = document.querySelectorAll("section");
const menu = document.querySelectorAll(".nav__item");
const el = [...menu];

const revealCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  const sectionName = entry.target.dataset.sect;

  el.forEach((e) => {
    if (sectionName === e.dataset.src) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });

  if (!entry.isIntersecting) return;
};

const sectObserver = new IntersectionObserver(revealCallback, {
  root: null,
  threshold: 0.8,
});

section.forEach(function (sections) {
  sectObserver.observe(sections);
});

// //////////////
