const hunts = [
    // Escape the House Hunt
    [
        { clue: "I show your face but I’m not a photo. I hang on walls and doors. Where am I?", answer: "mirror" },
        { clue: "I have pages but no homework. I’m quiet unless you drop me. I live where stories sleep.", answer: "bookshelf" },
        { clue: "I open wide but never talk. I keep food safe and cold. Don’t forget to close me!", answer: "fridge" },
        { clue: "I go round and round but never get dizzy. I clean but hate socks in pairs.", answer: "washing machine" },
        { clue: "I have hands but no arms. I never clap, but I’m always right on time.", answer: "clock" },
        { clue: "I hide your feet when you’re not home. I like pairs, but I’m often missing one.", answer: "shoe rack" },
        { clue: "I’m soft, I’m comfy, and I steal naps. People sit on me “just for a minute”.", answer: "couch" },
        { clue: "I light up the dark but disappear by day. Flip me on.", answer: "lamp" },
        { clue: "I’m full of secrets, but I don’t talk. You knock before opening me.", answer: "bedroom door" },
        { clue: "You cracked every lock! The final key is hidden where treasures are kept safe.", answer: "locked box" },
    ],
    // Fortnite IRL Hunt
    [
        { clue: "You’ve dropped in. First loot location: Where controllers go when the game is off.", answer: "gaming desk" },
        { clue: "Shields up! Find the place where drinks recharge HP.", answer: "fridge" },
        { clue: "Storm incoming 🌪️ Where do shoes hide when the storm hits outside?", answer: "entrance" },
        { clue: "You need mats. Wood, brick, metal… Find where tools live.", answer: "garage" },
        { clue: "Campfire deployed 🔥 Where the family gathers to chill.", answer: "lounge room" },
        { clue: "Inventory check. You can’t win without sleep.", answer: "bed" },
        { clue: "Chest nearby… I hear it. Where secrets are stored behind closed doors.", answer: "wardrobe" },
        { clue: "Reboot van activated ⚡ Where devices come back to life.", answer: "phone charger" },
        { clue: "High ground wins games. Go where you can see the whole room.", answer: "stairs" },
        { clue: "Final circle. Only one remains. Where battles are watched, not played.", answer: "tv" },
        { clue: "One last challenge… Look where snacks disappear during long sessions.", answer: "pantry" },
        { clue: "VICTORY ROYALE 🏆 Claim your reward where legends are made.", answer: "prize location" },
    ],
    // Hacker/System Breach Hunt
    [
        { clue: "SYSTEM ONLINE Begin at the device that controls all others.", answer: "router" },
        { clue: "AUTHENTICATION REQUIRED Find where passwords are written but never stored digitally.", answer: "notebook" },
        { clue: "DATA COLD STORAGE Files preserved at low temperature.", answer: "fridge" },
        { clue: "INPUT DEVICE DETECTED Where commands are typed, not spoken.", answer: "keyboard" },
        { clue: "PERIPHERAL FOUND One click can change everything.", answer: "mouse" },
        { clue: "POWER SOURCE Without this, the system fails.", answer: "power board" },
        { clue: "CACHE CLEARED Where clothes are reset to default state.", answer: "laundry" },
        { clue: "BACKUP LOCATION Where items are stored 'just in case'.", answer: "garage" },
        { clue: "DISPLAY OUTPUT Pixels form reality here.", answer: "monitor" },
        { clue: "SECURITY CHECKPOINT Entry requires permission.", answer: "door" },
        { clue: "ENCRYPTED STORAGE Locked, hidden, not obvious.", answer: "drawer" },
        { clue: "SYSTEM LOG Tracks everything that happens over time.", answer: "clock" },
        { clue: "USER PROFILE Where the operator rests.", answer: "bed" },
        { clue: "FINAL ACCESS NODE Only the admin reaches this point.", answer: "desk" },
        { clue: "ROOT ACCESS GRANTED ACCESS GRANTED SYSTEM BREACHED Retrieve payload from secure location.", answer: "final prize" },
    ]
];

// Load the hunt selected via the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const huntIndex = parseInt(urlParams.get('hunt'));

function loadClueForm() {
    const hunt = hunts[huntIndex];
    const clueList = document.getElementById('clue-list');
    clueList.innerHTML = '';

    hunt.forEach((clue, index) => {
        const clueDiv = document.createElement('div');
        clueDiv.classList.add('clue-item');
        
        const clueInput = document.createElement('input');
        clueInput.value = clue.clue;
        clueInput.placeholder = "Clue text";
        clueDiv.appendChild(clueInput);
        
        const answerInput = document.createElement('input');
        answerInput.value = clue.answer;
        answerInput.placeholder = "Answer text";
        clueDiv.appendChild(answerInput);
        
        clueList.appendChild(clueDiv);
    });
}

// Save changes to the clues and answers
document.getElementById('save-button').addEventListener('click', () => {
    const hunt = hunts[huntIndex];
    const clueItems = document.querySelectorAll('.clue-item');
    
    clueItems.forEach((clueItem, index) => {
        const clueInput = clueItem.querySelector('input:nth-child(1)');
        const answerInput = clueItem.querySelector('input:nth-child(2)');
        
        hunt[index].clue = clueInput.value;
        hunt[index].answer = answerInput.value;
    });

    alert('Changes saved!');
});

window.onload = loadClueForm;
