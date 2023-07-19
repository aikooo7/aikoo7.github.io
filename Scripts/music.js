var temptext = document.createElement("h3");
var audio = document.getElementById("music");

window.onload = function blur_canvas() {

    document.getElementById("canvas").classList.add("blurr");
    temptext.appendChild(document.createTextNode("Click to enter"))
    document.body.appendChild(temptext);
    temptext.classList.add("text")
    document.getElementById("github").classList.add("blurr");
    document.getElementById("vacban").classList.add("blurr");
    document.getElementById("bio").classList.add("blurr");
    document.getElementById("name").classList.add("blurr");

}



document.body.addEventListener("click", clickBody => {

document.getElementById("canvas").classList.remove("blurr");
document.getElementById("github").classList.remove("blurr");
document.getElementById("vacban").classList.remove("blurr");
document.getElementById("bio").classList.remove("blurr");
document.getElementById("name").classList.remove("blurr");
temptext.remove();
audio.play();


});


    



