document.addEventListener('DOMContentLoaded', function () {
    // Play voice note when button is clicked
    const playButton = document.getElementById('play-voice-note');
    const voiceNote = new Audio('your-voice-note.mp3'); // Replace with the correct file path

    playButton.addEventListener('click', () => {
        voiceNote.play().catch((error) => {
            console.error('Audio playback failed:', error);
        });
    });

    // Waste Types Pie Chart
    const ctxWasteTypes = document.getElementById('wasteTypesChart').getContext('2d');
    new Chart(ctxWasteTypes, {
        type: 'pie',
        data: {
            labels: ['Recyclable', 'Compostable', 'Landfill', 'Hazardous'],
            datasets: [{
                label: 'Waste Types Distribution',
                data: [50, 30, 100, 20],
                backgroundColor: ['#4CAF50', '#FFC107', '#F44336', '#9C27B0'],
                borderColor: ['#fff', '#fff', '#fff', '#fff'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // Monthly Waste Production Line Chart
    const ctxMonthlyWaste = document.getElementById('monthlyWasteChart').getContext('2d');
    new Chart(ctxMonthlyWaste, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Waste Production (kg)',
                data: [220, 210, 190, 200, 180, 210],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // Read tips aloud on button click
    document.getElementById('read-tips').addEventListener('click', () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = `Separate recyclables from non-recyclables.
                       Compost food waste to reduce landfill contribution.
                       Minimize the use of single-use plastics.
                       Donate items you no longer need.
                       Consider purchasing products with minimal packaging.`;
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    });
});
