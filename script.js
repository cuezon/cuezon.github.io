// Mood message
const messages = [
  `Hi. I just want to say sorry for bursting out earlier love.. ( •̯́ ^ •̯̀). You didn't deserve that. I know you would help with babysitting the kids today. Na-overwhelm lang talaga ako kanina sa ingay, kay timmy na umiiyak, ingay nila jyk, tapos making sure na makakain na tayong lahat tas ang sikip pa ng kwarto nahihirapan ako makagalaw... Come to me if okay na ikaw, ah? <( °^° )>`
];

// Show mood message
function showMessage() {
  const msgEl = document.getElementById("message");
  msgEl.innerText = messages[0];
  msgEl.classList.remove("show");
  void msgEl.offsetWidth;
  msgEl.classList.add("show");

  // Optional: random pastel background
  const backgrounds = [
    "linear-gradient(135deg, #fef6f6, #fffefd)",
    "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
    "linear-gradient(135deg, #fff9e6, #fce4ec)",
    "linear-gradient(135deg, #e8f5e9, #f3e5f5)"
  ];
  document.body.style.background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

// Floating emoji background
const emojiBackground = document.getElementById("emoji-background");
const emojiList = ["💐", "🐰", "🩵"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 20 + 15 + "px";
  emoji.style.animationDuration = Math.random() * 10 + 5 + "s";
  emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
  emojiBackground.appendChild(emoji);

  // Remove emoji after animation ends
  setTimeout(() => {
    emoji.remove();
  }, parseFloat(emoji.style.animationDuration) * 1000);
}

// Create emojis continuously
setInterval(createEmoji, 300);
