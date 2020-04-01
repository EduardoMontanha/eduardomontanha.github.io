function closeModal() {
    //Hide video modal
    document.getElementById("video-modal").classList.add("hide");
    //Allow body to scroll again
    document.querySelector("body").classList.remove("modal-open");
    //Stop video
    document.getElementById("video").setAttribute("src", "");
}

function openVideoModal() {
    let button = document.getElementById("about-video-btn"),
        videoSrc = button.getAttribute("data-src"),
        modal = document.getElementById("video-modal"),
        video = document.getElementById("video");

    video.setAttribute("src", videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    modal.classList.remove("hide");
    document.querySelector("body").classList.add("modal-open");
}

document.getElementById('about-video-btn').addEventListener('click', openVideoModal);
document.querySelector('#video-modal .close-btn').addEventListener('click', closeModal);