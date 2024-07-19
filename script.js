/*
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running!'); // Confirm JS is running

    const container = document.querySelector('.circle-container');
    const numberOfCircles = 50; // Number of circles

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Random size for circles
        const size = Math.random() * 5 + 10; // Size between 10px and 30px
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Random position
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.left = `${Math.random() * 100}vw`;

        // Random animation duration and delay
        circle.style.animationDuration = `${Math.random() * 15 + 5}s`; // Duration between 5s and 20s
        circle.style.animationDelay = `${Math.random() * 5}s`; // Delay between 0s and 5s

        container.appendChild(circle);

        console.log(`Circle ${i} created:`, circle); // Log each circle
    }
});
*/


// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running!');
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const particleContainer = document.querySelector('.particles');
    const starBackground = document.querySelector('.star-background');
    const circleContainer = document.querySelector('.circle-container');

    // Create particles
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particleContainer.appendChild(particle);
    }

    // Create stars
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starBackground.appendChild(star);
    }

    // Create circles
    for (let i = 0; i < 50; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Random size for circles
        const size = Math.random() * 10 + 8; // Size between 10px and 30px
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Random vertical position and starting off-screen to the left
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.left = `-${size}px`; // Start just off the left edge

        // Random animation duration and delay
        circle.style.animationDuration = `${Math.random() * 15 + 5}s`; // Duration between 5s and 20s
        circle.style.animationDelay = `${Math.random() * 5}s`; // Delay between 0s and 5s

        circleContainer.appendChild(circle);
        console.log(`Circle ${i} created:`, circle); // Log each circle
    }
});

//cursor
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (e){
    cursor.style.top = `${e.clientY - cursor.offsetHeight/2}px`;
    cursor.style.left = `${e.clientX - cursor.offsetWidth/2}px`;

});