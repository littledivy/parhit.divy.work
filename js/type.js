window.addEventListener('load',function () {
//  $('.box').fadeOut('slow');
//$('body').fadeIn('slow');
  console.log('Loaded');
  var app = document.getElementById('type-in');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('A <strong>15 year old</strong> student!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Loves music')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<strong>Guitarist</strong> & <strong>Singer</strong>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Living in <strong>India</strong>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Yayy!')
      .start();
  });
