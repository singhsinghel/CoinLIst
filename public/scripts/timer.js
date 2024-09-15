
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('time');
    const timerCircle = document.querySelector('.timer-circle');

    let timeLeft = 60;

    function startTimer() {
        timerElement.textContent = timeLeft;
        timerCircle.classList.add('shrinking'); // Start the border shrinking animation

        const countdownInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(countdownInterval);
                resetTimer();
            }
        }, 1000);
    }
   

    async function fetchApiData() {
        try {
            // Send a request to the backend route to fetch new data
            const response = await fetch('/api/update-coins');  // Backend route where API is called
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Data updated:', data);
            // You can also update the UI based on the new data if needed
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    function resetTimer() {
        timeLeft = 60;
        timerCircle.classList.remove('shrinking');
        setTimeout(() => {
            startTimer();
            fetchApiData(); // Fetch data when the timer resets
        }, 1000);
    }

    startTimer();
});
