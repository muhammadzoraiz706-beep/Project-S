const messages = [
    "You are the only best human being I know. I'm so glad you're or were in my life. 🌸",
    "Just a reminder that you are cared for, even on the days you feel invisible. 🎀",
    "I believe in you more than words can say. Always keep shining, Always be happy. ✨",
    "You make the world a little brighter just by being you. Sending you so much love. 💖"
];

function openGift(index) {
    const modal = document.getElementById('message-modal');
    const text = document.getElementById('gift-text');
    
    text.innerText = messages[index];
    modal.style.display = 'flex';
}

function closeGift() {
    const modal = document.getElementById('message-modal');
    modal.style.display = 'none';
}

// Background Floating Hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    document.body.appendChild(heart);

    const animation = heart.animate([
        { transform: 'translateY(0)', opacity: 0.8 },
        { transform: 'translateY(-110vh)', opacity: 0 }
    ], {
        duration: 4000 + Math.random() * 3000,
        easing: 'linear'
    });

    animation.onfinish = () => heart.remove();
}

setInterval(createFloatingHeart, 500);
