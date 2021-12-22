function go() {
    console.log("weszło")
    if (document.getElementById("student").value != "") {
        document.getElementById("questions").style.display = "block"
        document.getElementById("first").style.display = "none"
    } else {
        alert("Przed rozpoczęciem testu, należy podać dane!")
    }
}
function showAnswers(link){
    // console.log(link);
    //console.log(document.getElementById("link").innerText);
    //window.open(document.getElementById("link").innerText, '_blank');
    document.getElementById("testForm").submit();
    window.location.href = '/answers.html';
}
function keyListener(event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Enter' || key === 13) {
        doWhateverYouWantNowThatYourKeyWasHit();
    }
}
document.addEventListener('keyup', keyListener);