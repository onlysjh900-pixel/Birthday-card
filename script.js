const openGiftBtn = document.getElementById('openGiftBtn');
const toLetterBtn = document.getElementById('toLetterBtn');
const toProposalBtn = document.getElementById('toProposalBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');

// မျက်နှာစာမျက်နှာ အပြောင်းအလဲများ
openGiftBtn.addEventListener('click', () => {
  page1.classList.remove('active');
  page2.classList.add('active');
  triggerConfetti();
});

toLetterBtn.addEventListener('click', () => {
  page2.classList.remove('active');
  page3.classList.add('active');
  startTypewriter();
});

toProposalBtn.addEventListener('click', () => {
  page3.classList.remove('active');
  page4.classList.add('active');
});

// No ခလုတ် ပြေးမည့် ပုံစံ
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Yes နှိပ်လျှင်
yesBtn.addEventListener('click', () => {
  page4.classList.remove('active');
  page5.classList.add('active');
  triggerBigConfetti();
});

// စာရိုက်ပြမည့် ဖန်ရှင် (Typewriter Effect)
const letterText = "Happy 25th Birthday to the most amazing person in my life, my dear hubby! 🎂✨\n\nThank you for always being my safe place, my happiness, and my greatest blessing. May this special year bring you endless joy, success, and all the love you deserve. I'm so lucky to have you by my side. Let's create more beautiful memories together! Love you so much! ❤️🥰";

function startTypewriter() {
  const textContainer = document.getElementById('typewriterText');
  textContainer.innerHTML = "";
  let i = 0;
  
  function type() {
    if (i < letterText.length) {
      textContainer.innerHTML += letterText.charAt(i);
      i++;
      setTimeout(type, 35);
    } else {
      toProposalBtn.classList.remove('hidden');
    }
  }
  type();
}

// ကွန်ဖက်တီ မိုးရွာခြင်း ဖန်ရှင်များ
function triggerConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function triggerBigConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
   }
