function openBox() {
    document.querySelector(".love-box").style.display = "none";
    document.getElementById("message").style.display = "block";
    }
    
    const notes = [
    "🌸 Thank you for being the most beautiful gift in my life. ✨",
    "🌷 I hope this little surprise can make you smile. 😊",
    "🌹 You are someone I really admire and appreciate. 💫",
    "🌻 You are very important to me, always remember that. 💖",
    "🌼 You are my lucky charm. 🍀",
    "🫂 I am always here for you. Don't forget that. 🤍",
    "💋 Sending you so many ummmaaaaaaa. 😘",
    "💖 I just wanted to remind you that I love you. 🌙✨"
];

let count = 0;



function showNote() {

    document.getElementById("note").innerHTML = notes[count];

    count++;

    if (count >= notes.length) {

    document.getElementById("final-message").style.display = "block";

    document.getElementById("final-message").innerHTML =
    "🌟💖 You found the secret garden 💖🌟<br>Thank you for being a special part of my life. 🦋🌸";

}

}