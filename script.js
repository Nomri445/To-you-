function openBox() {
    document.querySelector(".love-box").style.display = "none";
    document.getElementById("message").style.display = "block";
}

const notes = [
    "🌸 Thank you for being the most beautiful gift in my life.",
    "🌷 i hope i can make you smile by this .",
    "🌹 You are someone I really admire .",
    "🌻 you are very important to me.",
    "🌼 you are my lucky charm darling.",
    "🫂 i am always here for you, don't forget.",
    "💋 so many ummmaaaaaaa.",
    "💖 i just wanted to remind you that i love you."
];

let count = 0;



function showNote() {

    document.getElementById("note").innerHTML = notes[count];

    count++;

    if (count >= notes.length) {

        document.getElementById("final-message").style.display = "block";

    }

}