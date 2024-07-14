'use strict';
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

const slides = document.querySelectorAll(".video-slide");
const btns = document.querySelectorAll('.nav-btn');
const contents = document.querySelectorAll('.content')

    
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

document.querySelector('.x').addEventListener('click', (e) => {
  navigation.classList.remove('active')
})

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const clicked = e.target;

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    btns.forEach(btn => btn.classList.remove('active'));
    slides.forEach(slide => slide.classList.remove('active'));
    contents.forEach(content => content.classList.remove('content--active'))
   

    // add active classes
    clicked.classList.add('active')
    console.log(clicked);

    document.querySelector(`.video--${clicked.dataset.btn}`).classList.add('active')
    document.querySelector(`.content--${clicked.dataset.btn}`).classList.add('content--active')
  })
})

