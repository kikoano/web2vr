let videos;
let fuse;
let autoplay = false;
let playingVideoId = 0;
let prevPlayingVideoId = null;
let videoLiked = 0; // 0 = nothing, 1 = true, 2 = false
const VIDEO_WIDTH = "2000px";
// fetch videos
const getVideos = async () => {
    let response = await fetch("./data/videos.json");
    videos = await response.json();
    // init fuse
    fuse = new Fuse(videos, { keys: ["title"] });
    showVideos(videos);
    showRecommended(videos);
}
getVideos();

// show search videos
const showVideos = (videos) => {
    // remove previous video cards
    const cards = document.getElementById("cards");
    while (cards.firstChild)
        cards.removeChild(cards.firstChild);

    // create card for each video
    for (const video of videos) {
        const col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("mt-4");

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("videoId", video.id);
        card.onclick = () => {
            playVideo(card.getAttribute("videoId"));
        }
        col.appendChild(card);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");
        card.appendChild(imageContainer);

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = video.thumbnail;
        imageContainer.appendChild(image);

        const lenght = document.createElement("div");
        lenght.textContent = video.lenght;
        imageContainer.appendChild(lenght);

        const title = document.createElement("h5");
        title.classList.add("card-text");
        title.textContent = video.title;
        card.appendChild(title);

        const info = document.createElement("div");
        info.classList.add("row");
        info.classList.add("card-text");
        info.classList.add("cardInfo");
        card.appendChild(info);

        const channel = document.createElement("div");
        channel.classList.add("col");
        channel.classList.add("text-left");
        channel.textContent = video.channel;
        info.appendChild(channel);

        const views = document.createElement("div");
        views.classList.add("col");
        views.classList.add("text-right");
        views.textContent = video.views + " views";
        info.appendChild(views);

        document.getElementById("cards").appendChild(col);
    }
}

// show recommended videos
const showRecommended = (videos) => {
    for (const video of videos) {
        const col = document.createElement("div");
        col.classList.add("col");

        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("video");
        row.setAttribute("videoId", video.id);
        row.onclick = () => {
            playVideo(row.getAttribute("videoId"));
        }
        col.appendChild(row);

        const colImage = document.createElement("div");
        colImage.classList.add("col");
        row.appendChild(colImage);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");
        colImage.appendChild(imageContainer);

        const image = document.createElement("img");
        image.classList.add("img-thumbnail");
        image.src = video.thumbnail;
        imageContainer.appendChild(image);

        const lenght = document.createElement("div");
        lenght.textContent = video.lenght;
        imageContainer.appendChild(lenght);

        const infoCol = document.createElement("div");
        infoCol.classList.add("col");
        infoCol.classList.add("infoCol");
        row.appendChild(infoCol);

        const title = document.createElement("h4");
        title.classList.add("col");
        title.textContent = video.title;
        infoCol.appendChild(title);

        const channel = document.createElement("div");
        channel.classList.add("col");
        channel.classList.add("videoInfo");
        channel.textContent = video.channel;
        infoCol.appendChild(channel);

        const views = document.createElement("div");
        views.classList.add("col");
        views.classList.add("videoInfo");
        views.textContent = video.views + " views";
        infoCol.appendChild(views);

        document.getElementById("recommendedVideos").appendChild(col);
    }
}
// show video description
const showDescription = (video) => {
    document.getElementById("title").textContent = video.title;
    document.getElementById("views").textContent = video.views + " views";
    document.getElementById("likes").children[1].textContent = video.likes;
    document.getElementById("dislikes").children[1].textContent = video.dislikes;
    document.getElementById("avatar").src = video.channelAvatar;
    document.getElementById("channel").textContent = video.channel;
    document.getElementById("subscribers").textContent = video.channelSubscribers;
    document.getElementById("upload-date").textContent = "Published on " + video.uploadDate;
    document.getElementById("details").innerHTML = "<p>" + video.description + "</p>";
}

