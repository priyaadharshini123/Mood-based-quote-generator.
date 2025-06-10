document.getElementById("submit-btn").addEventListener("click", function () {
    let moodInput = document.getElementById("mood-input").value.toLowerCase().trim();

    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("name").textContent = userName;
    }

    const moodResponses = {
        sad: [
            "Don't worry, better days are ahead! Keep your head up and stay positive!",
            "It's okay to feel down sometimes. You'll bounce back stronger!",
            "Even the toughest clouds eventually clear. Stay hopeful!",
            "Every day may not be good, but there is something good in every day",
            "Even the darkest night will end and the sun will rise"
        ],
        neutral: [
            "Sometimes, being neutral is a good thing. Just take it easy!",
            "Neutral is peaceful. Enjoy the calm.",
            "Keep going, the best is yet to come!",
            "Discipline is the bridge between goals and accomplishment.",
            "Focus on being productive instead of busy"
        ],
        good: [
            "You are capable of amazing things. Keep pushing forward!",
            "You're doing great! Keep that energy up!",
            "Everything is going to be amazing! Keep it up!",
            "Every day is a new beginning. Take a deep breath and start again with a smile",
            "Do something today that your future self will thank you for"
        ]
    };

    let responseText = "";
    let bgColor = "#f8d7da"; // Default sad color
    let bgImage = "url('https://www.example.com/default-image.jpg')"; // Default image

    // Checking for mood and assigning proper background color and image
    if (/sad|bad|dull|low|down/.test(moodInput)) {
        responseText = getRandom(moodResponses.sad);
        bgColor = "#f8d7da"; // Red for sad
        bgImage = "url('https://www.example.com/sad-image.jpg')";
    } else if (/neutral|okay|fine/.test(moodInput)) {
        responseText = getRandom(moodResponses.neutral);
        bgColor = "#fff3cd"; // Yellow for neutral
        bgImage = "url('https://www.example.com/neutral-image.jpg')";
    } else if (/good|great|awesome|happy|excellent|joyful/.test(moodInput)) {
        responseText = getRandom(moodResponses.good);
        bgColor = "#d4edda"; // Green for good
        // Randomly select between the two "good" images from the 'mood' folder
        bgImage = Math.random() < 0.5 ? "url('mood/Good-1.jpg')" : "url('mood/Good-2.jpg')";
    } else {
        responseText = "Hmm, we couldn't quite understand your mood. Try again!";
    }

    // Update the response and background
    document.getElementById("response").textContent = responseText;
    document.body.style.backgroundColor = bgColor;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = "cover"; // Ensure the image covers the entire background
    document.body.style.backgroundPosition = "center"; // Ensure image is centered
});

// Helper function to get random response from array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
