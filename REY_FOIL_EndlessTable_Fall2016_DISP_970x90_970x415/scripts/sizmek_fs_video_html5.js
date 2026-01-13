// ********************************************************************
//   This class handles the Fullscreen HD Video HTML5 Block
// ********************************************************************

class FullscreenVideoAd {
    constructor(config) {
        this.name = 'Fullscreen';
        this.script = { name: 'custom_fs_video_html5.js', version: '1' };
        this.config = config;
        
        this.init();
    }

    // Function to grab options from config
    fetchOptions() {
        this.options = [
            { name: "div", value: 'video' },
            { name: "src", value: '' },
            { name: "typ", value: '' },
            { name: "controls", value: 'true' },
            { name: "auto", value: 'true' },
            { name: "poster", value: '' }
        ];

        for (let i = 0; i < this.options.length; i++) {
            if (this.config.hasOwnProperty('options') && this.config.options.hasOwnProperty(this.options[i].name)) {
                this.options[i].value = this.config.options[this.options[i].name];
            }
        }
    }

    // Initialize the video ad setup
    init() {
        this.fetchOptions();
        this.setUpAd();
        this.setUpVideo();
    }

    // Set up the video element
    setUpVideo() {
        // Get the div where the video will be placed
        const div = document.getElementById(this.options[0].value);
        
        // Create video element
        const vid = document.createElement('video');
        vid.setAttribute('id', 'video-player');
        
        // Add controls if specified
        if (this.options[3].value.toLowerCase() === 'true') {
            vid.setAttribute('controls', 'controls');
        }
        
        // Add poster if specified
        if (this.options[5].value !== '') {
            vid.setAttribute('poster', this.options[5].value);
        }

        // Append the video element to the div
        div.appendChild(vid);
        
        // Add video sources
        this.videos = this.config.options.vid;
        for (let i = 0; i < this.videos.length; i++) {
            const src = document.createElement('source');
            src.src = this.videos[i][0]; // video source URL
            src.type = this.videos[i][1]; // video type
            vid.appendChild(src);
        }

        // Play the video if autoplay is true
        if (this.options[4].value.toLowerCase() === 'true') {
            vid.play();
        }
    }

    // Set up the ad clickthrough functionality
    setUpAd() {
        const clickElement = document.getElementById("click");
        if (clickElement) {
            clickElement.addEventListener('click', (e) => {
                window.open("http://www.your-clickthrough-url.com", "_blank"); // Use your own clickthrough URL
            }, false);
        }
    }
}

// Example usage
const config = {
    options: {
        vid: [
            ["video.mp4", "video/mp4"],  // Add actual video file paths and types
            ["video.webm", "video/webm"]
        ],
        div: "video",
        controls: "true",
        auto: "true",
        poster: "poster.jpg"
    }
};

// Initialize the ad
window.addEventListener("load", function() {
    new FullscreenVideoAd(config);
});
