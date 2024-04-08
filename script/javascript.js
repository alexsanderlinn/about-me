const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer")

document.getElementById('toggleNav').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('footer').classList.toggle('hidden');
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var distanceToTop = document.body.getBoundingClientRect().bottom;

    if (distanceToTop < window.innerHeight) {
      footer.style.bottom = '0';
    } else {
      footer.style.bottom = '-100px';
    }
  });