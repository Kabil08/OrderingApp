function clickMeButton () {
    let count = 0;
    document.getElementById("clickMe").addEventListener('click', function () {
        console.log("clicked");
        ++count;
    })
}

clickMeButton();