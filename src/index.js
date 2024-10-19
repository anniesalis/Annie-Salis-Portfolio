let app = document.getElementById('annie');






let typewriter = new Typewriter(app, {
  loop: false,
  cursor: null,
  delay: 20,
});


typewriter
  .typeString('<span style="color: powderblue;">Hi, I am Annie Salis')
  .pauseFor(300)
  .typeString('<br> <span style="color: blueviolet;"><h2> A Front-End Developer Based in Europe!')
  .pauseFor()
  .start();



