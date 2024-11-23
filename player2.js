// JavaScript for Video Player Functionality

// Fetch video source and title from URL parameters
const params = new URLSearchParams(window.location.search);
const videoSrc = params.get('video'); // Extract video source
const videoTitle = params.get('title'); // Extract video title

// Access HTML elements
const videoSourceElement = document.getElementById('videoSource');
const videoPlayerElement = document.getElementById('videoPlayer');

// Set video source and title dynamically
if (videoSrc) {
    videoSourceElement.src = videoSrc; // Set the video source
    document.title = `CineNest - ${videoTitle || 'Video Player'}`; // Set page title
    videoPlayerElement.load(); // Load the video
} else {
    alert('No video source found! Redirecting to homepage.');
    window.location.href = 'index.html'; // Redirect to homepage or another fallback
}

// Optional: Event listener for debugging purposes
videoPlayerElement.addEventListener('error', (event) => {
    console.error('Error loading video:', event);
    alert('Error loading the video. Please try again later.');
});
