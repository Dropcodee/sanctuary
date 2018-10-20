// Global Variables
let width = 500,
    height = 0,
    filter = 'none',
    streaming = false;

// DOM Elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photos = document.getElementById('photos');
const snap = document.getElementById('snap');
const clear = document.getElementById('clear');
const snapFilter = document.getElementById('snap-filter');
const take = document.getElementById('take');

take.addEventListener('click', function(e) {
    // Get media stream
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(function (stream) {
            // Link to the video source
            video.srcObject = stream;
            // Play Video
            video.play();
        })
        .catch(function (err) {
            console.log(`Error: ${err}`);
        });

    // Play when ready
    video.addEventListener('canplay', function (e) {
        if (!streaming) {
            // Set video / canvas height
            height = video.videoHeight / (video.videoWidth / width);

            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);

            streaming = true;
        }
    }, false);

    // Photo button click
    snap.addEventListener('click', function (e) {
        takePicture();

        e.preventDefault();
    }, false);

    // Snap-Filter event
    snapFilter.addEventListener('change', function (e) {
        // Set filter to chosen option
        filter = e.target.value;
        // Set filter to video
        video.style.filter = filter;

        e.preventDefault();
    });

    // Clear event
    clear.addEventListener('click', function (e) {
        // Clear photos
        photos.innerHTML = '';
        // Change filter back to normal
        filter = 'none';
        // Set video Filter
        video.style.filter = filter;
        snapFilter.selectedIndex = 0;
    })

    // Snap Picture
    function takePicture() {
        // Create canvas
        const context = canvas.getContext('2d');
        if (width && height) {
            // Set canvas props
            canvas.width = width;
            canvas.height = height;
            // Draw an image of the video on the canvas
            context.drawImage(video, 0, 0, width, height);

            // Creat image from canvas
            const imgUrl = canvas.toDataURL('image/png');

            // Create img element
            const img = document.createElement('img');

            // Set img src
            img.setAttribute('src', imgUrl);

            // Set filter img
            img.style.filter = filter;

            // Add image to photos
            photos.appendChild(img);
        }
    }
});