window.onload = () => {
    // adjust the embedded scene
    document.querySelector("a-scene").style.width = `${window.innerWidth - 805}px`;
    document.querySelector("a-scene").style.height = `${window.innerHeight - 14}px`;

    // Web2VR withA-frame 1.2.0 embedded scene setting dynamic style size (not in the css file) doesnt render canvas scene.
    // We have to manuly trigger enterVR and exitVR to enable canvas scene rednering.
    //document.querySelector("a-scene").enterVR();
    // because these are promise functions need to have small delay so they run in order 
    setTimeout(() => {
        //document.querySelector("a-scene").exitVR();

    }, 10);
};
