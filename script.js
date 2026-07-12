function openBox() {
    document.querySelector(".love-box").style.display = "none";
    document.getElementById("message").classList.remove("hidden");
}

const notes = [
    "🌸 Thank you for being the most beautiful gift in my life. 🫂",
    "🌷 I hope this little surprise can make you smile. 🫣👀",
    "🌹 You are someone I really admire and appreciate. 💫",
    "🌻 You are very important to me, always remember that. 💖",
    "🌼 You are my lucky charm. 🍀",
    "🫂 I am always here for you. Don't forget that. 🤍",
    "💋 Sending you so many ummmaaaaaaa. 😘",
    "💖 I just wanted to remind you that I love you. 🌙✨"
];

function showNote(index) {

    document.getElementById("note").innerHTML = notes[index];

    if (index === notes.length - 1) {
        document.getElementById("lock").style.display = "block";
    }

}

function unlock() {

    let answer = document.getElementById("password").value;

    if (answer.toLowerCase() === "maaku") {

        document.getElementById("secret").classList.remove("hidden");

    } else {

        alert("Try again 🌸");

    }

}