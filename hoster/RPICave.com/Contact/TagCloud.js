$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){
        window.location.hash = hash;
      });
    } 
  });
});

const myTags = [
  'JavaScript', 'CSS', 'HTML', 'Node.js', 'Docker', 'React', 'Express.js'
];
var tagCloud = TagCloud('.content', myTags, {
  radius: 250,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true

});
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

