const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainText = document.getElementById("mainText");
const bottomText = document.getElementById("bottomText");
const yesGif = document.getElementById("yesGif");
const noGif = document.getElementById("noGif");

let yesCount = 0;
let noCount = 0;
let yesScale = 1;

const yesPhrases = [
    "YAYYY 💖",
    "BEST CHOICE 😌",
    "YOU'RE SO CUTE 🥰",
    "SEE?? GOOD 😎",
    "I KNEW IT 😚",
    "SMART MOVE ✨",
    "OKAY FINAL??? 👀",
    "Do u wanna continue? (｡•̀ᴗ-)✧"
];

const noPhrases = [
    "Aww 🥺",
    "That hurts 💔",
    "Why like this 😭",
    "You sure?? 😢",
    "I'm sad now 😞",
    "Last chance 😩",
    "Think again 👀",
    "akala mo talaga may option ka noh? blehhh 😝"
];

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function sparkleRain() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.textContent = Math.random() > 0.5 ? "✨" : "💖";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
}

setInterval(sparkleRain, 300);

yesBtn.addEventListener("click", () => {

    if (yesCount < 8) {

        bottomText.textContent = yesPhrases[yesCount];

        yesScale += 1; // EVEN BIGGER growth
        yesBtn.style.transform = `scale(${yesScale})`;

        // Move texts FAR away based on scale
        const moveAmount = yesScale * 40;

        mainText.style.transform = `translateY(-${moveAmount}px)`;
        bottomText.style.transform = `translateY(${moveAmount}px)`;

        // SHOW YOUR YES GIF HERE
        yesGif.src = "PUT_YOUR_YES_GIF_LINK_HERE";
        yesGif.style.display = "block";

        yesCount++;
    }

    if (yesCount === 8) {
        setTimeout(() => {
            window.location.href = "page2.html";
        }, 1200);
    }
});


// NO BUTTON
noBtn.addEventListener("click", () => {

    if (noCount < 8) {
        bottomText.textContent = noPhrases[noCount];

        // SHOW YOUR NO GIF HERE
        noGif.src = "images/cat-cute.gif";
        noGif.style.display = "block";

        moveNoButton();
        noCount++;
    }

    if (noCount === 8) {
        noBtn.textContent = "Yes 💗";
        mainText.textContent = "akala mo talaga may option ka noh? blehhh 😝";

        setTimeout(() => {
            window.location.href = "page2.html";
        }, 1200);
    }
});
