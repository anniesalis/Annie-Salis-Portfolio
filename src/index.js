let app = document.getElementById('welcome-message');



let typewriter = new Typewriter(app, {
  loop: false,
  cursor: null,
  delay: 20,
});

typewriter
  .typeString( 'Hi, My Name is Annie Salis!')
  .pauseFor(300)
  .typeString('<br> <span style="color: red;"><h1> A Front-End Developer Based in Portugal!')
  .pauseFor()
  .start();
