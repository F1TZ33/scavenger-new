let currentHunt = -1;
let currentClueIndex = 0;
const hunts = [
    // Example Hunt Data (Replace with your actual hunt data)
    [
        { clue: "I show your face but I’m not a photo. I hang on walls and doors. Where am I?", answer: "mirror" },
        { clue: "I have pages but no homework. I’m quiet unless you drop me. I live where stories sleep.", answer: "bookshelf" },
        // Add other clues here
    ]
    // Add other hunts here
];

// Event listeners to start the hunt
document.getElementById('start-escape').addEventListener('click', () => startHunt(0));
document.getElementById('start-fortnite').addEventListener('click', () => startHunt(1));
document.getElementById('start-hacker').addEventListener('click', () => startHunt(2));

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

// QR code scanning logic
document.getElementById('camera-button').addEventListener('click', function() {
    const html5QrCode = new Html5Qrcode("qr-reader");
    html5QrCode.start(
        { facingMode: "environment" }, // Use the back camera
        {
            fps: 10,       // Frames per second
            qrbox: 250     // Size of the scanning box
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
            html5QrCode.stop();  // Stop the camera feed after scanning
        },
        (errorMessage) => {
            console.log("QR Code scan error: ", errorMessage);
            document.getElementById('error-message').textContent = "QR scan error. Please try again.";
        }
    ).catch((err) => {
        console.log("Camera Error: ", err);
        document.getElementById('error-message').textContent = "Camera error: " + err.message;
    });
});

// Additional functions for modifying the hunt (if necessary)
function goBack() {
    document.getElementById('modify-screen').style.display = 'none';
    document.getElementById('index-screen').style.display = 'block';
}
