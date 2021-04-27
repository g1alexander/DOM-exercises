const d = document;

export default function scrollspy(scrollspy, menu) {
  let options = {
    root: null, // relative to document viewport
    rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
    threshold: 0.5, // visible amount of item shown in relation to root
  };
  const callback = (entries) => {
    let $menu = d.querySelectorAll(menu);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $menu.forEach((e) => {
          if (
            !e.classList.contains("active") &&
            e.hash.replace("#", "") === entry.target.id
          ) {
            e.classList.add("active");
            e.classList.remove("link-menu");
          } else {
            e.classList.remove("active");
            e.classList.add("link-menu");
          }
        });
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);

  let $elem = d.querySelectorAll(scrollspy);
  $elem.forEach((e) => {
    observer.observe(e);
  });
}
