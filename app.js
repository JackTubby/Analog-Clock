// Get Elements
const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

// Function to get current time
function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // We have 360 degrees in a circle = 360 / 60 = 6 (this is our time interval)
    const timeInterval = 6

    console.log(seconds)
    // Rotate the hand using style rotate by degrees, getting the degree number by timesing what second it is by our time interval
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'
}

setInterval(getTime, 100)