const content = {
    "Overwhelmed": "It's okay to feel like this. Try the '5-4-3-2-1' rule: Name 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you can taste. Ground yourself. You're doing okay.",
    "Numb": "When everything feels like 'nothing,' try to change your temperature. Wash your face with cold water or hold a warm mug of tea. Let the physical sensation bring you back slowly.",
    "Restless": "Your mind is racing, so let's give your hands something to do. Go reorganize one small drawer, or draw a chaotic scribble on a piece of paper. Just one small physical task.",
    "Tired": "You have permission to rest. Not 'rest so you can do more later,' but just rest because you're human. The world can wait until tomorrow. Put your phone on 'Do Not Disturb' for 20 minutes.",
    "SelfCare": "Let's find a tiny joy. Go to YouTube and search for 'Lofi Hip Hop Radio' or 'Cute Red Panda videos.' Sometimes a 5-minute brain break is all we need."
};

function getSupport(mood) {
    document.getElementById('home-screen').classList.add('hidden');
    
    const display = document.getElementById('display-area');
    const title = document.getElementById('mood-title');
    const text = document.getElementById('suggestion-text');
    
    title.innerText = mood;
    text.innerText = content[mood];
    display.classList.remove('hidden');
}

function reset() {
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('display-area').classList.add('hidden');
}