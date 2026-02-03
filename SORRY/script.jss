const lines = [
"Hey, I’m really sorry. I didn’t mean to ignore you at all.",
"My brain lagged, not my feelings.",
"You matter to me more than my bad timing shows.",
"I should’ve replied sooner. That one’s on me.",
"I’d never ignore you on purpose.",
"Communication fail from my side.",
"I value our friendship a lot.",
"That silence didn’t mean distance.",
"Thank you for being patient with me.",
"I'm really, truly sorry."
];

let i = 0;
const text = document.getElementById("text");
const progress = document.querySelector(".progress");

function typeLine(line, callback) {
    let j = 0;
    text.innerHTML = "";
    const typing = setInterval(() => {
        text.innerHTML += line[j];
        j++;
        if (j >= line.length) {
            clearInterval(typing);
            setTimeout(callback, 1500);
        }
    }, 35);
}

function next() {
    progress.style.width = ((i + 1) / lines.length) * 100 + "%";
    typeLine(lines[i], () => {
        i++;
        if (i < lines.length) next();
        else text.innerHTML += "<br><br>💛 Sending you a hug.";
    });
}

next();

/* Floating hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 400);