const likeDislikeClick = (e, target = true) => {
    if (target) {
        const clicked = e.target.getAttribute("clicked") == "true";
        const type = e.target.id;
        if (type == "like")
            if (!clicked)
                videoLiked = 1;
            else
                videoLiked = 0;
        else if (type == "dislike") {
            if (!clicked)
                videoLiked = 2;
            else
                videoLiked = 0;
        }
    }
    if (videoLiked == 0) {
        document.getElementById("like").setAttribute("clicked", false);
        document.getElementById("dislike").setAttribute("clicked", false);
        document.getElementById("like").src = "./images/like light.png";
        document.getElementById("dislike").src = "./images/dislike light.png";
    }
    else if (videoLiked == 1) {
        document.getElementById("like").setAttribute("clicked", true);
        document.getElementById("dislike").setAttribute("clicked", false);
        document.getElementById("like").src = "./images/like blue.png";
        document.getElementById("dislike").src = "./images/dislike light.png";
    }
    else if (videoLiked == 2) {
        document.getElementById("like").setAttribute("clicked", false);
        document.getElementById("dislike").setAttribute("clicked", true);
        document.getElementById("like").src = "./images/like light.png";
        document.getElementById("dislike").src = "./images/dislike blue.png";
    }
}
// liked video
document.getElementById("like").onclick = likeDislikeClick;
// disliked video
document.getElementById("dislike").onclick = likeDislikeClick;

// subscribe clicked show modal message
document.getElementById("subscribeBtn").onclick = () => {
    // show for 5s then hide
    const modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.classList.add("rotate-hor-center");
    setTimeout(() => {
        modal.style.visibility = "hidden";
        modal.classList.remove("rotate-hor-center");
    }, 5000);
}

// play video
const playVideo = (id) => {
    const video = videos.filter(v => v.id == id)[0];
    document.getElementById("video").firstElementChild.src = video.url;
    document.getElementById("video").load();
    document.getElementById("video").play();

    if (prevPlayingVideoId)
        document.querySelector(`#recommendedVideos > .col:nth-child(${prevPlayingVideoId})`).firstChild.classList.remove("currentVideo");
    prevPlayingVideoId = id;
    playingVideoId = id;
    document.querySelector(`#recommendedVideos > .col:nth-child(${playingVideoId})`).firstChild.classList.add("currentVideo");

    document.getElementById("video").style.visibility = "visible";
    document.getElementById("searchResult").style.visibility = "hidden";
    interfaceVisibility(false);

    // reset like dislike
    videoLiked = 0;
    likeDislikeClick(null, false);

    // show description
    showDescription(video);

    const vr = video.vr;
    if (vr) {
        document.getElementById("video").style.width = "1px"; // no need to render html video because it will reduce performance
        document.getElementById("video").setAttribute("vr", video.vrRotate);
        document.getElementById("environment").setAttribute("environment", "active", false);
        document.getElementById("environment").setAttribute('visible',false);
        document.querySelectorAll("a-sky")[1].object3D.visible = false; // never needed in the first place

        // enable 360 lighting
        for (const light of document.querySelectorAll(".light360"))
            light.setAttribute("visible", true);
    }
    else {
        document.getElementById("video").style.width = VIDEO_WIDTH;
        document.getElementById("video").removeAttribute("vr");
        document.getElementById("environment").setAttribute("environment", "active", true);
        document.getElementById("environment").setAttribute('visible',true);

        // disable 360 lighting
        for (const light of document.querySelectorAll(".light360"))
            light.setAttribute("visible", false);
    }
}

// when playing video hide interface, when paused show interface
document.getElementById("video").addEventListener("play", () => {
    document.getElementById("searchResult").style.visibility = "hidden";
    interfaceVisibility(false);
});
document.getElementById("video").addEventListener("pause", () => {
    interfaceVisibility(true);
});

// show/hide interface
const interfaceVisibility = (state) => {
    let visibility;
    if (state)
        visibility = "visible";
    else
        visibility = "hidden";
    document.getElementById("searchbar").style.visibility = visibility;
    document.getElementById("recommended").style.visibility = visibility;
    document.getElementById("description").style.visibility = visibility;
}

// search and display video
document.getElementById("searchBtn").onclick = () => {
    document.getElementById("video").pause();
    document.getElementById("searchResult").style.visibility = "visible";

    showVideos(fuse.search(document.getElementById("searchInput").value).map(e => e.item));
}

// when autoplay changed
document.getElementById("autoplay").addEventListener("change", (event) => {
    if (event.target.checked)
        autoplay = true;
    else
        autoplay = false;
});
// dispatch change at start to see starting check
const event = new Event('change');
document.getElementById("autoplay").dispatchEvent(event);

// when video ends play next if autoplay is true
document.getElementById("video").addEventListener("ended", () => {
    if (autoplay)
        playVideo(++playingVideoId);
});