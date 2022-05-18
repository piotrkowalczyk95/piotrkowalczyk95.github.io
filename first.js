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

function showAnswersQ2(link){
    document.getElementById("testForm").submit();
    window.location.href = '/answersQ2.html';
}

function copyToClipboard() {
    let temp = document.createElement('textarea');
    temp.value = copyids.ids[0].id;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
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