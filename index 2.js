


const button = document.querySelectorAll(".btn");
const audios = document.querySelectorAll(".audios");

audios.style.display ="none";

button.addEventListener("click", (event) => {
    if(audios.style.display == "none"){
        audios.style.display ="block";
    } else {
        audios.style.display ="none";
    }
});




































