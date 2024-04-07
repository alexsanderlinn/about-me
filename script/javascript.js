const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer")

document.getElementById('toggleNav').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.footer').classList.toggle('hidden');
});