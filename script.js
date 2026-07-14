function updateClock() {

    const now = new Date();

    const hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) {
    minutes = "0" + minutes;
}
    let seconds = now.getSeconds();
    if (seconds < 10) {
    seconds = "0" + seconds;
}

    const time = hours + ":" + minutes + ":" + seconds;

    const title = document.getElementById("title");

    title.textContent = time;

}

updateClock();
setInterval(updateClock, 1000);