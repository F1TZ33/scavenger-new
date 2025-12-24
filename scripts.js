let currentHunt = -1;
let currentClueIndex = 0;
const hunts = [
    // Escape the House Hunt (10 clues)
    [
        { clue: "I show your face but I’m not a photo. I hang on walls and doors. Where am I?", answer: "mirror" },
        { clue: "I have pages but no homework. I’m quiet unless you drop me. I live where stories sleep.", answer: "bookshelf" },
        { clue: "I open wide but never talk. I keep food safe and cold. Don’t forget to close me!", answer: "fridge" },
        { clue: "I go round and round but never get dizzy. I clean but hate socks in pairs.", answer: "washing machine" },
        { clue: "I have hands but no arms. I never clap, but I’m always right on time.", answer: "clock" },
        { clue: "I hide your feet when you’re not home. I like pairs, but I’m often missing one.", answer: "shoe rack" },
        { clue: "I’m soft, I’m comfy, and I steal naps. People sit on me 'just for a minute'.", answer: "couch" },
        { clue: "I light up the dark but disappear by day. Flip me on.", answer: "lamp" },
        { clue: "I’m full of secrets, but I don’t talk. You knock before opening me.", answer: "bedroom door" },
        { clue: "You cracked every lock! The final key is hidden where treasures are kept safe. See Mum and Dad", answer: "locked box" }
    ],
    // Fortnite IRL Hunt (12 clues)
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
        { clue: "VICTORY ROYALE 🏆 Claim your reward where legends are made. See Mum and Dad", answer: "prize location" }
    ],
    // Hacker / System Breach Hunt (15 clues)
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
        { clue: "ROOT ACCESS GRANTED ACCESS GRANTED SYSTEM BREACHED Retrieve payload from secure location. See Mum and Dad", answer: "final prize" }
    ]
];

// Event listeners to start the hunt
document.getElementById('start-escape').addEventListener('click', () => startHunt(0));
document.getElementById('start-fortnite').addEventListener('click', () => startHunt(1));
document.getElementById('start-hacker').addEventListener('click', () => startHunt(2));

// Event listeners to modify the hunt
document.getElementById('modify-escape').addEventListener('click', () => modifyHunt(0));
document.getElementById('modify-fortnite').addEventListener('click', () => modifyHunt(1));
document.getElementById('modify-hacker').addEventListener('click', () => modifyHunt(2));

// Function to start the hunt
function startHunt(huntIndex) {
    currentHunt = huntIndex;
    currentClueIndex = 0;
    document.getElementById('index-screen').style.display = 'none';
    document.getElementById('hunt-screen').style.display = 'block';
    showClue();
}

// Function to show the next clue
function showClue() {
    const currentClue = hunts[currentHunt][currentClueIndex];
    document.getElementById('clue').textContent = currentClue.clue;
    document.getElementById('user-input').value = '';  // Reset the input field
    document.getElementById('error-message').textContent = '';  // Clear error messages
}

// Function to handle user input and check answers
document.getElementById('submit-answer').addEventListener('click', function() {
    const userAnswer = document.getElementById('user-input').value.trim().toLowerCase();
    const correctAnswer = hunts[currentHunt][currentClueIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert('Correct answer!');
        nextClue();  // Proceed to the next clue if the answer is correct
    } else {
        document.getElementById('error-message').textContent = "Incorrect answer, please try again.";
    }
});

// Function to proceed to the next clue or page
function nextClue() {
    currentClueIndex++;
    if (currentClueIndex < hunts[currentHunt].length) {
        showClue();  // Show the next clue
    } else {
        showCongratulations();  // If all clues are completed, show the congratulations screen
    }
}

// Function to show the congratulations message
function showCongratulations() {
    document.getElementById('hunt-screen').style.display = 'none';
    document.getElementById('congratulations-screen').style.display = 'block';
}

// Function to modify the hunt
function modifyHunt(huntIndex) {
    currentHunt = huntIndex;  // Set current hunt to the selected one
    document.getElementById('index-screen').style.display = 'none';
    document.getElementById('modify-screen').style.display = 'block';  // Show the modify screen

    const modifyCluesContainer = document.getElementById('modify-clues');
    modifyCluesContainer.innerHTML = '';  // Clear any previous form fields

    // Loop through the clues and create form inputs to modify them
    hunts[currentHunt].forEach((clue, index) => {
        const clueRow = document.createElement('div');
        clueRow.classList.add('clue-row');
        
        // Create the clue input
        const questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.value = clue.clue;
        questionInput.placeholder = `Clue ${index + 1}`;
        questionInput.classList.add('modify-input');
        
        // Create the location input (Answer)
        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.value = clue.answer;
        answerInput.placeholder = `Location for Clue ${index + 1}`;
        answerInput.classList.add('modify-input');
        
        clueRow.appendChild(questionInput);
        clueRow.appendChild(answerInput);
        modifyCluesContainer.appendChild(clueRow);
    });
}

// Function to save changes to the clues
function saveChanges() {
    const modifiedClues = [];
    const clueRows = document.querySelectorAll('#modify-clues .clue-row');

    clueRows.forEach((row, index) => {
        const questionInput = row.querySelector('input');
        const answerInput = row.querySelectorAll('input')[1]; // Assuming there are two input fields (clue, answer)

        modifiedClues.push({
            clue: questionInput.value,
            answer: answerInput.value
        });
    });

    // Save modified clues to localStorage (or handle as needed)
    localStorage.setItem('modifiedHunt', JSON.stringify(modifiedClues));

    alert('Changes saved successfully!');
}

// Function to go back to the hunt selection screen
function goBack() {
    document.getElementById('modify-screen').style.display = 'none';
    document.getElementById('index-screen').style.display = 'block';
}

// QR code scanning logic
document.getElementById('camera-button').addEventListener('click', function() {
    const html5QrCode = new Html5Qrcode("qr-reader");
    html5QrCode.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        (decodedText, decodedResult) => {
            alert("QR Code Scanned: " + decodedText);
            // Use the decodedText (QR code content) to compare with the correct answer
            const userAnswer = decodedText.trim().toLowerCase();
            const correctAnswer = hunts[currentHunt][currentClueIndex].answer.toLowerCase();
            if (userAnswer === correctAnswer) {
                alert('Correct answer!');
                nextClue();  // Proceed to the next clue if the answer is correct
            } else {
                document.getElementById('error-message').textContent = "Incorrect answer, please try again.";
            }
            html5QrCode.stop();  // Stop camera after scan
        },
        (errorMessage) => {
            console.log("QR Code scan error: ", errorMessage);
        }
    );
});
