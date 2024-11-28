let app = document.getElementById('annie');






let typewriter = new Typewriter(app, {
  loop: false,
  cursor: null,
  delay: 20,
});


typewriter
  .typeString('<span style="color: #bfd7ea; ">Hi👋 <br> I am Annie Salis')
  .pauseFor(300)
  .typeString('<br> <span style="color: #5c685f;"><h1> FrontEnd Engineer || Virtual Support')
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

