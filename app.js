document.getElementById("main-btn").addEventListener("click", function () {
    this.style.display = "none";

    let title = document.getElementById("title");
    title.textContent = "💕Will you be my Valentine?💕";

    let content = document.getElementById("content");
    content.classList.remove("hidden");

    let catImg = document.getElementById("cat-img");
    setTimeout(() => {
        catImg.style.right = "0";
    }, 100);
});

document.getElementById("yes-btn").addEventListener("click", function () {
    document.getElementById("yes-btn").disabled = true;
    document.getElementById("yes-btn").style.opacity = "0.5";

    let catImg = document.getElementById("cat-img");
    catImg.src = "resources/dancing-cat.gif";

    document.getElementById("confetti-message").classList.remove("hidden");
    createConfetti();

    document.getElementById("no-btn").disabled = true;
    document.getElementById("no-btn").style.opacity = "0.5";
});

document.getElementById("no-btn").addEventListener("click", function () {
    document.body.style.background = "red";
    document.querySelector("footer").style.background = "red";
    document.getElementById("glitch-message").classList.remove("hidden");

    document.getElementById("yes-btn").disabled = true;
    document.getElementById("yes-btn").style.opacity = "0.5";

    document.getElementById("no-btn").disabled = true;
    document.getElementById("no-btn").style.opacity = "0.5";

    let catImg = document.getElementById("cat-img");
    catImg.src = "resources/angry-cat.jpeg";

    setTimeout(() => {
        document.body.style.background = "rgb(245, 185, 237)";
        document.querySelector("footer").style.background = "rgb(245, 185, 237)";
        document.getElementById("glitch-message").classList.add("hidden");

        document.getElementById("yes-btn").disabled = false;
        document.getElementById("yes-btn").style.opacity = "1";

        catImg.src = "resources/cat.png";
    }, 3000);
});

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const text = "You’ve got mail… 💌";
    let index = 0;
    const titleElement = document.getElementById("title");
    const buttonElement = document.getElementById("main-btn");

    function typeWriter() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            buttonElement.style.display = "block";
            titleElement.classList.remove("blinking-cursor");
        }
    }

    titleElement.textContent = "";
    titleElement.classList.add("blinking-cursor");
    buttonElement.style.display = "none";
    typeWriter();
});

