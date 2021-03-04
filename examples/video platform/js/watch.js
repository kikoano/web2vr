const video = document.getElementById("video");
const playPause = document.getElementById("playPause");

const startTime = () => {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    document.getElementById("time").innerText =
        h + ":" + checkTime(m) + ":" + checkTime(s);
    // set current video time 
    if (!video.paused) {
        // videoDuration width is 160px
        const offset = video.duration / 160;
        document.getElementById("videoCurrentTime").style.width = video.currentTime / offset + "px";
    }
    setTimeout(startTime, 500);
}
const checkTime = (i) => {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
// show current time
startTime();

// play and pause controls
playPause.onclick = (e) => {
    if (video.paused && prevPlayingVideoId)
        video.play();
    else
        video.pause();
}
// update icon when video paused and played
video.addEventListener("play", () => {
    playPause.src = "images/pause.png";
});
video.addEventListener("pause", () => {
    playPause.src = "images/play.png";
});

// play next video
document.getElementById("next").onclick = () => {
    if (prevPlayingVideoId)
        playVideo(++playingVideoId);
}

const DAY = 5;
const NIGHT = 10000;
// set daynight
document.getElementById("daynight").onclick = (e) => {
    const environment = document.getElementById("environment");
    const lightPosition = environment.getAttribute("environment").lightPosition;
    if (lightPosition.x == DAY)
        environment.setAttribute("environment", "lightPosition", { x: NIGHT, y: lightPosition.y, z: lightPosition.z });
    else
        environment.setAttribute("environment", "lightPosition", { x: DAY, y: lightPosition.y, z: lightPosition.z });
}

// set current volume
const updateVolume = () => {
    document.getElementById("volumeValue").innerText = Math.round(video.volume * 100) + "%";
}
updateVolume();

// increase volume
document.getElementById("volumeDown").onclick = () => {
    if (video.volume <= 0.05)
        video.volume = 0;
    else
        video.volume -= 0.05;
    updateVolume();
}
// decrease volume
document.getElementById("volumeUp").onclick = () => {
    if (video.volume >= 0.95)
        video.volume = 1;
    else
        video.volume += 0.05;
    updateVolume();
}