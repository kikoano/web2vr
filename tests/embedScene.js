window.onload = () => {
    // adjust the embedded scene
    document.getElementsByTagName("a-scene")[0].style.width=`${window.innerWidth-805}px`;
    document.getElementsByTagName("a-scene")[0].style.height=`${window.innerHeight-14}px`;
};