let app = document.getElementById('annie');






let typewriter = new Typewriter(app, {
  loop: false,
  cursor: null,
  delay: 20,
});


typewriter
  .typeString('<span style="color: #bfd7ea; ">Hi👋 <br> I am Annie Salis')
  .pauseFor(300)
  .typeString('<br> <span style="color: #5c685f;">-Sales Engineer <br>-Web Engineer <br> -Virtual Support')
  .pauseFor()
  .start();

  function changeTheme() {
    let body = document.querySelector("body");

    // body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  }

  let themeButton = document.querySelector("button");
  themeButton.addEventListener("click", changeTheme);

  gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("div").forEach((section) => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 50 }, // Start state
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // When 80% of the viewport hits the top of the section
                end: "bottom 20%", // When 20% of the viewport leaves the section
                toggleActions: "play none none none", // Play animation on scroll
            },
        }
    );
});
